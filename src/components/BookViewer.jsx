import { useEffect, useRef, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaDownload,
  FaExpand,
  FaCompress,
  FaUpRightFromSquare,
} from "react-icons/fa6";

/**
 * Przeglądarka publikacji: rozkładówki PDF wyrenderowane do obrazków (działa na każdym
 * urządzeniu, także na telefonach, które nie wyświetlają PDF w ramce), do tego przyciski
 * pobrania i otwarcia oryginalnego PDF.
 *
 * Strona jest kontrolowana z zewnątrz (`page`, `onPageChange`), żeby np. karta ulicy
 * mogła otworzyć książkę na właściwym rozdziale.
 */
export default function BookViewer({ book, page, onPageChange, id }) {
  // layout "spread" – rozkładówki (na telefonie powiększone), "page" – pojedyncze strony.
  const layout = book.layout || "spread";
  const width = book.width || 1800;
  const height = book.height || 976;
  const label = book.label || "Strona";
  const rootRef = useRef(null);
  const frameRef = useRef(null);
  const thumbsRef = useRef(null);
  const touchX = useRef(null);
  const [expanded, setExpanded] = useState(false);

  const go = (next) => onPageChange(Math.min(book.pages, Math.max(1, next)));

  // Po zmianie strony: telefon wraca do lewej połowy rozkładówki, miniatura wjeżdża w widok,
  // a sąsiednie rozkładówki ładują się w tle, żeby kartkowanie było płynne.
  useEffect(() => {
    if (frameRef.current) frameRef.current.scrollLeft = 0;
    const thumb = thumbsRef.current?.querySelector(`[data-page="${page}"]`);
    const strip = thumbsRef.current;
    if (thumb && strip) {
      strip.scrollTo({ left: thumb.offsetLeft - strip.clientWidth / 2 + thumb.clientWidth / 2, behavior: "smooth" });
    }
    [page + 1, page - 1].forEach((n) => {
      if (n >= 1 && n <= book.pages) new Image().src = book.spread(n);
    });
  }, [page, book]);

  // Pełny ekran: natywny, gdy przeglądarka go obsługuje; w przeciwnym razie (np. iPhone)
  // wystarcza klasa .is-expanded, która rozciąga przeglądarkę na całe okno.
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return undefined;
    if (expanded) {
      if (el.requestFullscreen && !document.fullscreenElement) el.requestFullscreen().catch(() => {});
      document.body.style.overflow = "hidden";
    } else {
      if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
      document.body.style.overflow = "";
    }
    const sync = () => {
      if (!document.fullscreenElement) setExpanded(false);
    };
    document.addEventListener("fullscreenchange", sync);
    return () => {
      document.removeEventListener("fullscreenchange", sync);
      document.body.style.overflow = "";
    };
  }, [expanded]);

  const onKeyDown = (event) => {
    if (event.key === "ArrowRight") go(page + 1);
    else if (event.key === "ArrowLeft") go(page - 1);
    else if (event.key === "Escape") setExpanded(false);
    else return;
    event.preventDefault();
  };

  const onTouchStart = (event) => {
    touchX.current = event.touches[0].clientX;
  };

  const onTouchEnd = (event) => {
    if (touchX.current === null) return;
    const dx = event.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    const frame = frameRef.current;
    // Na telefonie rozkładówka jest szersza niż ekran – przesuwanie w jej obrębie
    // nie powinno przewracać strony, dopiero przeciągnięcie poza krawędź.
    if (frame && frame.scrollWidth > frame.clientWidth + 2) {
      const atStart = frame.scrollLeft <= 2;
      const atEnd = frame.scrollLeft >= frame.scrollWidth - frame.clientWidth - 2;
      if (dx < -60 && atEnd) go(page + 1);
      if (dx > 60 && atStart) go(page - 1);
      return;
    }
    if (dx < -50) go(page + 1);
    if (dx > 50) go(page - 1);
  };

  return (
    <div
      id={id}
      ref={rootRef}
      className={`book-viewer book-viewer--${layout} ${expanded ? "is-expanded" : ""}`}
      tabIndex={-1}
      onKeyDown={onKeyDown}
      aria-roledescription="przeglądarka publikacji"
      aria-label={book.series ? `${book.series} – ${book.title}` : book.title}
    >
      <div className="book-viewer__toolbar">
        <p className="book-viewer__counter" aria-live="polite">
          {label} <strong>{page}</strong> z {book.pages}
        </p>
        <div className="book-viewer__actions">
          <a className="book-viewer__icon" href={book.pdf} target="_blank" rel="noopener" title="Otwórz PDF w nowej karcie">
            <FaUpRightFromSquare aria-hidden="true" />
            <span className="visually-hidden">Otwórz PDF w nowej karcie</span>
          </a>
          <a className="book-viewer__icon" href={book.pdf} download={book.pdfFileName} title="Pobierz PDF">
            <FaDownload aria-hidden="true" />
            <span className="visually-hidden">Pobierz PDF</span>
          </a>
          <button
            type="button"
            className="book-viewer__icon"
            onClick={() => setExpanded((value) => !value)}
            title={expanded ? "Zamknij pełny ekran" : "Pełny ekran"}
          >
            {expanded ? <FaCompress aria-hidden="true" /> : <FaExpand aria-hidden="true" />}
            <span className="visually-hidden">{expanded ? "Zamknij pełny ekran" : "Pełny ekran"}</span>
          </button>
        </div>
      </div>

      <div className="book-viewer__stage">
        <button
          type="button"
          className="book-viewer__nav book-viewer__nav--prev"
          onClick={() => go(page - 1)}
          disabled={page <= 1}
          aria-label="Poprzednia strona"
        >
          <FaChevronLeft aria-hidden="true" />
        </button>

        <div className="book-viewer__frame" ref={frameRef} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          <img
            key={page}
            src={book.spread(page)}
            alt={`${book.title} – ${label.toLowerCase()} ${page} z ${book.pages}`}
            width={width}
            height={height}
            decoding="async"
          />
        </div>

        <button
          type="button"
          className="book-viewer__nav book-viewer__nav--next"
          onClick={() => go(page + 1)}
          disabled={page >= book.pages}
          aria-label="Następna strona"
        >
          <FaChevronRight aria-hidden="true" />
        </button>
      </div>

      {layout === "spread" && (
      <p className="book-viewer__hint">
        {book.hint || "Na telefonie przesuń palcem, żeby zobaczyć drugą połowę rozkładówki."}
      </p>
      )}

      <ol className="book-viewer__thumbs" ref={thumbsRef} aria-label="Spis stron">
        {Array.from({ length: book.pages }, (_, i) => i + 1).map((n) => (
          <li key={n}>
            <button
              type="button"
              data-page={n}
              className={n === page ? "is-active" : undefined}
              aria-current={n === page ? "page" : undefined}
              onClick={() => go(n)}
            >
              <img src={book.thumb(n)} alt="" loading="lazy" decoding="async" width={240} height={Math.round((240 * height) / width)} />
              <span>{n}</span>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
