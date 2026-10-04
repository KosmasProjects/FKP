const initials = (name) =>
  name
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export default function PersonCard({ name, role, organization, description, image }) {
  return (
    <article className="person-card">
      {image ? (
        <img className="person-card__photo" src={image} alt="" loading="lazy" decoding="async" />
      ) : (
        <span className="person-card__photo person-card__photo--initials" aria-hidden="true">
          {initials(name)}
        </span>
      )}
      <h3>{name}</h3>
      {(role || organization) && <p className="person-card__role">{role ?? organization}</p>}
      {description && <p className="person-card__description">{description}</p>}
    </article>
  );
}
