// Linki routera. Logika nawigacji (usePath, navigate) jest w navigation.js.
import { href, navigate, normalize, usePath } from "./navigation";

const isInternal = (to) => to.startsWith("/") || to.startsWith("#");

export function Link({ to, children, onClick, ...props }) {
  if (!isInternal(to)) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  const handleClick = (event) => {
    onClick?.(event);
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      to.startsWith("#")
    ) {
      return;
    }
    event.preventDefault();
    navigate(to);
  };

  return (
    <a href={href(to)} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}

export function NavLink({ to, className = "", activeClassName = "is-active", ...props }) {
  const path = usePath();
  const active = path === normalize(to.split("#")[0]);
  return (
    <Link
      to={to}
      className={`${className} ${active ? activeClassName : ""}`.trim()}
      aria-current={active ? "page" : undefined}
      {...props}
    />
  );
}
