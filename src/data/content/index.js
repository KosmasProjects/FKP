// Treści projektów są ładowane dopiero po wejściu na podstronę projektu,
// żeby strona główna nie pobierała ok. 100 KB tekstu.
const loaders = {
  rozwazniiromantyczni: () => import("./rozwazniiromantyczni.js"),
  ws44: () => import("./ws44.js"),
  bimbawhistorie: () => import("./bimbawhistorie.js"),
  poznanskielegendy: () => import("./poznanskielegendy.js"),
  pomnikipoznania: () => import("./pomnikipoznania.js"),
  ulicznikpoznanski: () => import("./ulicznikpoznanski.js"),
  literackipoznan: () => import("./literackipoznan.js"),
  herstoriawartapoznania: () => import("./herstoriawartapoznania.js"),
};

const cache = new Map();

/** Zwraca (zapamiętaną) obietnicę z treścią projektu – do użycia z React `use()`. */
export function loadContent(slug) {
  if (!cache.has(slug)) cache.set(slug, loaders[slug]().then((module) => module.default));
  return cache.get(slug);
}
