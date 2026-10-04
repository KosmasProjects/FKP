import { useState } from "react";
import { Link } from "../router";

/**
 * Dwie kolumny kafelków i zdjęcie pośrodku, które zmienia się po najechaniu
 * (lub fokusie z klawiatury) na kafelek.
 *
 * columns:     [{ heading?, items: [{ id?, title, color, image, href?, logo? }] }]
 * defaultImage – zdjęcie pokazywane, gdy kursor nie jest nad żadnym kafelkiem
 * selectedId   – id wybranego kafelka (wyróżniony)
 * onSelect     – wywoływane po kliknięciu kafelka bez linku
 */
export default function PreviewGrid({ columns, defaultImage, label, selectedId, onSelect }) {
  const [hovered, setHovered] = useState(null);
  // Zdjęcia, które już raz pokazano – zostają w DOM, żeby przełączanie było płynne.
  const [visited, setVisited] = useState([]);

  const active = hovered ?? defaultImage;
  const mounted = [...new Set([defaultImage, ...visited, active])];

  const preview = (image) => {
    setHovered(image);
    setVisited((list) => (list.includes(image) ? list : [...list, image]));
  };

  const tileProps = { onPreview: preview, selectedId, onSelect };
  const [left, right] = columns;

  return (
    <div className="preview-grid" onMouseLeave={() => setHovered(null)}>
      <Column column={left} side="left" {...tileProps} />

      <div className="preview-grid__image">
        {mounted.map((src) => (
          <img
            key={src}
            src={src}
            alt={src === active ? (label ?? "") : ""}
            aria-hidden={src !== active}
            decoding="async"
            className={src === active ? "is-active" : undefined}
          />
        ))}
      </div>

      {right && <Column column={right} side="right" {...tileProps} />}
    </div>
  );
}

function Column({ column, side, ...tileProps }) {
  return (
    <div className={`preview-grid__column preview-grid__column--${side}`}>
      {column.heading && <p className="preview-grid__heading">{column.heading}</p>}
      <ul>
        {column.items.map((item, index) => (
          // --i steruje opóźnieniem animacji wejścia (kafelki pojawiają się po kolei).
          <li key={item.id ?? item.title} style={{ "--i": index }}>
            <Tile item={item} {...tileProps} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function Tile({ item, onPreview, selectedId, onSelect }) {
  const selected = item.id !== undefined && item.id === selectedId;
  const props = {
    className: `tile${selected ? " is-selected" : ""}`,
    style: { "--tile-color": item.color },
    onMouseEnter: () => onPreview(item.image),
    onFocus: () => onPreview(item.image),
  };

  const content = (
    <>
      <span className="tile__title">{item.title}</span>
      {item.logo && <img className="tile__logo" src={item.logo} alt="" loading="lazy" />}
    </>
  );

  if (item.href) {
    return (
      <Link to={item.href} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      aria-pressed={selected}
      {...props}
      onClick={() => {
        onPreview(item.image);
        onSelect?.(item);
      }}
    >
      {content}
    </button>
  );
}
