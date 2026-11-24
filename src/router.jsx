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
    // Link z kotwicą na tej samej podstronie – przewiń od razu (przy zmianie podstrony robi to App).
    const hash = to.split("#")[1];
    if (hash) requestAnimationFrame(() => document.getElementById(decodeURIComponent(hash))?.scrollIntoView());
  };

  return (
    <a href={href(to)} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}

export function NavLink({ to, className = "", activeClassName = "is-active", matchPrefix = false, ...props }) {
  const path = usePath();
  const target = normalize(to.split("#")[0]);
  const active = path === target || (matchPrefix && path.startsWith(`${target}/`));
  return (
    <Link
      to={to}
      className={`${className} ${active ? activeClassName : ""}`.trim()}
      aria-current={active ? "page" : undefined}
      {...props}
    />
  );
}
