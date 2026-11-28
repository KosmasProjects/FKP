import { lazy, Suspense, useEffect, useLayoutEffect } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { navigate, usePath } from "./navigation";
import { projectBySlug } from "./data/projects";
import { heroBySlug } from "./data/content/lazaret";
import { pressById } from "./data/content/prasa";
import { site } from "./data/site";

// Podstrony ładowane na żądanie – strona główna nie pobiera ich kodu.
const Project = lazy(() => import("./pages/Project"));
const Czerwiec56 = lazy(() => import("./pages/Czerwiec56"));
const Lazaret = lazy(() => import("./pages/czerwiec/Lazaret"));
const Bohater = lazy(() => import("./pages/czerwiec/Bohater"));
const Wystawa = lazy(() => import("./pages/czerwiec/Wystawa"));
const Przedstawienie = lazy(() => import("./pages/czerwiec/Przedstawienie"));
const Groby = lazy(() => import("./pages/czerwiec/Groby"));
const Prasa = lazy(() => import("./pages/czerwiec/Prasa"));
const PressCopy = lazy(() => import("./pages/czerwiec/Prasa").then((m) => ({ default: m.PressCopy })));
const Fundacja = lazy(() => import("./pages/Fundacja"));
const Blog = lazy(() => import("./pages/Blog"));
const Przyjaciele = lazy(() => import("./pages/Przyjaciele"));
const Wesprzyj = lazy(() => import("./pages/Wesprzyj"));
const Kontakt = lazy(() => import("./pages/Kontakt"));
const NotFound = lazy(() => import("./pages/NotFound"));

const PAGES = {
  "/": { title: null, Component: Home },
  "/czerwiec56": { title: "Powstańczy Lazaret ’56 – Czerwiec ’56", Component: Lazaret },
  "/czerwiec56/czerwcowe-ulice": { title: "Czerwcowe ulice – Czerwiec ’56", Component: Czerwiec56 },
  "/czerwiec56/wystawa": { title: "Wystawa „Kule wpadały do sali operacyjnej” – Czerwiec ’56", Component: Wystawa },
  "/czerwiec56/przedstawienie": { title: "Przedstawienie „Bóg i dyrektor nad nami czuwał” – Czerwiec ’56", Component: Przedstawienie },
  "/czerwiec56/groby": { title: "Groby bohaterów Poznańskiego Czerwca ’56", Component: Groby },
  "/czerwiec56/prasa": { title: "Dokumentacja publikacji – Czerwiec ’56", Component: Prasa },
  "/fundacja": { title: "Fundacja", Component: Fundacja },
  "/blog": { title: "Blog", Component: Blog },
  "/przyjaciele": { title: "Przyjaciele i partnerzy", Component: Przyjaciele },
  "/wesprzyj": { title: "Wesprzyj nas", Component: Wesprzyj },
  "/kontakt": { title: "Kontakt", Component: Kontakt },
};

// Stare adresy, które mogły zostać gdzieś udostępnione.
const REDIRECTS = {
  "/aktualnosci": "/blog",
  "/czerwiec": "/czerwiec56",
  "/czerwiec-56": "/czerwiec56",
  "/lazaret": "/czerwiec56",
  "/lazaret56": "/czerwiec56",
  "/lazaret-linkownia": "/czerwiec56",
  "/czerwiec56/bohaterowie": "/czerwiec56#bohaterowie",
  "/mowia-o-nas": "/ulicznikpoznanski#podcasty",
};

function resolve(path) {
  if (PAGES[path]) return PAGES[path];

  // /czerwiec56/bohaterowie/<slug>
  const heroMatch = path.match(/^\/czerwiec56\/bohaterowie\/([a-z-]+)$/);
  if (heroMatch && heroBySlug[heroMatch[1]]) {
    const hero = heroBySlug[heroMatch[1]];
    return { title: `${hero.name} – Bohaterowie Czerwca ’56`, Component: Bohater, props: { hero } };
  }

  const pressMatch = path.match(/^\/czerwiec56\/prasa\/([a-z0-9-]+)$/);
  if (pressMatch && pressById[pressMatch[1]]) {
    const item = pressById[pressMatch[1]];
    return { title: `${item.title} – ${item.site}`, Component: PressCopy, props: { item } };
  }

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
