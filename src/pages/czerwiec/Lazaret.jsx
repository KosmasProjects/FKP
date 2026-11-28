import { FaArrowRight, FaCalendarDays, FaClock, FaLocationDot, FaUpRightFromSquare } from "react-icons/fa6";
import { Link } from "../../router";
import CzerwiecNav from "../../components/czerwiec/CzerwiecNav";
import HeroCard from "../../components/czerwiec/HeroCard";
import Gallery from "../../components/czerwiec/Gallery";
import DriveVideo from "../../components/czerwiec/DriveVideo";
import {
  asset,
  event,
  intro,
  heroes,
  heroGroups,
  exhibition,
  play,
  photos,
  videos,
  recordings,
  stations,
  walks,
  memory,
  media,
  archiveUrl,
} from "../../data/content/lazaret";

// Dodatkowe odnośniki pod pozycją: kopia tekstu u nas i kopia w Internet Archive.
function ItemExtras({ item }) {
  if (!item.local && (!item.url || item.noArchive)) return null;
  return (
    <p className="link-list__extra">
      {item.local && <Link to={item.local}>{item.localLabel || "czytaj u nas"}</Link>}
      {item.url && !item.noArchive && (
        <a href={archiveUrl(item.url)} target="_blank" rel="noopener noreferrer" title="Kopia strony w Internet Archive (web.archive.org)">
          kopia archiwalna
        </a>
      )}
    </p>
  );
}

function ItemLink({ item }) {
  if (item.to) {
    return (
      <Link to={item.to} className="link-list__link">
        <span>{item.title}</span>
        {item.note && <small>{item.note}</small>}
        <FaArrowRight aria-hidden="true" />
      </Link>
    );
  }
  if (item.url) {
    return (
      <a href={item.url} target="_blank" rel="noopener noreferrer" className="link-list__link">
        <span>{item.title}</span>
        {(item.kind || item.date) && <small>{[item.kind, item.date].filter(Boolean).join(" · ")}</small>}
        <FaUpRightFromSquare aria-hidden="true" />
      </a>
    );
  }
  return (
    <span className="link-list__link link-list__link--soon">
      <span>{item.title}</span>
      <small>wkrótce</small>
    </span>
  );
}

