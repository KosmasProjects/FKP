import PageTitle from "../components/PageTitle";
import { site } from "../data/site";

export default function Wesprzyj() {
  const { donation } = site;

  return (
    <>
      <PageTitle title="Wesprzyj nas" />

      <section className="container narrow prose">
        <p className="lead">
          Każde wsparcie pomaga nam opowiadać historię Poznania – wydawać książki, organizować
          spotkania, wystawy i spacery.
        </p>

        {donation.accountNumber ? (
          <dl className="donation">
            <dt>Numer konta</dt>
            <dd className="donation__account">{donation.accountNumber}</dd>
            <dt>Odbiorca</dt>
            <dd>{donation.accountName}</dd>
            <dt>Tytuł przelewu</dt>
            <dd>{donation.transferTitle}</dd>
            {donation.krs && (
              <>
                <dt>KRS (1,5% podatku)</dt>
                <dd>{donation.krs}</dd>
              </>
            )}
          </dl>
        ) : null}

        <p>
          Chcesz pomóc w inny sposób – jako wolontariusz, partner lub sponsor? Napisz do nas:{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </section>
    </>
  );
}
