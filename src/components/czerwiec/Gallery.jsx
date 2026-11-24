import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaXmark } from "react-icons/fa6";

// Siatka miniatur + powiększenie zdjęcia (strzałki, klawiatura, przesuwanie palcem).
export default function Gallery({ photos, label, limit }) {
  const [open, setOpen] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const visible = limit && !showAll ? photos.slice(0, limit) : photos;

  useEffect(() => {
    if (open === null) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(null);
      if (event.key === "ArrowRight") setOpen((i) => (i + 1) % photos.length);
      if (event.key === "ArrowLeft") setOpen((i) => (i - 1 + photos.length) % photos.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, photos.length]);

  const touchX = useRef(null);
  const step = (delta) => setOpen((i) => (i + delta + photos.length) % photos.length);

  return (
    <>
      <ul className="gallery" aria-label={label}>
        {visible.map((photo, i) => (
          <li key={photo.src}>
            <button type="button" onClick={() => setOpen(i)} aria-label={`Powiększ zdjęcie ${i + 1} z ${photos.length}`}>
              <img src={photo.thumb} alt="" loading="lazy" decoding="async" width="480" height={Math.round((480 * photo.height) / photo.width)} />
            </button>
          </li>
        ))}
      </ul>
      {limit && photos.length > limit && (
        <p className="center">
          <button type="button" className="button" onClick={() => setShowAll((v) => !v)}>
            {showAll ? "Pokaż mniej" : `Pokaż wszystkie zdjęcia (${photos.length})`}
          </button>
        </p>
      )}

      {open !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${label} – zdjęcie ${open + 1} z ${photos.length}`}
          onClick={(event) => event.target === event.currentTarget && setOpen(null)}
          onTouchStart={(event) => (touchX.current = event.touches[0].clientX)}
          onTouchEnd={(event) => {
            if (touchX.current === null) return;
            const dx = event.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
            touchX.current = null;
          }}
        >
          <img src={photos[open].src} alt={`${label} – zdjęcie ${open + 1}`} />
          <p className="lightbox__counter">
            {open + 1} / {photos.length}
          </p>
          <button type="button" className="lightbox__close" onClick={() => setOpen(null)} aria-label="Zamknij">
            <FaXmark aria-hidden="true" />
          </button>
          <button type="button" className="lightbox__nav lightbox__nav--prev" onClick={() => step(-1)} aria-label="Poprzednie zdjęcie">
            <FaChevronLeft aria-hidden="true" />
          </button>
          <button type="button" className="lightbox__nav lightbox__nav--next" onClick={() => step(1)} aria-label="Następne zdjęcie">
            <FaChevronRight aria-hidden="true" />
          </button>
        </div>
      )}
    </>
  );
}
