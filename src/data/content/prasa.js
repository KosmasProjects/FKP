// Dokumentacja publikacji o projekcie „Powstańczy Lazaret ’56” – kopie artykułów w PDF
// (public/czerwiec56/prasa/<id>.pdf + podgląd stron <id>/NN.webp), wykonane 28.11.2026
// na potrzeby rozliczenia projektu. Pozycje w „Media o nas” łączą się z nimi po adresie url.
const base = `${import.meta.env.BASE_URL}czerwiec56/prasa/`;

export const pressCopies = [
  {
    "id": "centrumis-1",
    "site": "Centrum Inicjatyw Senioralnych w Poznaniu",
    "title": "Powstańczy Lazaret 56'",
    "author": null,
    "date": "2026-09-29",
    "url": "https://centrumis.pl/powstanczy-lazaret-56/",
    "pages": 1
  },
  {
    "id": "sukces-1",
    "site": "Sukces po poznańsku, nr 10/2026, s. 38–39",
    "title": "Zapowiedź pikniku „Powstańczy Lazaret ’56”",
    "author": null,
    "date": "2026-10",
    "url": "https://wydawnictwa.grupamtp.pl/spp/102026/38/",
    "pages": 1
  },
  {
    "id": "wpoznaniu-2",
    "site": "wpoznaniu.pl",
    "title": "Tramwaj nie przyjechał. Kilka godzin później Szpital Raszei był powstańczym lazaretem",
    "author": "Materiał Partnera",
    "date": "2026-10-13",
    "url": "https://wpoznaniu.pl/tramwaj-nie-przyjechal-kilka-godzin-pozniej-szpital-raszei-byl-powstanczym-lazaretem/",
    "pages": 7
  },
  {
    "id": "miastopoznaj-cykl",
    "site": "miastopoznaj.pl",
    "title": "„Najważniejszy dyżur w życiu”. Nowy cykl historyczny na Miastopoznaj.pl",
    "author": "Redakcja",
    "date": "2026-10-15",
    "url": "https://miastopoznaj.pl/wiadomosci/17606-najwazniejszy-dyzur-w-zyciu-nowy-cykl-historyczny-na-miastopoznaj-pl",
    "pages": 1
  },
  {
    "id": "miastopoznaj-karon",
    "site": "miastopoznaj.pl – Blogi z Poznania",
    "title": "Henryk Karoń - Z okien szpitala",
    "author": "Paweł Cieliczko",
    "date": "2026-10-15",
    "url": "https://miastopoznaj.pl/blogi/z-poznania/17608-henryk-karon-z-okien-szpitala",
    "pages": 3
  },
  {
    "id": "miastopoznaj-granatowicz",
    "site": "miastopoznaj.pl – Blogi z Poznania",
    "title": "Józef Granatowicz - Człowiek, który wiedział, co robić",
    "author": "Paweł Cieliczko",
    "date": "2026-10-15",
    "url": "https://miastopoznaj.pl/blogi/z-poznania/17607-jozef-granatowicz-czlowiek-ktory-wiedzial-co-robic",
    "pages": 5
  },
  {
    "id": "radiopoznan-1",
    "site": "Radio Poznań",
    "title": "„Kule wpadały do sal operacyjnych”. Zobacz Czerwiec’56 oczami ludzi ze Szpitala Raszei",
    "author": "Paweł Cieliczko",
    "date": "2026-10-16",
    "url": "https://www.radiopoznan.fm/patronaty/kule-wpadaly-do-sal-operacyjnych-zobacz-czerwiec-56-oczami-ludzi-ze-szpitala-raszei",
    "pages": 3
  },
  {
    "id": "miastopoznaj-sikorski",
    "site": "miastopoznaj.pl – Blogi z Poznania",
    "title": "Maciej Sikorski - Nie chciał być bohaterem",
    "author": "Paweł Cieliczko",
    "date": "2026-10-18",
    "url": "https://miastopoznaj.pl/blogi/z-poznania/17614-maciej-sikorski-nie-chcial-byc-bohaterem",
    "pages": 3
  },
  {
    "id": "miastopoznaj-sliwinski",
    "site": "miastopoznaj.pl – Blogi z Poznania",
    "title": "Bolesław Śliwiński - Z pomocą do Urzędu Bezpieczeństwa",
    "author": "Paweł Cieliczko",
    "date": "2026-10-18",
    "url": "https://miastopoznaj.pl/blogi/z-poznania/17612-boleslaw-sliwinski-z-pomoca-do-urzedu-bezpieczenstwa",
    "pages": 4
  },
  {
    "id": "miastopoznaj-cieslinski",
    "site": "miastopoznaj.pl – Blogi z Poznania",
    "title": "Ireneusz Cieśliński - Z księgą przyjęć do sądu",
    "author": "Paweł Cieliczko",
    "date": "2026-10-18",
    "url": "https://miastopoznaj.pl/blogi/z-poznania/17613-ireneusz-cieslinski-z-ksiega-przyjec-do-sadu",
    "pages": 3
  },
  {
    "id": "glos-1",
    "site": "Głos Wielkopolski",
    "title": "„Kule wpadały do sal operacyjnych”. Czerwiec ’56 opowiadają ci, którzy ratowali życie",
    "author": "Grzegorz Okoński",
    "date": "2026-10-19",
    "url": "https://gloswielkopolski.pl/kule-wpadaly-do-sal-operacyjnych-w-szpitalu-raszei-poznanski-czerwiec-56-opowiadaja-ci-ktorzy-ratowali-zycie/ar/c1p2-29443957",
    "pages": 4
  },
  {
    "id": "radiopoznan-2",
    "site": "Radio Poznań",
    "title": "Bimbą w historię. W poznańskich tramwajach pojawią się wędrowcy w czasie",
    "author": "Paweł Cieliczko",
    "date": "2026-10-19",
    "url": "https://www.radiopoznan.fm/patronaty/bimba-w-historie-w-poznanskich-tramwajach-pojawia-sie-wedrowcy-w-czasie",
    "pages": 2
  },
  {
    "id": "emaus-1",
    "site": "Radio Emaus",
    "title": "Poznański Lazaret’56 – Paweł Cieliczko, prezes Fundacji Kochania Poznania",
    "author": null,
    "date": "2026-10-20",
    "url": "https://radioemaus.pl/aktualnosci/poznanski-lazaret56-pawel-cieliczko-prezes-fundacji-kochania-poznania/",
    "pages": 1
  },
  {
    "id": "glos-2",
    "site": "Głos Wielkopolski",
    "title": "„Poznański Czerwiec zapoczątkował Polski Październik”. Zbliża się wyjątkowy piknik",
    "author": "Sylwia Rycharska",
    "date": "2026-10-21",
    "url": "https://gloswielkopolski.pl/dlaczego-czerwiec-56-swietujemy-w-pazdzierniku-pawel-cieliczko-trzeba-opowiedziec-takze-o-zwyciestwie/ar/c1p2-29455257",
    "pages": 5
  },
  {
    "id": "miastopoznaj-pawlowska",
    "site": "miastopoznaj.pl – Blogi z Poznania",
    "title": "Zofia Pawłowska-Bartoszewska - Pacjentka, która wróciła do pracy",
    "author": "Paweł Cieliczko",
    "date": "2026-10-21",
    "url": "https://miastopoznaj.pl/blogi/z-poznania/17620-zofia-pawlowska-bartoszewska-pacjentka-ktora-wrocila-do-pracy",
    "pages": 4
  },
  {
    "id": "miastopoznaj-zapowiedz",
    "site": "miastopoznaj.pl",
    "title": "Powstańczy Lazaret 56 roku",
    "author": "Redakcja",
    "date": "2026-10-22",
    "url": "https://miastopoznaj.pl/kultura-i-styl/17622-powstanczy-lazaret-56-roku",
    "pages": 1
  },
  {
    "id": "glos-3",
    "site": "Głos Wielkopolski",
    "title": "Wyjątkowe wydarzenie w Poznaniu! Lazaret, teatr i pierwsza pomoc także psom oraz kotom. Co czeka nas 24 października w Szpitalu Raszei?",
    "author": "Sylwia Rycharska",
    "date": "2026-10-23",
    "url": "https://gloswielkopolski.pl/wyjatkowe-wydarzenie-w-poznaniu-lazaret-teatr-i-pierwsza-pomoc-takze-psom-oraz-kotom-co-czeka-nas-24-pazdziernika-w-szpitalu-raszei/ar/c1p2-29461485",
    "pages": 4
  },
  {
    "id": "wpoznaniu-1",
    "site": "wpoznaniu.pl",
    "title": "Przed szpitalem Raszei przypominają bohaterów Czerwca ’56",
    "author": "Aleksandra Wróblewska",
    "date": "2026-10-24",
    "url": "https://wpoznaniu.pl/przed-szpitalem-raszei-przypominaja-bohaterow-czerwca-56/",
    "pages": 1
  },
  {
    "id": "radiopoznan-3",
    "site": "Radio Poznań",
    "title": "Tu ratowano rannych robotników. Powstańczy lazaret przed szpitalem Raszei",
    "author": "Magdalena Konieczna",
    "date": "2026-10-24",
    "url": "https://radiopoznan.fm/informacje/pozostale/tu-ratowano-rannych-robotnikow-powstanczy-lazaret-przed-szpitalem-raszei",
    "pages": 1
  },
  {
    "id": "miastopoznaj-kozlowska",
    "site": "miastopoznaj.pl – Blogi z Poznania",
    "title": "Aleksandra Kozłowska-Siejek - Do dziś pamiętam jego twarz",
    "author": "Paweł Cieliczko",
    "date": "2026-10-24",
    "url": "https://miastopoznaj.pl/blogi/z-poznania/17624-aleksandra-kozlowska-siejek-do-dzis-pamietam-jego-twarz",
    "pages": 3
  },
  {
    "id": "miastopoznaj-gorczyca",
    "site": "miastopoznaj.pl – Blogi z Poznania",
    "title": "Barbara Gorczyca - Została do niedzieli",
    "author": "Paweł Cieliczko",
    "date": "2026-10-25",
    "url": "https://miastopoznaj.pl/blogi/z-poznania/17625-barbara-gorczyca-zostala-do-niedzieli",
    "pages": 3
  },
  {
    "id": "miastopoznaj-banasiak",
    "site": "miastopoznaj.pl – Blogi z Poznania",
    "title": "Aleksandra Banasiak - Dzień wolny siostry Awany",
    "author": "Paweł Cieliczko",
    "date": "2026-10-25",
    "url": "https://miastopoznaj.pl/blogi/z-poznania/17626-aleksandra-banasiak-dzien-wolny-siostry-awany",
    "pages": 4
  }
];

export const pressById = Object.fromEntries(pressCopies.map((item) => [item.id, item]));
export const pressByUrl = Object.fromEntries(pressCopies.map((item) => [item.url, item]));

export const pressBook = (item) => ({
  title: `${item.site} – ${item.title}`,
  pages: item.pages,
  layout: "page",
  width: 911,
  height: 1288,
  spread: (n) => `${base}${item.id}/${String(n).padStart(2, "0")}.webp`,
  thumb: (n) => `${base}${item.id}/${String(n).padStart(2, "0")}-min.webp`,
  pdf: `${base}${item.id}.pdf`,
  pdfFileName: `Dokumentacja-publikacji-${item.id}.pdf`,
});

export const formatDate = (date) =>
  date.length === 7 ? `${date.slice(5, 7)}.${date.slice(0, 4)}` : date.split("-").reverse().join(".");
