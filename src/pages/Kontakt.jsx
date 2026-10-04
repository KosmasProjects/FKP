import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import PageTitle from "../components/PageTitle";
import SocialLinks from "../components/SocialLinks";
import { site } from "../data/site";

export default function Kontakt() {
  const emails = [site.email, ...site.extraEmails];

  return (
    <>
      <PageTitle title="Kontakt" subtitle="Skontaktuj się z nami" />

      <section className="container contact-grid">
        <article className="contact-card">
          <FaEnvelope aria-hidden="true" />
          <h2>E-mail</h2>
          {emails.map((email) => (
            <p key={email}>
              <a href={`mailto:${email}`}>{email}</a>
            </p>
          ))}
        </article>

        <article className="contact-card">
          <FaLocationDot aria-hidden="true" />
          <h2>Adres fundacji</h2>
          <address>
            {site.address.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </address>
        </article>

        {site.phones.length > 0 && (
          <article className="contact-card">
            <FaPhone aria-hidden="true" />
            <h2>Telefon</h2>
            {site.phones.map((phone) => (
              <p key={phone}>
                <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
              </p>
            ))}
          </article>
        )}
      </section>

      <section className="container section center">
        <h2 className="section__title">Znajdziesz nas też tutaj</h2>
        <SocialLinks links={site.social} />
      </section>
    </>
  );
}
