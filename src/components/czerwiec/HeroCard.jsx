import { FaBookOpen, FaMicrophoneLines, FaNewspaper } from "react-icons/fa6";
import { Link } from "../../router";
import { heroCover } from "../../data/content/lazaret";

const initials = (name) =>
  name
    .replace(/^(dr|s\.)\s+/i, "")
    .split(/\s+/)
    .map((part) => part[0])
    .slice(0, 2)
    .join("");

export default function HeroCard({ hero }) {
  const cover = heroCover(hero);
  const ready = hero.brochure || hero.interview || hero.article;
  return (
    <li className={`hero-card ${ready ? "" : "hero-card--soon"}`}>
      <Link to={`/czerwiec56/bohaterowie/${hero.slug}`} className="hero-card__link">
        <div className="hero-card__image">
          {cover ? (
            <img src={cover} alt="" loading="lazy" decoding="async" width="240" height="339" />
          ) : (
            <span className="hero-card__placeholder" aria-hidden="true">
              <span className="hero-card__initials">{initials(hero.name)}</span>
              <span className="hero-card__badge">56</span>
            </span>
          )}
        </div>
        <div className="hero-card__body">
          <h3 className="hero-card__name">{hero.name}</h3>
          {hero.role && <p className="hero-card__role">{hero.role}</p>}
          <p className="hero-card__tags">
            {hero.brochure && (
              <span>
                <FaBookOpen aria-hidden="true" /> broszura
              </span>
            )}
            {hero.interview && (
              <span>
                <FaMicrophoneLines aria-hidden="true" /> rozmowa
              </span>
            )}
            {hero.article && (
              <span>
                <FaNewspaper aria-hidden="true" /> artykuł
              </span>
            )}
            {!ready && <span className="hero-card__soon">materiały wkrótce</span>}
          </p>
        </div>
      </Link>
    </li>
  );
}
