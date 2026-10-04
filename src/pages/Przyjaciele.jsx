import PageTitle from "../components/PageTitle";
import PersonCard from "../components/PersonCard";
import { partners } from "../data/partners";
import { friends } from "../data/site";

export default function Przyjaciele() {
  return (
    <>
      <PageTitle title="Przyjaciele i partnerzy" />

      <section className="container section">
        <h2 className="section__title">Partnerzy fundacji</h2>
        <ul className="partner-grid">
          {partners.map((partner) => (
            <li key={partner.file}>
              <img src={partner.logo} alt={partner.name} loading="lazy" decoding="async" />
            </li>
          ))}
        </ul>
      </section>

      {friends.length > 0 && (
        <section className="container section">
          <h2 className="section__title">Przyjaciele fundacji</h2>
          <div className="card-grid">
            {friends.map((person) => (
              <PersonCard key={person.name} {...person} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
