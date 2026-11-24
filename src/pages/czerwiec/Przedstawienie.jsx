import { useEffect, useState } from "react";
import CzerwiecNav from "../../components/czerwiec/CzerwiecNav";
import Gallery from "../../components/czerwiec/Gallery";
import DriveVideo from "../../components/czerwiec/DriveVideo";
import { play, photos, videos } from "../../data/content/lazaret";

// Treść sztuki – ładowana dopiero po rozwinięciu (ok. 120 kB tekstu).
function Script() {
  const [blocks, setBlocks] = useState(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch(play.script)
      .then((response) => response.json())
      .then(setBlocks)
      .catch(() => setError(true));
  }, []);
  if (error) return <p>Nie udało się wczytać treści sztuki.</p>;
  if (!blocks) return <p className="muted">Wczytywanie…</p>;
  return (
    <div className="script">
      {blocks.map(([type, text], i) => {
        if (type === "title") return <h3 key={i} className="script__title">{text}</h3>;
        if (type === "h1") return <h3 key={i} className="script__h1">{text}</h3>;
        if (type === "h2") return <h4 key={i} className="script__h2">{text}</h4>;
        return (
          <p key={i} className={`script__${type}`}>
            {text}
          </p>
        );
      })}
    </div>
  );
}

export default function Przedstawienie() {
  const [showScript, setShowScript] = useState(false);
  return (
    <div className="czerwiec">
      <CzerwiecNav />

      <section className="container subpage-head">
        <p className="subpage-head__kicker">Przedstawienie plenerowe</p>
        <h1 className="subpage-head__title">„{play.title}”</h1>
        <p className="subpage-head__subtitle">Scenariusz: {play.author}</p>
      </section>

      <section className="container subpage-intro subpage-intro--video">
        <div>
          <h2 className="lazaret-subtitle">O przedstawieniu</h2>
          {play.description.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
        <DriveVideo video={videos.spektakl} />
      </section>

      <section className="container section">
        <h2 className="section__title">Fotorelacja z przedstawienia</h2>
        <Gallery photos={photos.spektakl} label="Przedstawienie „Bóg i dyrektor nad nami czuwał”" />
      </section>

      <section className="container section">
        <h2 className="section__title">Fotorelacja z warsztatów teatralnych</h2>
        <p className="center muted">Zdjęcia z warsztatów pojawią się wkrótce.</p>
      </section>

      <section id="tresc" className="container section">
        <h2 className="section__title">Treść sztuki</h2>
        {showScript ? (
          <Script />
        ) : (
          <p className="center">
            <button type="button" className="button button--june" onClick={() => setShowScript(true)}>
              Czytaj scenariusz
            </button>
          </p>
        )}
      </section>
    </div>
  );
}
