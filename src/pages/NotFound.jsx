import PageTitle from "../components/PageTitle";
import { Link } from "../router";

export default function NotFound() {
  return (
    <section className="container narrow center">
      <PageTitle title="Nie znaleziono strony" subtitle="Błąd 404" />
      <p>Strona, której szukasz, nie istnieje albo została przeniesiona.</p>
      <p>
        <Link to="/" className="button button--primary">
          Wróć na stronę główną
        </Link>
      </p>
    </section>
  );
}
