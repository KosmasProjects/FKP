import { lazy, Suspense, useEffect, useLayoutEffect } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { navigate, usePath } from "./navigation";
import { projectBySlug } from "./data/projects";
import { site } from "./data/site";

// Podstrony ładowane na żądanie – strona główna nie pobiera ich kodu.
const Project = lazy(() => import("./pages/Project"));
const Fundacja = lazy(() => import("./pages/Fundacja"));
const Przyjaciele = lazy(() => import("./pages/Przyjaciele"));
const Wesprzyj = lazy(() => import("./pages/Wesprzyj"));
const Kontakt = lazy(() => import("./pages/Kontakt"));
const NotFound = lazy(() => import("./pages/NotFound"));

const PAGES = {
  "/": { title: null, Component: Home },
  "/fundacja": { title: "Fundacja", Component: Fundacja },
  "/przyjaciele": { title: "Przyjaciele i partnerzy", Component: Przyjaciele },
  "/wesprzyj": { title: "Wesprzyj nas", Component: Wesprzyj },
  "/kontakt": { title: "Kontakt", Component: Kontakt },
};

// Stare adresy, które mogły zostać gdzieś udostępnione.
const REDIRECTS = {
  "/aktualnosci": "/",
  "/mowia-o-nas": "/ulicznikpoznanski#podcasty",
};

function resolve(path) {
  if (PAGES[path]) return PAGES[path];

  const [, slug, rest] = path.split("/");
  const project = projectBySlug[slug];
  if (project) {
    // np. /ulicznikpoznanski/player/3 z poprzedniej wersji strony
    if (rest) return { redirect: `${project.path}${project.hasPodcasts ? "#podcasty" : ""}` };
    return { title: project.title, Component: Project, props: { project } };
  }

  if (REDIRECTS[path]) return { redirect: REDIRECTS[path] };
  return { title: "Nie znaleziono strony", Component: NotFound };
}

export default function App() {
  const path = usePath();
  const route = resolve(path);

  useEffect(() => {
    if (route.redirect) navigate(route.redirect, { replace: true });
  }, [route.redirect]);

  useEffect(() => {
    document.title = route.title ? `${route.title} – ${site.name}` : site.name;
  }, [route.title]);

  // Po zmianie podstrony przewiń na górę (albo do kotwicy z adresu).
  useLayoutEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) window.scrollTo(0, 0);
  }, [path]);

  if (route.redirect) return null;
  const { Component, props } = route;

  return (
    <Layout>
      <Suspense fallback={<div className="page-loading" aria-busy="true" />}>
        {/* key={path} – każda podstrona startuje ze świeżym stanem (np. wybrany kafelek). */}
        <Component key={path} {...props} />
        <ScrollToHash path={path} />
      </Suspense>
    </Layout>
  );
}

// Renderowany wewnątrz Suspense, więc uruchamia się dopiero gdy treść jest gotowa.
function ScrollToHash({ path }) {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (id) document.getElementById(id)?.scrollIntoView();
  }, [path]);
  return null;
}
