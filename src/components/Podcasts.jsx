import { podcasts } from "../data/podcasts";

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("pl-PL", { day: "numeric", month: "long", year: "numeric" });

export default function Podcasts() {
  return (
    <section id="podcasty" className="container section">
      <h2 className="section__title">Podcasty o poznańskich ulicach</h2>
      <ol className="podcast-list">
        {podcasts.map((episode) => (
          <li key={episode.file} className="podcast">
            <div className="podcast__meta">
              <h3>
                Odcinek {episode.number} – {episode.title}
              </h3>
              <p className="muted">
                {episode.station} · <time dateTime={episode.date}>{formatDate(episode.date)}</time>
              </p>
            </div>
            {/* preload="none" – plik mp3 pobiera się dopiero po kliknięciu „odtwórz”. */}
            <audio controls preload="none" src={episode.src}>
              <a href={episode.src}>Pobierz nagranie</a>
            </audio>
          </li>
        ))}
      </ol>
    </section>
  );
}
