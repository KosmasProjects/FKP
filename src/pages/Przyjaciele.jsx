import PageTitle from "../components/PageTitle";
import PartnerCard from "../components/PartnerCard";
import PersonCard from "../components/PersonCard";
import { partnerGroups, partnersIntro } from "../data/partners";
import { friends } from "../data/site";

export default function Przyjaciele() {
  return (
    <>
      <PageTitle title="Przyjaciele i partnerzy" />

      <section className="container narrow">
        <p className="lead center">{partnersIntro}</p>
      </section>

      <nav className="container partner-nav" aria-label="Grupy partnerów">
        <ul>
          {partnerGroups.map((group) => (
            <li key={group.id}>
              <a href={`#${group.id}`}>{group.title}</a>
            </li>
          ))}
        </ul>
      </nav>

      {partnerGroups.map((group) => (
        <section
          key={group.id}
          id={group.id}
          className="container partner-group"
          aria-labelledby={`${group.id}-title`}
        >
          <header className="partner-group__header">
            <h2 id={`${group.id}-title`}>{group.title}</h2>
            {group.description && <p>{group.description}</p>}
          </header>

          {group.subgroups.map((subgroup) => (
            <div key={subgroup.title ?? "all"} className="partner-subgroup">
              {subgroup.title && <h3>{subgroup.title}</h3>}
              <ul className="partner-list">
                {subgroup.partners.map((partner) => (
                  <PartnerCard key={partner.name} {...partner} />
                ))}
              </ul>
            </div>
          ))}
        </section>
      ))}

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
