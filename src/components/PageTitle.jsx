import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "../router";

export default function PageTitle({ title, subtitle, color, backLink = false }) {
  return (
    <div className="page-title" style={color ? { "--title-color": color } : undefined}>
      {backLink && (
        <Link to="/" className="page-title__back">
          <FaArrowLeft aria-hidden="true" /> Strona główna
        </Link>
      )}
      <h1>{title}</h1>
      {subtitle && <p className="page-title__subtitle">{subtitle}</p>}
    </div>
  );
}
