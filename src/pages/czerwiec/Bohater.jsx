import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaBookOpen, FaFilm, FaMicrophoneLines, FaNewspaper } from "react-icons/fa6";
import { Link } from "../../router";
import CzerwiecNav from "../../components/czerwiec/CzerwiecNav";
import BookViewer from "../../components/BookViewer";
import { heroes, heroCover, heroArticle, brochureBook, interviewBook } from "../../data/content/lazaret";

function Viewer({ book }) {
  const [page, setPage] = useState(1);
  return <BookViewer book={book} page={page} onPageChange={setPage} />;
}

// Kopia artykułu z miastopoznaj.pl – tekst trzymamy u siebie na wypadek, gdyby link przestał działać.
function Article({ hero }) {
  const [article, setArticle] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch(heroArticle(hero))
      .then((response) => response.json())
      .then(setArticle)
      .catch(() => setError(true));
  }, [hero]);
  if (error) return <p className="hero-detail__soon">Nie udało się wczytać artykułu.</p>;
  if (!article) return <p className="muted">Wczytywanie…</p>;
  return (
    <article className="archived-article">
      <h2 className="archived-article__title">{article.title}</h2>
      <p className="archived-article__meta">
        {article.author} · {article.date.split("-").reverse().join(".")} · {article.source}
      </p>
      {article.blocks.map(([type, text], i) =>
        type === "h" ? <h3 key={i}>{text}</h3> : <p key={i}>{text}</p>,
      )}
      <p className="archived-article__source">
        Tekst ukazał się w portalu miastopoznaj.pl:{" "}
        <a href={article.url} target="_blank" rel="noopener noreferrer">
          oryginał
        </a>{" "}
        ·{" "}
        <Link to={`/czerwiec56/prasa/miastopoznaj-${hero.slug}`}>kopia (PDF)</Link>
      </p>
    </article>
  );
}

export default function Bohater({ hero }) {
  const index = heroes.indexOf(hero);
  const prev = heroes[(index - 1 + heroes.length) % heroes.length];
  const next = heroes[(index + 1) % heroes.length];

  const tabs = [
    hero.brochure && { id: "broszura", label: "Broszura", icon: FaBookOpen },
    hero.interview && { id: "rozmowa", label: "Rozmowa (scenariusz)", icon: FaMicrophoneLines },
    { id: "film", label: "Film", icon: FaFilm, soon: true },
    { id: "artykul", label: "Artykuł", icon: FaNewspaper, soon: !hero.article },
  ].filter(Boolean);
  const initialTab = typeof window !== "undefined" && window.location.hash === "#artykul" && hero.article ? "artykul" : tabs[0].id;
  const [tab, setTab] = useState(initialTab);
  const cover = heroCover(hero);

  return (
    <div className="czerwiec">
      <CzerwiecNav />

      <section className="container hero-detail">
        <Link to="/czerwiec56#bohaterowie" className="hero-detail__back">
          <FaArrowLeft aria-hidden="true" /> Wszyscy bohaterowie
        </Link>
        <div className="hero-detail__head">
          {cover && <img className="hero-detail__cover" src={cover} alt={`Okładka broszury: ${hero.name}`} width="240" height="339" />}
          <div>
            <p className="hero-detail__kicker">Bohaterowie Poznańskiego Czerwca ’56</p>
            <h1 className="hero-detail__name">{hero.name}</h1>
            {hero.role && <p className="hero-detail__role">{hero.role}</p>}
            {hero.brochure && (
              <>
                <h2 className="hero-detail__title">„{hero.brochure.title}”</h2>
                <p className="hero-detail__lead">{hero.brochure.lead}</p>
                <p className="muted">dr Paweł Cieliczko, z cyklu „Najważniejszy dyżur w życiu”</p>
              </>
            )}
            {hero.interview && !hero.brochure && (
              <>
                <h2 className="hero-detail__title">{hero.interview.title}</h2>
                <p className="hero-detail__lead">Scenariusz rozmowy reporterskiej przygotowany na piknik „Powstańczy Lazaret ’56”.</p>
              </>
            )}
          </div>
        </div>

        {(hero.brochure || hero.interview || hero.article) && (
        <>
        <div className="hero-tabs" role="tablist" aria-label="Materiały">
          {tabs.map(({ id, label, icon: Icon, soon }) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={tab === id}
              className={`hero-tabs__tab ${tab === id ? "is-active" : ""} ${soon ? "is-soon" : ""}`}
              onClick={() => setTab(id)}
            >
              <Icon aria-hidden="true" /> {label}
              {soon && <small>wkrótce</small>}
            </button>
          ))}
        </div>

        <div className="hero-tabs__panel" role="tabpanel" id="artykul">
          {tab === "broszura" && <Viewer key="b" book={brochureBook(hero)} />}
          {tab === "rozmowa" && (
            <>
              <p className="muted hero-detail__note">
                {hero.interview.title} – scenariusz rozmowy nieautoryzowanej{hero.interview.note ? ` (${hero.interview.note})` : ""}, przygotowany do odegrania podczas pikniku.
              </p>
              <Viewer key="r" book={interviewBook(hero)} />
            </>
          )}
          {tab === "artykul" && hero.article && <Article hero={hero} />}
          {(tab === "film" || (tab === "artykul" && !hero.article)) && (
            <p className="hero-detail__soon">
              {tab === "film" ? "Film z rozmową" : "Artykuł o bohaterze"} pojawi się tu wkrótce.
            </p>
          )}
        </div>
        </>
        )}

        {!hero.brochure && !hero.interview && !hero.article && (
          <p className="hero-detail__soon">Materiały o tej osobie przygotowujemy – zajrzyj tu wkrótce.</p>
        )}

        <nav className="hero-detail__pager" aria-label="Kolejni bohaterowie">
          <Link to={`/czerwiec56/bohaterowie/${prev.slug}`}>
            <FaArrowLeft aria-hidden="true" /> {prev.name}
          </Link>
          <Link to={`/czerwiec56/bohaterowie/${next.slug}`}>
            {next.name} <FaArrowRight aria-hidden="true" />
          </Link>
        </nav>
      </section>
    </div>
  );
}
