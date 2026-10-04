// Minimalny router oparty o History API – strona ma kilkanaście statycznych
// podstron, więc pełna biblioteka routingu nie jest potrzebna.
// Komponenty <Link> i <NavLink> są w router.jsx.
import { useSyncExternalStore } from "react";

// import.meta.env.BASE_URL to np. "/FKP/" – usuwamy końcowy ukośnik.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

const NAV_EVENT = "app:navigate";

export function normalize(path) {
  const clean = path.replace(/\/{2,}/g, "/").replace(/(.)\/$/, "$1");
  return clean.toLowerCase() || "/";
}

function readPath() {
  let path = decodeURIComponent(window.location.pathname);
  if (BASE && path.startsWith(BASE)) path = path.slice(BASE.length);
  return normalize(path || "/");
}

function subscribe(callback) {
  window.addEventListener("popstate", callback);
  window.addEventListener(NAV_EVENT, callback);
  return () => {
    window.removeEventListener("popstate", callback);
    window.removeEventListener(NAV_EVENT, callback);
  };
}

export function usePath() {
  return useSyncExternalStore(subscribe, readPath, () => "/");
}

export function href(to) {
  return to.startsWith("#") ? to : BASE + to;
}

export function navigate(to, { replace = false } = {}) {
  const url = href(to);
  if (replace) window.history.replaceState(null, "", url);
  else window.history.pushState(null, "", url);
  window.dispatchEvent(new Event(NAV_EVENT));
}
