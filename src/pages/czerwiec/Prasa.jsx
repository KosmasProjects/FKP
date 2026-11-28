import { useState } from "react";
import { FaArrowLeft, FaDownload, FaUpRightFromSquare } from "react-icons/fa6";
import { Link } from "../../router";
import CzerwiecNav from "../../components/czerwiec/CzerwiecNav";
import BookViewer from "../../components/BookViewer";
import { pressCopies, pressBook, formatDate } from "../../data/content/prasa";

// Jedna kopia: /czerwiec56/prasa/<id>
export function PressCopy({ item }) {
  const [page, setPage] = useState(1);
  const book = pressBook(item);
  return (
    <div className="czerwiec">
      <CzerwiecNav />
      <section className="container hero-detail">
        <Link to="/czerwiec56/prasa" className="hero-detail__back">
          <FaArrowLeft aria-hidden="true" /> Wszystkie publikacje
        </Link>
        <p className="hero-detail__kicker">{item.site}</p>
        <h1 className="hero-detail__name press-title">{item.title}</h1>
        <p className="hero-detail__role">
          {formatDate(item.date)}
          {item.author && ` · ${item.author}`}
        </p>
        <div className="button-row">
          <a href={book.pdf} download={book.pdfFileName} className="button button--june">
            <FaDownload aria-hidden="true" /> Pobierz PDF
          </a>
          <a href={item.url} target="_blank" rel="noopener noreferrer" className="button">
            <FaUpRightFromSquare aria-hidden="true" /> Oryginał
          </a>
        </div>
        <div className="press-viewer">
          <BookViewer book={book} page={page} onPageChange={setPage} />
        </div>
      </section>
    </div>
  );
}

// Lista: /czerwiec56/prasa
export default function Prasa() {
  return (
    <div className="czerwiec">
      <CzerwiecNav />
      <section className="container subpage-head">
        <p className="subpage-head__kicker">Media o nas</p>
        <h1 className="subpage-head__title">Dokumentacja publikacji</h1>
        <p className="subpage-head__subtitle">
          Kopie artykułów i materiałów o projekcie „Powstańczy Lazaret ’56” wykonane 28 listopada 2026 roku – z datą, autorem i
          adresem publikacji. Każdą można obejrzeć na stronie i pobrać jako PDF.
        </p>
      </section>
      <section className="container section">
        <ul className="press-list">
          {pressCopies.map((item) => (
            <li key={item.id}>
              <Link to={`/czerwiec56/prasa/${item.id}`} className="press-card">
                <img src={pressBook(item).thumb(1)} alt="" loading="lazy" decoding="async" width="240" height="339" />
                <div>
                  <p className="press-card__site">{item.site}</p>
                  <h2 className="press-card__title">{item.title}</h2>
                  <p className="press-card__meta">
                    {formatDate(item.date)}
                    {item.author && ` · ${item.author}`} · {item.pages} {item.pages === 1 ? "strona" : item.pages < 5 ? "strony" : "stron"}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
