import { use, useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaArrowUpRightFromSquare } from "react-icons/fa6";
import PageTitle from "../components/PageTitle";
import PreviewGrid from "../components/PreviewGrid";
import SocialLinks from "../components/SocialLinks";
import Podcasts from "../components/Podcasts";
import { loadContent } from "../data/content";

const hashId = () => decodeURIComponent(window.location.hash.slice(1));

export default function Project({ project }) {
  const { palette } = project;
  const content = use(loadContent(project.slug));
  const tiles = content.tiles.map((tile, index) => ({
    ...tile,
    color: palette[index % palette.length],
  }));

  // Wybrany kafelek jest zapisany w adresie (#id), więc można podlinkować konkretny tekst.
  const [selectedId, setSelectedId] = useState(hashId);
  const selectedIndex = tiles.findIndex((tile) => tile.id === selectedId);
  const selected = tiles[selectedIndex];

  const articleRef = useRef(null);
  const scrollOnSelect = useRef(false);

  const select = (tile) => {
    setSelectedId(tile.id);
    window.history.replaceState(null, "", `#${tile.id}`);
    scrollOnSelect.current = true;
  };

  useEffect(() => {
    if (scrollOnSelect.current && articleRef.current) {
      articleRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      scrollOnSelect.current = false;
    }
  }, [selectedId]);

  const half = Math.ceil(tiles.length / 2);
  const columns = [{ items: tiles.slice(0, half) }, { items: tiles.slice(half) }];

  return (
    <div style={{ "--title-color": palette[1], "--project-color": palette[1] }}>
      <PageTitle title={project.title} color={palette[1]} backLink />

      <section className="container">
        <PreviewGrid
          columns={columns}
          defaultImage={selected?.image ?? project.cover}
          label={selected?.title ?? project.title}
          selectedId={selectedId}
          onSelect={select}
        />
        {!selected && <p className="preview-grid__hint">Wybierz kafelek, aby przeczytać więcej.</p>}
      </section>

      {selected && (
        <TileArticle
          ref={articleRef}
          key={selected.id}
          tile={selected}
          project={project}
          prev={tiles[(selectedIndex - 1 + tiles.length) % tiles.length]}
          next={tiles[(selectedIndex + 1) % tiles.length]}
          onSelect={select}
        />
      )}

      <section className="container project-about" aria-label="O programie">
        <img
          className="project-about__logo"
          src={project.logo}
          alt={`Logo: ${project.title}`}
          loading="lazy"
        />
        <div className="prose">
          {content.description.lead && <p className="prose__lead">{content.description.lead}</p>}
          {content.description.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
        </div>
      </section>

      <SocialLinks links={project.social} color={palette[1]} />

      {project.hasPodcasts && <Podcasts />}
    </div>
  );
}

function TileArticle({ ref, tile, project, prev, next, onSelect }) {
  return (
    <section className="container">
      <article id={tile.id} ref={ref} className="tile-article" aria-labelledby={`${tile.id}-title`}>
        <p className="tile-article__eyebrow">{project.title}</p>
        <h2 id={`${tile.id}-title`}>{tile.title}</h2>
        <p className="tile-article__lead">{tile.lead}</p>
        {tile.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{paragraph}</p>
        ))}

        {tile.links && (
          <ul className="tile-article__links">
            {tile.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="button button--project"
                  {...(link.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {link.label}
                  {link.href.startsWith("http") && <FaArrowUpRightFromSquare aria-hidden="true" />}
                </a>
              </li>
            ))}
          </ul>
        )}

        <nav className="tile-article__nav" aria-label="Pozostałe teksty programu">
          <button type="button" onClick={() => onSelect(prev)}>
            <FaArrowLeft aria-hidden="true" />
            <span>
              <small>Poprzedni</small>
              {prev.title}
            </span>
          </button>
          <button type="button" onClick={() => onSelect(next)} className="is-next">
            <span>
              <small>Następny</small>
              {next.title}
            </span>
            <FaArrowRight aria-hidden="true" />
          </button>
        </nav>
      </article>
    </section>
  );
}
