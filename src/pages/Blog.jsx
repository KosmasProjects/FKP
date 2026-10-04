import { use, useEffect, useRef, useState } from "react";
import { FaArrowUpRightFromSquare, FaFacebookF, FaImages, FaPlay } from "react-icons/fa6";
import PageTitle from "../components/PageTitle";
import { site } from "../data/site";

// Plik generuje scripts/fetch-facebook.mjs (lokalnie: `npm run fb`, na GitHubie: workflow).
const POSTS_URL = `${import.meta.env.BASE_URL}facebook-posts.json`;

let postsPromise;
function loadPosts() {
  postsPromise ??= fetch(POSTS_URL)
    .then((response) => (response.ok ? response.json() : null))
    .catch(() => null);
  return postsPromise;
}

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("pl-PL", { day: "numeric", month: "long", year: "numeric" });

export default function Blog() {
  const feed = use(loadPosts());
  const posts = feed?.posts ?? [];

  return (
    <>
      <PageTitle title="Blog" subtitle="Najnowsze wpisy z Facebooka fundacji" />

      {posts.length > 0 ? (
        <section className="container blog-feed">
          <PostCard post={posts[0]} featured />
          <div className="blog-feed__grid">
            {posts.slice(1).map((post, index) => (
              <PostCard key={post.id} post={post} index={index} />
            ))}
          </div>
          <p className="blog__more">
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer">
              <FaFacebookF aria-hidden="true" /> Zobacz wszystkie wpisy na Facebooku
            </a>
            <small>Ostatnia aktualizacja: {formatDate(feed.updatedAt)}</small>
          </p>
        </section>
      ) : (
        <section className="container blog">
          <FacebookPlugin />
          <p className="blog__more">
            <a href={site.social.facebook} target="_blank" rel="noopener noreferrer">
              Zobacz wszystkie wpisy na Facebooku
            </a>
          </p>
        </section>
      )}
    </>
  );
}

// ---------------------------------------------------------------------------
// Karta posta

const LONG_TEXT = 320;

function PostCard({ post, featured = false, index = 0 }) {
  const [expanded, setExpanded] = useState(false);
  const isLong = post.text.length > LONG_TEXT;

  return (
    <article
      className={`post-card${featured ? " post-card--featured" : ""}`}
      style={{ "--i": index }}
    >
      {post.image && (
        <a
          className="post-card__media"
          href={post.link}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={-1}
          aria-hidden="true"
        >
          <img src={post.image} alt="" loading={featured ? "eager" : "lazy"} decoding="async" />
          {post.isVideo && (
            <span className="post-card__badge post-card__badge--play">
              <FaPlay />
            </span>
          )}
          {!post.isVideo && post.imageCount > 1 && (
            <span className="post-card__badge">
              <FaImages /> {post.imageCount}
            </span>
          )}
        </a>
      )}

      <div className="post-card__body">
        <time className="post-card__date" dateTime={post.date}>
          {formatDate(post.date)}
        </time>

        {post.text && (
          <p className={`post-card__text${isLong && !expanded ? " is-clamped" : ""}`}>
            <Linkify text={post.text} />
          </p>
        )}
        {isLong && (
          <button
            type="button"
            className="post-card__more"
            aria-expanded={expanded}
            onClick={() => setExpanded((value) => !value)}
          >
            {expanded ? "Zwiń" : "Czytaj dalej"}
          </button>
        )}

        {post.share?.url && (
          <a className="post-card__share" href={post.share.url} target="_blank" rel="noopener noreferrer">
            <span>{post.share.title || new URL(post.share.url).hostname}</span>
            <small>{new URL(post.share.url).hostname.replace(/^www\./, "")}</small>
          </a>
        )}

        <a className="post-card__link" href={post.link} target="_blank" rel="noopener noreferrer">
          Zobacz na Facebooku <FaArrowUpRightFromSquare aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

// Zamienia adresy w tekście posta na klikalne linki.
const URL_PATTERN = /(https?:\/\/[^\s]+)/g;

function Linkify({ text }) {
  return text.split(URL_PATTERN).map((part, index) =>
    index % 2 === 1 ? (
      <a key={index} href={part} target="_blank" rel="noopener noreferrer">
        {part.replace(/^https?:\/\/(www\.)?/, "").slice(0, 40)}
        {part.length > 48 ? "…" : ""}
      </a>
    ) : (
      part
    ),
  );
}

// ---------------------------------------------------------------------------
// Zapas: oficjalna wtyczka Facebooka (gdy posty nie zostały pobrane)

const CONSENT_KEY = "fkp:facebook-consent";

function readConsent() {
  try {
    return window.localStorage.getItem(CONSENT_KEY) === "yes";
  } catch {
    return false;
  }
}

function FacebookPlugin() {
  const [consent, setConsent] = useState(readConsent);

  if (!consent) {
    return (
      <div className="blog__consent">
        <span className="blog__consent-icon" aria-hidden="true">
          <FaFacebookF />
        </span>
        <h2>Wpisy z Facebooka</h2>
        <p>
          Najnowsze posty wyświetlamy bezpośrednio z naszego profilu na Facebooku. Po ich
          załadowaniu Facebook może zapisać w Twojej przeglądarce pliki cookie.
        </p>
        <button
          type="button"
          className="button button--primary"
          onClick={() => {
            try {
              window.localStorage.setItem(CONSENT_KEY, "yes");
            } catch {
              // Prywatne okno – wtyczka i tak się wyświetli.
            }
            setConsent(true);
          }}
        >
          Pokaż posty
        </button>
      </div>
    );
  }

  return <FacebookTimeline />;
}

// Oficjalna wtyczka strony Facebooka (Page Plugin). Szerokość: 180–500 px.
function FacebookTimeline() {
  const boxRef = useRef(null);
  const [width, setWidth] = useState(null);

  useEffect(() => {
    const measure = () =>
      setWidth(Math.max(180, Math.min(500, Math.floor(boxRef.current.clientWidth))));
    measure();
    let timer;
    const onResize = () => {
      clearTimeout(timer);
      timer = setTimeout(measure, 300);
    };
    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const height = 1200;
  const params = new URLSearchParams({
    href: site.social.facebook,
    tabs: "timeline",
    width: String(width ?? 500),
    height: String(height),
    small_header: "false",
    adapt_container_width: "true",
    hide_cover: "false",
    show_facepile: "false",
    locale: "pl_PL",
  });

  return (
    <div ref={boxRef} className="blog__timeline">
      {width && (
        <iframe
          key={width}
          title="Wpisy Fundacji Kochania Poznania na Facebooku"
          src={`https://www.facebook.com/plugins/page.php?${params}`}
          width={width}
          height={height}
          loading="lazy"
          allow="encrypted-media; clipboard-write; picture-in-picture; web-share"
        />
      )}
    </div>
  );
}
