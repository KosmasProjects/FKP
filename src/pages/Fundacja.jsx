import { FaCheck } from "react-icons/fa6";
import PageTitle from "../components/PageTitle";
import PersonCard from "../components/PersonCard";
import { about, team, site } from "../data/site";
import foundation from "../data/content/fundacja";

export default function Fundacja() {
  return (
    <>
      <PageTitle title={site.name} subtitle="Nasza historia" />

      <section className="container split">
        <div>
          <h2>Czym zajmuje się fundacja?</h2>
          <p className="prose__lead">{foundation.lead}</p>
          {/* „Odnajdujemy i przypominamy…” oraz „Nasze odkrycia zamieniamy…” */}
          {foundation.paragraphs.slice(2, 4).map((paragraph) => (
            <p key={paragraph.slice(0, 48)}>{paragraph}</p>
          ))}
          <ul className="feature-list">
            {about.activities.map((activity) => (
              <li key={activity}>
                <FaCheck aria-hidden="true" /> {activity}
              </li>
            ))}
          </ul>
        </div>
        <img className="split__image" src={about.image} alt="" loading="lazy" decoding="async" />
      </section>

      {team.length > 0 && (
        <section className="container section">
          <h2 className="section__title">Nasz zespół</h2>
          <div className="card-grid">
            {team.map((person) => (
              <PersonCard key={person.name} {...person} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
