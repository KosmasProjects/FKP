import { useMemo, useState } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import CzerwiecNav from "../../components/czerwiec/CzerwiecNav";
import { graves, gravesOutside } from "../../data/content/groby";

export default function Groby() {
  const [query, setQuery] = useState("");
  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = q ? graves.filter((g) => `${g.name} ${g.cemetery} ${g.note || ""}`.toLowerCase().includes(q)) : graves;
    const byCemetery = new Map();
    for (const grave of filtered) {
      if (!byCemetery.has(grave.cemetery)) byCemetery.set(grave.cemetery, []);
      byCemetery.get(grave.cemetery).push(grave);
    }
    return [...byCemetery.entries()].sort((a, b) => b[1].length - a[1].length);
  }, [query]);

  return (
    <div className="czerwiec">
      <CzerwiecNav />

      <section className="container subpage-head">
        <p className="subpage-head__kicker">Pamięć o ofiarach</p>
        <h1 className="subpage-head__title">Groby bohaterów Poznańskiego Czerwca ’56</h1>
        <p className="subpage-head__subtitle">
          {graves.length} osób na {new Set(graves.map((g) => g.cemetery)).size} poznańskich cmentarzach – akcja „Zapal znicz dla Czerwca ’56”
        </p>
      </section>

      <section className="container section graves">
        <label className="graves__search">
          <span className="visually-hidden">Szukaj osoby lub cmentarza</span>
          <input type="search" placeholder="Szukaj osoby lub cmentarza…" value={query} onChange={(e) => setQuery(e.target.value)} />
        </label>

        {groups.map(([cemetery, list]) => (
          <div key={cemetery} className="graves__group">
            <h2>
              Cmentarz {cemetery} <span className="muted">({list.length})</span>
            </h2>
            <ul className="graves__list">
              {list.map((grave) => (
                <li key={grave.name} className="grave">
                  <div>
                    <p className="grave__name">{grave.name}</p>
                    {grave.note && <p className="grave__note">{grave.note}</p>}
                  </div>
                  <div className="grave__where">
                    {grave.location && <span>{grave.location}</span>}
                    {grave.unconfirmed && <span className="grave__flag">do potwierdzenia</span>}
                    {grave.map && (
                      <a href={grave.map} target="_blank" rel="noopener noreferrer">
                        <FaMapLocationDot aria-hidden="true" /> mapa grobu
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {groups.length === 0 && <p className="center muted">Nic nie znaleziono.</p>}

        <div className="graves__group">
          <h2>Poza Poznaniem</h2>
          <ul className="graves__list">
            {gravesOutside.map((grave) => (
              <li key={grave.name} className="grave">
                <div>
                  <p className="grave__name">{grave.name}</p>
                  <p className="grave__note">{grave.note}</p>
                </div>
                <div className="grave__where">
                  <span>{grave.place}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="muted graves__source">
          Na podstawie wykazu grobów przygotowanego do akcji „Zapal znicz dla Czerwca ’56” (stan na 7 października 2026). Linki „mapa
          grobu” prowadzą do miejskiej wyszukiwarki grobów.
        </p>
      </section>
    </div>
  );
}
