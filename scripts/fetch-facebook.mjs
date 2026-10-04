// Pobiera najnowsze posty ze strony fundacji na Facebooku i zapisuje je do
// public/facebook-posts.json, z którego korzysta podstrona „Blog”.
//
// Wymaga zmiennych środowiskowych (patrz FACEBOOK.md):
//   FB_PAGE_ID     – identyfikator strony na Facebooku
//   FB_PAGE_TOKEN  – token dostępu strony (Page Access Token)
//
// Lokalnie można je wpisać do pliku .env.local (nie trafia do gita) i uruchomić:
//   npm run fb
// Na GitHubie ustawia się je jako sekrety repozytorium – workflow robi resztę.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const GRAPH_VERSION = "v26.0";
const LIMIT = 12;
const OUT_FILE = resolve(import.meta.dirname, "../public/facebook-posts.json");

loadEnvFile(resolve(import.meta.dirname, "../.env.local"));

const pageId = process.env.FB_PAGE_ID;
const token = process.env.FB_PAGE_TOKEN;

if (!pageId || !token) {
  console.warn("[facebook] Brak FB_PAGE_ID lub FB_PAGE_TOKEN – pomijam pobieranie postów.");
  process.exit(0);
}

const fields = [
  "id",
  "message",
  "created_time",
  "permalink_url",
  "full_picture",
  "attachments{media_type,type,title,description,url,unshimmed_url,media,subattachments.limit(4){media}}",
].join(",");

const url = new URL(`https://graph.facebook.com/${GRAPH_VERSION}/${pageId}/posts`);
url.search = new URLSearchParams({ fields, limit: String(LIMIT), access_token: token });

const response = await fetch(url);
const data = await response.json();

if (!response.ok || data.error) {
  // Nie przerywamy builda – strona po prostu pokaże zapasowy widok bloga.
  console.error("[facebook] Błąd API:", data.error?.message ?? response.status);
  process.exit(0);
}

const posts = data.data
  .map(normalize)
  .filter((post) => post.text || post.image);

mkdirSync(dirname(OUT_FILE), { recursive: true });
writeFileSync(
  OUT_FILE,
  JSON.stringify({ updatedAt: new Date().toISOString(), posts }, null, 2),
);
console.log(`[facebook] Zapisano postów: ${posts.length} (${OUT_FILE})`);

// ---------------------------------------------------------------------------

function normalize(post) {
  const attachment = post.attachments?.data?.[0];
  const images = [
    post.full_picture,
    ...(attachment?.subattachments?.data ?? []).map((a) => a.media?.image?.src),
  ].filter(Boolean);

  const isShare = attachment?.type === "share";

  return {
    id: post.id,
    date: post.created_time,
    text: (post.message ?? "").trim(),
    image: images[0] ?? null,
    imageCount: Math.max(images.length, attachment?.subattachments?.data?.length ?? 0),
    isVideo: /video/i.test(attachment?.media_type ?? ""),
    link: post.permalink_url,
    // Udostępniony link (artykuł, wydarzenie) – pokazywany jako podgląd pod tekstem.
    share: isShare
      ? {
          title: attachment.title ?? "",
          url: attachment.unshimmed_url ?? attachment.url,
        }
      : null,
  };
}

function loadEnvFile(path) {
  if (!existsSync(path)) return;
  for (const line of readFileSync(path, "utf8").split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (match && !process.env[match[1]]) {
      process.env[match[1]] = match[2].replace(/^["']|["']$/g, "");
    }
  }
}