export default function Lazaret() {
  return (
    <div className="czerwiec lazaret">
      <CzerwiecNav />

      <section className="lazaret-hero">
        <div className="container lazaret-hero__inner">
          <div className="lazaret-hero__text">
            <p className="lazaret-hero__kicker">Poznański Czerwiec 1956 · 70. rocznica</p>
            <h1 className="lazaret-hero__title">{event.title}</h1>
            <p className="lazaret-hero__subtitle">{event.subtitle}</p>
            <ul className="lazaret-hero__facts">
              <li>
                <FaCalendarDays aria-hidden="true" /> {event.date}
              </li>
              <li>
                <FaClock aria-hidden="true" /> {event.time}
              </li>
              <li>
                <FaLocationDot aria-hidden="true" /> {event.place}, {event.entrance}
              </li>
            </ul>
            {intro.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="lazaret-hero__intro">
                {paragraph}
              </p>
            ))}
            <div className="button-row">
              <a href="#bohaterowie" className="button button--june">
                Poznaj bohaterów
              </a>
              <Link to="/czerwiec56/wystawa" className="button">
                Zobacz wystawę
              </Link>
            </div>
          </div>
          <a className="lazaret-hero__poster" href={event.poster} target="_blank" rel="noopener" title="Plakat – otwórz w pełnym rozmiarze">
            <img src={event.poster} alt={`Plakat: ${event.title} – ${event.subtitle}, ${event.date}`} width="948" height="1348" />
          </a>
        </div>
      </section>

      <section id="bohaterowie" className="container section">
        <h2 className="section__title">Bohaterowie Poznańskiego Czerwca ’56</h2>
        <p className="section__intro">
          Broszury z cyklu „Najważniejszy dyżur w życiu” i scenariusze rozmów reporterskich z ludźmi, którzy 28 czerwca 1956 roku
          ratowali rannych, walczyli i upominali się o prawdę. Kliknij bohatera, żeby przeczytać jego historię.
        </p>
        {heroGroups.map((group) => (
          <div key={group} className="hero-group">
            <h3 className="hero-group__title">{group}</h3>
            <ul className="hero-grid">
              {heroes
                .filter((hero) => hero.group === group)
                .map((hero) => (
                  <HeroCard key={hero.slug} hero={hero} />
                ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="section lazaret-band">
        <div className="container feature-pair">
          <Link to="/czerwiec56/wystawa" className="feature-card">
            <img src={asset("wystawa/02-min.webp")} alt="" loading="lazy" decoding="async" />
            <div className="feature-card__body">
              <p className="feature-card__kicker">Wystawa plenerowa</p>
              <h2 className="feature-card__title">„{exhibition.title}”</h2>
              <p>{exhibition.subtitle}. Wszystkie plansze z ogrodzenia Szpitala Raszei – do obejrzenia i pobrania.</p>
              <span className="feature-card__more">
                Opis, plansze i fotorelacja <FaArrowRight aria-hidden="true" />
              </span>
            </div>
          </Link>
          <Link to="/czerwiec56/przedstawienie" className="feature-card">
            <img src={photos.spektakl[1].thumb} alt="" loading="lazy" decoding="async" />
            <div className="feature-card__body">
              <p className="feature-card__kicker">Przedstawienie plenerowe</p>
              <h2 className="feature-card__title">„{play.title}”</h2>
              <p>{play.description[0]}</p>
              <span className="feature-card__more">
                Film, fotorelacja i treść sztuki <FaArrowRight aria-hidden="true" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section id="rekonstrukcje" className="container section">
        <h2 className="section__title">Stanowiska i działania rekonstrukcyjne</h2>
        <ul className="station-grid">
          {stations.map((station) => (
            <li key={station.title} className="station">
              <img src={photos.piknik[station.photo - 1].thumb} alt="" loading="lazy" decoding="async" />
              <div className="station__body">
                <h3>{station.title}</h3>
                <p>{station.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section id="fotorelacja" className="container section">
        <h2 className="section__title">Fotorelacja z pikniku</h2>
        <Gallery photos={photos.piknik} label="Fotorelacja z pikniku Powstańczy Lazaret ’56" limit={12} />
        <div className="video-row">
          <DriveVideo video={videos.relacja} />
          <DriveVideo video={videos.aktorzy} />
          <DriveVideo video={videos.lekarz} />
        </div>
      </section>

      <section id="spacery" className="container section">
        <div className="link-columns">
          <div>
            <h2 className="section__title section__title--left">Czerwcowe spacery</h2>
            <ul className="link-list">
              {walks.map((item) => (
                <li key={item.title}>
                  <ItemLink item={item} />
                </li>
              ))}
            </ul>
          </div>
          <div id="pamiec">
            <h2 className="section__title section__title--left">Pamięć o ofiarach</h2>
            <ul className="link-list">
              {memory.map((item) => (
                <li key={item.title}>
                  <ItemLink item={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="media" className="container section">
        <h2 className="section__title">Media o nas</h2>
        <div className="media-grid">
          {media.map((group) => (
            <div key={group.outlet} className="media-group">
              <h3>{group.outlet}</h3>
              {group.note && <p className="muted">{group.note}</p>}
              <ul className="link-list link-list--compact">
                {group.items.map((item) => (
                  <li key={item.title + (item.url || "")}>
                    <ItemLink item={item} />
                    <ItemExtras item={item} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <h3 id="nagrania" className="lazaret-subtitle">Nagrania radiowe</h3>
        <ul className="audio-list">
          {recordings.map((rec) => (
            <li key={rec.src}>
              <p>
                {rec.title} <span className="muted">({rec.duration})</span>
              </p>
              <audio controls preload="none" src={rec.src} />
            </li>
          ))}
        </ul>

        <p className="lazaret-funding muted">{event.funding}</p>
      </section>
    </div>
  );
}
