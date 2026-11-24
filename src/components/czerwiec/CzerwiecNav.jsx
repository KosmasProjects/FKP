import { NavLink } from "../../router";

// Podmenu wszystkich podstron Czerwca ’56 – kolejność według „linkowni”.
const ITEMS = [
  { label: "Lazaret ’56", to: "/czerwiec56" },
  { label: "Bohaterowie", to: "/czerwiec56#bohaterowie" },
  { label: "Wystawa", to: "/czerwiec56/wystawa" },
  { label: "Przedstawienie", to: "/czerwiec56/przedstawienie" },
  { label: "Rekonstrukcje", to: "/czerwiec56#rekonstrukcje" },
  { label: "Spacery", to: "/czerwiec56#spacery" },
  { label: "Pamięć o ofiarach", to: "/czerwiec56/groby" },
  { label: "Media o nas", to: "/czerwiec56#media" },
  { label: "Czerwcowe ulice", to: "/czerwiec56/czerwcowe-ulice" },
];

export default function CzerwiecNav() {
  return (
    <nav className="czerwiec-nav" aria-label="Czerwiec ’56 – podstrony">
      <ul className="container">
        {ITEMS.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className="czerwiec-nav__link"
              // Kotwice na stronie głównej Lazaretu nie podświetlają się jako aktywne.
              activeClassName={item.to.includes("#") ? "" : "is-active"}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
