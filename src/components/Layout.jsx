import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link, NavLink } from "../router";
import { site } from "../data/site";
import SocialLinks from "./SocialLinks";
import logoWebp from "../assets/logo.webp";
import logoPng from "../assets/logo.png";

const NAV_ITEMS = [
  { label: "Fundacja", to: "/fundacja" },
  { label: "Blog", to: "/blog" },
  { label: "Przyjaciele i partnerzy", to: "/przyjaciele" },
  { label: "Wesprzyj nas", to: "/wesprzyj" },
  { label: "Kontakt", to: "/kontakt" },
];

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#main">
        Przejdź do treści
      </a>

      <header className="site-header">
        <div className="site-header__inner">
          <Link to="/" className="site-header__logo" aria-label="Strona główna" onClick={closeMenu}>
            <picture>
              <source srcSet={logoWebp} type="image/webp" />
              <img src={logoPng} alt={site.name} width="480" height="163" />
            </picture>
          </Link>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <FaXmark aria-hidden="true" /> : <FaBars aria-hidden="true" />}
          </button>

          <nav id="main-nav" className={`site-nav ${menuOpen ? "is-open" : ""}`}>
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} className="site-nav__link" onClick={closeMenu}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        {children}
      </main>

      <footer className="site-footer">
        <SocialLinks links={site.social} />
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
      </footer>
    </>
  );
}
