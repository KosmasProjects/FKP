// Karta partnera: logo (lub nazwa w jego miejscu, gdy logo jeszcze nie ma).
export default function PartnerCard({ name, logo, background }) {
  return (
    <li className="partner">
      {logo ? (
        <>
          <div
            className="partner__logo"
            style={background ? { background } : undefined}
          >
            <img src={logo} alt={name} loading="lazy" decoding="async" />
          </div>
          <p className="partner__name">{name}</p>
        </>
      ) : (
        <div className="partner__logo partner__logo--missing">
          <span>{name}</span>
        </div>
      )}
    </li>
  );
}
