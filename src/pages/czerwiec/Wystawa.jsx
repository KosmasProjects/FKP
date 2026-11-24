import { useState } from "react";
import { FaDownload } from "react-icons/fa6";
import CzerwiecNav from "../../components/czerwiec/CzerwiecNav";
import BookViewer from "../../components/BookViewer";
import Gallery from "../../components/czerwiec/Gallery";
import { exhibition, photos } from "../../data/content/lazaret";

export default function Wystawa() {
  const [page, setPage] = useState(1);
  return (
    <div className="czerwiec">
      <CzerwiecNav />

      <section className="container subpage-head">
        <p className="subpage-head__kicker">Wystawa plenerowa</p>
        <h1 className="subpage-head__title">„{exhibition.title}”</h1>
        <p className="subpage-head__subtitle">{exhibition.subtitle}</p>
      </section>

      <section className="container subpage-intro">
        <div>
          <h2 className="lazaret-subtitle">Opis kuratorski</h2>
          {exhibition.description.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
          <p className="muted">Kurator wystawy: {exhibition.curator}</p>
          <p>
            <a href={exhibition.book.pdf} download={exhibition.book.pdfFileName} className="button button--june">
              <FaDownload aria-hidden="true" /> Pobierz wystawę (PDF)
            </a>
          </p>
        </div>
        <blockquote className="quote-card">
          <p>„{exhibition.quote.text}”</p>
          <cite>{exhibition.quote.author}</cite>
        </blockquote>
      </section>

      <section id="plansze" className="container section">
        <h2 className="section__title">Wystawa – plansze</h2>
        <BookViewer book={exhibition.book} page={page} onPageChange={setPage} />
      </section>

      <section id="fotorelacja" className="container section">
        <h2 className="section__title">Fotorelacja z wystawy</h2>
        <Gallery photos={photos.wystawa} label="Wystawa na ogrodzeniu Szpitala Raszei" />
      </section>
    </div>
  );
}
