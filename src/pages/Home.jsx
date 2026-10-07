import PreviewGrid from "../components/PreviewGrid";
import SocialLinks from "../components/SocialLinks";
import PersonCard from "../components/PersonCard";
import { Link } from "../router";
import { projects, homeCover } from "../data/projects";
import { site, friends, publications } from "../data/site";
import { featuredPartners } from "../data/partners";
import foundation from "../data/content/fundacja";

const toTile = (project) => ({
  title: project.title,
  color: project.tileColor,
  image: project.preview,
  logo: project.logo,
  href: project.path,
});

const columns = [
  { heading: "Programy historyczne", items: projects.filter((p) => p.group === "historyczne").map(toTile) },
  { heading: "Programy miejskie", items: projects.filter((p) => p.group === "miejskie").map(toTile) },
];

export default function Home() {
  return (
    <>
      <h1 className="visually-hidden">{site.name}</h1>

      <section className="container" aria-label="Nasze projekty">
        <PreviewGrid columns={columns} defaultImage={homeCover} />
      </section>

      <section className="container hero">
        <div className="hero__text">
          <h2 className="hero__heading">
            <span className="hero__underline">Fundacja</span>
            <br />
            <span className="accent">Kochania Poznania</span>
          </h2>
          <div className="prose">
            <p className="prose__lead">{foundation.lead}</p>
            {foundation.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
            {foundation.outro && <p className="hero__outro">{foundation.outro}</p>}
          </div>
          <div className="button-row">
            <Link to="/fundacja" className="button button--primary">
              Poznaj fundację
            </Link>
            <Link to="/wesprzyj" className="button">
              Wesprzyj nas
            </Link>
          </div>
          <SocialLinks links={site.social} />
        </div>
        <img
          className="hero__image"
          src={site.heroImage}
          alt=""
          loading="lazy"
          decoding="async"
        />
      </section>

      {friends.length > 0 && (
        <section className="container section">
          <h2 className="section__title">Przyjaciele fundacji</h2>
          <div className="card-grid">
            {friends.map((person) => (
              <PersonCard key={person.name} {...person} />
            ))}
          </div>
        </section>
      )}

      <section className="container section">
        <h2 className="section__title">Partnerzy fundacji</h2>
        <ul className="logo-strip">
          {featuredPartners.map((partner) => (
            <li key={partner.name} style={partner.background ? { background: partner.background } : undefined}>
              <img src={partner.logo} alt={partner.name} loading="lazy" decoding="async" />
            </li>
          ))}
        </ul>
        <p className="center">
          <Link to="/przyjaciele" className="button">
            Wszyscy partnerzy
          </Link>
        </p>
      </section>

      {publications.length > 0 && (
        <section className="container section">
          <h2 className="section__title">Nasze publikacje</h2>
          <div className="card-grid">
            {publications.map((book) => (
              <article key={book.title} className="book-card">
                {book.image && <img src={book.image} alt="" loading="lazy" decoding="async" />}
                <h3>{book.title}</h3>
                {book.author && <p className="muted">{book.author}</p>}
                {book.description && <p>{book.description}</p>}
                {book.price && <p className="book-card__price">{book.price}</p>}
              </article>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
