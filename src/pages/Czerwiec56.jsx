import { useState } from "react";
import { FaBookOpen, FaDownload, FaLocationDot } from "react-icons/fa6";
import PageTitle from "../components/PageTitle";
import CzerwiecNav from "../components/czerwiec/CzerwiecNav";
import BookViewer from "../components/BookViewer";
import { book, lead, intro, outro, placeGroups } from "../data/content/czerwiec56";

const VIEWER_ID = "czytaj";

export default function Czerwiec56() {
  const [page, setPage] = useState(1);

  const openAt = (n) => {
    setPage(n);
    document.getElementById(VIEWER_ID)?.scrollIntoView({ block: "start" });
  };

  return (
    <div className="czerwiec">
      <CzerwiecNav />
      <PageTitle title={book.title} subtitle={`${book.series} – Czerwiec 1956`} color="var(--color-june)" />

      <section className="container czerwiec-hero">
        <div className="czerwiec-hero__text">
          <p className="prose__lead">{lead}</p>
          {intro.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>

        <aside className="book-card-large" aria-label="Publikacja">
          <button type="button" className="book-card-large__cover" onClick={() => openAt(1)}>
            <img src={book.spread(1)} alt={`Okładka: ${book.series} – ${book.title}`} width="1800" height="976" />
          </button>
          <p className="book-card-large__series">{book.series}</p>
          <h2 className="book-card-large__title">{book.title}</h2>
          <p className="muted">{book.author}</p>
          <div className="button-row">
            <a href={`#${VIEWER_ID}`} className="button button--june">
              <FaBookOpen aria-hidden="true" /> Czytaj online
            </a>
            <a href={book.pdf} download={book.pdfFileName} className="button">
              <FaDownload aria-hidden="true" /> Pobierz PDF
            </a>
          </div>
          <p className="book-card-large__meta muted">PDF, {book.pdfSize}</p>
        </aside>
      </section>

      <section className="container section">
        <h2 className="section__title">Czytaj online</h2>
        <BookViewer id={VIEWER_ID} book={book} page={page} onPageChange={setPage} />
        <p className="czerwiec-outro">{outro}</p>
      </section>

      {placeGroups.map((group) => (
        <section key={group.id} id={group.id} className="container section">
          <h2 className="section__title">{group.title}</h2>
          <p className="section__intro">{group.description}</p>
          <ul className="place-list">
            {group.places.map((place) => (
              <li key={place.letter} className="place">
                <span className="place__letter" aria-hidden="true">
                  {place.letter}
                </span>
                <div className="place__body">
                  <p className="place__type">{place.type}</p>
                  <h3 className="place__name">{place.name}</h3>
                  <p className="place__meta">
                    <FaLocationDot aria-hidden="true" /> {place.district}
                    {place.year && <span> · nazwa od {place.year} r.</span>}
                  </p>
                  <p className="place__text">{place.text}</p>
                  <button type="button" className="place__link" onClick={() => openAt(place.page)}>
                    Czytaj w książce →
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      ))}

    </div>
  );
}
