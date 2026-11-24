// Powstańczy Lazaret ’56 – dane podstron Czerwca ’56 ułożone według „linkowni”.
// Pliki leżą w public/czerwiec56/ (broszury, rozmowy, wystawa, foto, audio, filmy).
//
// Jak uzupełniać:
//  • nowy materiał bohatera – dopisz pole (brochure / interview / film / article) w tablicy `heroes`,
//  • link do artykułu albo audycji – wpisz `url` w `media` (pozycje bez url pokazują się jako „wkrótce”),
//  • film z Dysku Google – id pliku z linku https://drive.google.com/file/d/<ID>/view.

const base = `${import.meta.env.BASE_URL}czerwiec56/`;
export const asset = (path) => `${base}${path}`;

export const event = {
  title: "Powstańczy Lazaret ’56",
  subtitle: "Piknik historyczny w 70. rocznicę Poznańskiego Czerwca",
  date: "24 października 2026",
  time: "10.00–18.00",
  place: "Dziedziniec Szpitala Miejskiego im. Franciszka Raszei w Poznaniu",
  entrance: "wejście od ul. Zacisze",
  poster: asset("plakat.webp"),
  funding: "Dofinansowano ze środków Muzeum Historii Polski w Warszawie w ramach programu „Patriotyzm Jutra. Wielkie Rocznice”.",
};

export const intro = [
  "28 czerwca 1956 roku Szpital Miejski im. Franciszka Raszei – zaledwie kilkaset metrów od gmachu Urzędu Bezpieczeństwa – w ciągu kilku godzin zamienił się w powstańczy lazaret. Lekarze operowali bez przerwy, pielęgniarki opatrywały rannych pod ostrzałem, a personel walczył o życie każdego człowieka, niezależnie od tego, po której stronie znalazł się podczas walk.",
  "Projektem „Powstańczy Lazaret ’56” zamknęliśmy obchody 70. rocznicy Poznańskiego Czerwca. Złożyły się na niego broszury i rozmowy z bohaterami tamtych dni, plenerowa wystawa na ogrodzeniu szpitala, przedstawienie, stanowiska rekonstrukcyjne, spacery oraz akcja pamięci na grobach powstańców czerwcowych.",
];

export const heroGroups = ["Szpital Raszei", "Ratownicy", "Robotnicy i tramwajarki", "Świadkowie i obrońcy pamięci"];

export const heroes = [
  {
    "slug": "granatowicz",
    "name": "dr Józef Granatowicz",
    "role": "dyrektor Szpitala Raszei",
    "group": "Szpital Raszei",
    "brochure": {
      "title": "Człowiek, który wiedział, co robić",
      "lead": "W opowieściach pracowników Raszei nazwisko dyrektora wraca przy sprawach pozornie mało bohaterskich: wolnych łóżkach, opatrunkach, jedzeniu, przydzielaniu zadań. Właśnie z tych drobnych decyzji wyłania się człowiek, który 28 czerwca 1956 roku wziął odpowiedzialność za cały szpital."
    }
  },
  {
    "slug": "karon",
    "name": "dr Henryk Karoń",
    "role": "lekarz chirurg",
    "group": "Szpital Raszei",
    "brochure": {
      "title": "Z okien szpitala raszei",
      "lead": "Najpierw patrzył przez okno. Potem przy stole operacyjnym próbował ratować ludzi przynoszonych z ulicy. We wspomnieniu Henryka Karonia szczególnie porusza mnie chwila, w której widok miasta zmienia się w osobistą odpowiedzialność za pojedynczego człowieka."
    }
  },
  {
    "slug": "sikorski",
    "name": "dr Maciej Sikorski",
    "role": "lekarz medycyny pracy",
    "group": "Szpital Raszei",
    "brochure": {
      "title": "Nie chciał być bohaterem",
      "lead": "W jego wspomnieniach jest miejsce na strach, niedokończone badanie i różę od pacjenta. Maciej Sikorski nie chciał upiększać swojego Czerwca. Właśnie dlatego chcę opowiedzieć o nim jako o człowieku, który przez trzy doby pomagał rannym."
    }
  },
  {
    "slug": "cieslinski",
    "name": "dr Ireneusz Cieśliński",
    "role": "lekarz chirurg",
    "group": "Szpital Raszei",
    "brochure": {
      "title": "Z księgą przyjęć do sądu",
      "lead": "Gdy pojawili się pierwsi ranni, Ireneusz Cieśliński zbiegł na dół i przywołał dwie rejestratorki. Miały zapisywać nazwiska oraz godziny przyjęć. Potem wrócił do pracy chirurga. Nie wiedział jeszcze, że jesienią zabierze szpitalną księgę na salę sądową."
    }
  },
  {
    "slug": "sliwinski",
    "name": "dr Bolesław Śliwiński",
    "role": "lekarz chirurg",
    "group": "Szpital Raszei",
    "brochure": {
      "title": "Po drugiej stronie barykady",
      "lead": "Od Raszei do gmachu Urzędu Bezpieczeństwa było niedaleko. 28 czerwca 1956 roku kilka minut drogi oznaczało jednak przejście przez teren walk. Bolesław Śliwiński poszedł tam jako lekarz, do ludzi potrzebujących pomocy, choć instytucja budziła gniew i strach Poznaniaków."
    }
  },
  {
    "slug": "banasiak",
    "name": "Aleksandra Banasiak",
    "role": "siostra Awana",
    "group": "Szpital Raszei",
    "brochure": {
      "title": "Dzień wolny siostry awany",
      "lead": "28 czerwca 1956 roku Aleksandra Banasiak miała wolne. Chciała obejrzeć sklepy, trochę pochodzić po Poznaniu i odebrać ojca z dworca. Gdy później usłyszała wołania rannych, włożyła fartuch. Jej najważniejszy dyżur zaczął się w dniu, w którym nie planowała pracować."
    }
  },
  {
    "slug": "siejek",
    "name": "Aleksandra Siejek",
    "group": "Szpital Raszei"
  },
  {
    "slug": "kozlowska",
    "name": "Aleksandra Kozłowska",
    "role": "laborantka i sanitariuszka",
    "group": "Szpital Raszei",
    "brochure": {
      "title": "Do dziś pamiętam jego twarz",
      "lead": "Aleksandra Kozłowska miała osiemnaście lat i pracowała w Raszei jako pomoc laboratoryjna. Nie była jeszcze wykwalifikowaną pielęgniarką. Gdy 28 czerwca 1956 roku zaczęto wołać o pomoc, wyszła z koleżankami po rannych. Bała się, ale wracała na ulicę."
    }
  },
  {
    "slug": "pawlowska",
    "name": "Zofia Pawłowska",
    "role": "pielęgniarka",
    "group": "Szpital Raszei",
    "brochure": {
      "title": "Pacjentka, która wróciła do pracy",
      "lead": "Zofia Pawłowska miała odpoczywać. Trzy dni wcześniej usunięto jej migdałki i nadal leżała na laryngologii Szpitala Raszei. 28 czerwca 1956 roku sama była pacjentką. Po kilku godzinach włożyła jednak pielęgniarski mundur i poszła do rannych."
    },
    "interview": {
      "slug": "pawlowska",
      "title": "„Wczoraj byłam pacjentką. Noc spędziłam przy rannych”",
      "pages": 19
    }
  },
  {
    "slug": "gorczyca",
    "name": "Barbara Gorczyca",
    "role": "kierowniczka laboratorium",
    "group": "Szpital Raszei",
    "brochure": {
      "title": "Została do niedzieli",
      "lead": "Barbara Gorczyca miała rozpocząć pracę o ósmej. Gdy 28 czerwca 1956 roku wyszła na balkon przy Chłapowskiego, zobaczyła robotników idących od Cegielskiego. Chwyciła torebkę i ruszyła do szpitala. Nie wiedziała jeszcze, że wróci dopiero w niedzielę."
    }
  },
  {
    "slug": "kapelski",
    "name": "Bogumił Kapelski",
    "role": "kierownik kadr Szpitala Raszei",
    "group": "Szpital Raszei",
    "brochure": {
      "title": "Przy telefonie dyrektora",
      "lead": "Bogumił Kapelski nie operował. Kierował kadrami Szpitala Raszei, znał pracowników i miał kontakty w urzędach. 28 czerwca 1956 roku zrobił wiele, żeby inni mogli leczyć: zdobywał wiadomości, zaopatrzenie i pomoc dla szpitala."
    },
    "interview": {
      "slug": "kapelski",
      "title": "„Czterdzieści lat byłem kadrowym u Raszei”",
      "pages": 21
    }
  },
  {
    "slug": "szarytki",
    "name": "Siostry szarytki",
    "role": "s. Gertruda Laskowska i s. Regina Szypura",
    "group": "Szpital Raszei",
    "interview": {
      "slug": "szarytki",
      "title": "„Od izby przyjęć do sali operacyjnej”",
      "pages": 18
    }
  },
  {
    "slug": "imielinski",
    "name": "Zdzisław Imieliński",
    "role": "mechanik, kierowca improwizowanej karetki",
    "group": "Ratownicy",
    "interview": {
      "slug": "imielinski",
      "title": "„Nie miałem karetki. Miałem klucze”",
      "pages": 18
    }
  },
  {
    "slug": "matyja",
    "name": "Stanisław Matyja",
    "role": "stolarz z Zakładów Cegielskiego",
    "group": "Robotnicy i tramwajarki",
    "brochure": {
      "title": "Stolarz, który powiedział nie",
      "lead": "Kiedy 28 czerwca 1956 roku Stanisław Matyja przebierał się w zakładowej szatni, przybiegli po niego koledzy. Przy przesuwnicy czekali robotnicy. Wiedzieli, kogo wołają: stolarza, który wcześniej upominał się o ich wynagrodzenia i nie bał się spierać z dyrekcją. Zanim został jednym z przywódców pochodu, zdobył zaufanie ludzi pracujących obok niego."
    }
  },
  {
    "slug": "przybylek",
    "name": "Helena Przybyłek",
    "role": "tramwajarka z Poznania",
    "group": "Robotnicy i tramwajarki",
    "brochure": {
      "title": "Dziewczyna, która uciekła ze wsi",
      "lead": "Helena Przybyłek wyjechała do Poznania, żeby samodzielnie ułożyć sobie życie. Praca w tramwajach, służbowy mundur i pokój na Grudzieńcu były początkiem tej samodzielności. 28 czerwca 1956 roku miała dwadzieścia lat. Wyszła do pracy, a kilka godzin później leżała na ulicy Kochanowskiego z przestrzelonymi nogami."
    }
  },
  {
    "slug": "sobanska",
    "name": "Stanisława Sobańska",
    "role": "tramwajarka z Poznania",
    "group": "Robotnicy i tramwajarki",
    "brochure": {
      "title": "Niosła flagę. nie mogła zapomnieć",
      "lead": "Stanisława Sobańska wysiadła z tramwaju na ulicy Dąbrowskiego i dołączyła do robotniczego pochodu. Była młodą konduktorką, jedną z wielu osób, które tego ranka przerwały pracę. Kilka godzin później trzymała biało-czerwoną flagę przed Urzędem Bezpieczeństwa. Strzały raniły ją w nogę. Najcięższe obrażenia miała jednak odnieść dopiero podczas śledztwa."
    }
  },
  {
    "slug": "kapturska",
    "name": "Maria Kapturska",
    "role": "tramwajarka z Poznania",
    "group": "Robotnicy i tramwajarki",
    "brochure": {
      "title": "Upomniała się o sprawiedliwość",
      "lead": "Maria Kapturska uniknęła kul na ulicy Kochanowskiego. Kilka dni później została jednak zatrzymana i pobita podczas przesłuchań. Kiedy wyszła na wolność, upomniała się o ukaranie funkcjonariuszy. Państwo potwierdziło, że stosowano wobec niej przemoc, ale sprawców nie ukarało. To właśnie ten dalszy ciąg jej czerwcowej historii szczególnie chciałbym przypomnieć."
    }
  },
  {
    "slug": "kulas",
    "name": "Janusz Kulas",
    "role": "uczestnik walk, oskarżony w procesie dziesięciu",
    "group": "Robotnicy i tramwajarki"
  },
  {
    "slug": "suwart",
    "name": "Jan Suwart",
    "role": "uczestnik walk, oskarżony w procesie dziewięciu",
    "group": "Robotnicy i tramwajarki"
  },
  {
    "slug": "strzalkowski",
    "name": "Romek Strzałkowski",
    "role": "najmłodsza ofiara Poznańskiego Czerwca",
    "group": "Robotnicy i tramwajarki"
  },
  {
    "slug": "naganowski",
    "name": "Egon Naganowski",
    "group": "Świadkowie i obrońcy pamięci"
  },
  {
    "slug": "hejmowski",
    "name": "Stanisław Hejmowski",
    "role": "adwokat oskarżonych w procesach poznańskich",
    "group": "Świadkowie i obrońcy pamięci"
  },
  {
    "slug": "doberschuetz",
    "name": "Konrad Doberschuetz",
    "role": "poeta i dziennikarz",
    "group": "Świadkowie i obrońcy pamięci"
  }
];

export const heroBySlug = Object.fromEntries(heroes.map((hero) => [hero.slug, hero]));

export const brochureBook = (hero) => ({
  title: `${hero.name} – broszura „${hero.brochure.title}”`,
  pages: 4,
  layout: "page",
  width: 1000,
  height: 1414,
  spread: (n) => asset(`bohaterowie/${hero.slug}/${String(n).padStart(2, "0")}.webp`),
  thumb: (n) => asset(`bohaterowie/${hero.slug}/${String(n).padStart(2, "0")}-min.webp`),
  pdf: asset(`bohaterowie/${hero.slug}/broszura.pdf`),
  pdfFileName: `Bohaterowie-Czerwca-56-${hero.slug}.pdf`,
});

export const interviewBook = (hero) => ({
  title: `${hero.name} – scenariusz rozmowy`,
  pages: hero.interview.pages,
  layout: "page",
  width: 900,
  height: 1273,
  spread: (n) => asset(`rozmowy/${hero.interview.slug}/${String(n).padStart(2, "0")}.webp`),
  thumb: (n) => asset(`rozmowy/${hero.interview.slug}/${String(n).padStart(2, "0")}-min.webp`),
  pdf: asset(`rozmowy/${hero.interview.slug}/rozmowa.pdf`),
  pdfFileName: `Rozmowa-${hero.interview.slug}.pdf`,
});

export const heroCover = (hero) =>
  hero.brochure ? asset(`bohaterowie/${hero.slug}/01-min.webp`) : null;

// --- Wystawa plenerowa ---
export const exhibition = {
  title: "Kule wpadały do sali operacyjnej",
  subtitle: "Poznański Czerwiec 1956 w relacjach pracowników Szpitala Miejskiego im. Franciszka Raszei",
  curator: "dr Paweł Cieliczko",
  quote: {
    text: "Nie minęło nawet pół godziny, a cały szpital był przestawiony na wojenne tory. Każdy znał swoje miejsce. Cała maszyna ruszyła do pracy.",
    author: "dr Maciej Sikorski",
  },
  description: [
    "28 czerwca 1956 roku Poznań stał się areną pierwszego wielkiego buntu społecznego przeciwko komunistycznej władzy w powojennej Polsce. O tych wydarzeniach najczęściej opowiada się z perspektywy robotników, którzy wyszli na ulice miasta, albo oczami funkcjonariuszy aparatu bezpieczeństwa, którzy potajemnie dokumentowali przebieg demonstracji i walk.",
    "Ta wystawa pokazuje Poznański Czerwiec z innej perspektywy. Jej bohaterami są lekarze, pielęgniarki, sanitariuszki, laborantki i pozostali pracownicy Szpitala Miejskiego im. Franciszka Raszei – ludzie, którzy nie organizowali demonstracji i nie podejmowali decyzji politycznych. Gdy w pobliżu szpitala padły pierwsze strzały, skupili się na tym, co najważniejsze: ratowaniu ludzkiego życia.",
    "Wystawę przygotowały Fundacja Kochania Poznania i Szpital Miejski im. Franciszka Raszei w Poznaniu w ramach projektu „Powstańczy Lazaret ’56”. Zaprezentowano na niej materiały z Archiwum Fundacji Kochania Poznania, Archiwum Instytutu Pamięci Narodowej, Archiwum Szpitala Raszei oraz Muzeum Powstania Poznańskiego – Czerwiec 1956.",
  ],
  book: {
    title: "Wystawa „Kule wpadały do sali operacyjnej”",
    pages: 29,
    layout: "spread",
    width: 1800,
    height: 1351,
    label: "Plansza",
    hint: "Na telefonie przesuń planszę palcem, żeby przeczytać ją w całości.",
    spread: (n) => asset(`wystawa/${String(n).padStart(2, "0")}.webp`),
    thumb: (n) => asset(`wystawa/${String(n).padStart(2, "0")}-min.webp`),
    pdf: asset("wystawa/wystawa-kule-wpadaly-do-sali-operacyjnej.pdf"),
    pdfFileName: "Wystawa-Kule-wpadaly-do-sali-operacyjnej.pdf",
  },
};

// --- Przedstawienie ---
export const play = {
  title: "Bóg i dyrektor nad nami czuwał",
  author: "Paweł Cieliczko",
  description: [
    "Plenerowe przedstawienie o doktorze Józefie Granatowiczu i Szpitalu Raszei podczas Poznańskiego Czerwca 1956 roku, wystawione 24 października 2026 roku na dziedzińcu szpitala.",
    "Narratorem jest Konrad Doberschuetz – dziennikarz, poeta i świadek tamtych dni. Sam Granatowicz nie pojawia się na scenie: jego obecność budują wspomnienia lekarzy, pielęgniarek i pracowników szpitala, ich decyzje – i pusty fotel w gabinecie dyrektora.",
  ],
  script: asset("przedstawienie/scenariusz.json"),
};

// --- Zdjęcia i filmy ---
const photoSet = (list) => list.map(([name, width, height]) => ({ src: asset(`foto/${name}.webp`), thumb: asset(`foto/${name}-min.webp`), width, height }));
export const photos = {
  piknik: photoSet([["piknik-01", 1100, 734], ["piknik-02", 1100, 734], ["piknik-03", 1100, 734], ["piknik-04", 1100, 734], ["piknik-05", 1100, 734], ["piknik-06", 1100, 734], ["piknik-07", 1100, 734], ["piknik-08", 1100, 734], ["piknik-09", 1100, 734], ["piknik-10", 1100, 734], ["piknik-11", 1100, 734], ["piknik-12", 1100, 734], ["piknik-13", 1100, 734], ["piknik-14", 1100, 734], ["piknik-15", 1100, 734], ["piknik-16", 1100, 734], ["piknik-17", 1100, 734], ["piknik-18", 1100, 739]]),
  wystawa: photoSet([["wystawa-01", 1100, 734], ["wystawa-02", 1100, 734], ["wystawa-03", 1100, 734], ["wystawa-04", 1100, 734], ["wystawa-05", 1100, 734], ["wystawa-06", 1100, 734]]),
  spektakl: photoSet([["spektakl-01", 1100, 825], ["spektakl-02", 1100, 825], ["spektakl-03", 1100, 825], ["spektakl-04", 1100, 825], ["spektakl-05", 1100, 825], ["spektakl-06", 1100, 825], ["spektakl-07", 1100, 825], ["spektakl-08", 1100, 825]]),
};

export const videos = {
  spektakl: { id: "1V2SEVRXDMYI6xlFYv7byHrriwiQZCIXp", title: "Film z przedstawienia „Bóg i dyrektor nad nami czuwał”", poster: asset("foto/spektakl-05.webp"), vertical: false },
  relacja: { id: "1ZreYMybLL7YWxy_Ove-umReNJ8GWztST", title: "Rolka – relacja z pikniku", poster: asset("filmy/rolka-relacja.webp"), vertical: true },
  aktorzy: { id: "1_fxzeAZ3pEFusN4OfNKi0zeYP_wm3Jaz", title: "Rolka – aktorzy zapraszają", poster: asset("filmy/rolka-aktorzy.webp"), vertical: true },
  lekarz: { id: "1ukOyCKY71cxqu3RhAA3EtaLWzVslkNBk", title: "Rolka – „Cześć, witam”", poster: asset("filmy/rolka-lekarz.webp"), vertical: true },
};

export const recordings = [
  { title: "Nagranie z pikniku – część 3", src: asset("audio/piknik-raszei-3.mp3"), duration: "8:01" },
  { title: "Nagranie z pikniku – część 4", src: asset("audio/piknik-raszei-4.mp3"), duration: "7:14" },
];

// --- Stanowiska rekonstrukcyjne ---
export const stations = [
  { title: "Czerwcowy Arsenał ’56", text: "Broń, umundurowanie i wyposażenie z czasów Poznańskiego Czerwca w rękach grup rekonstrukcyjnych.", photo: 17 },
  { title: "Czerwcowy Lazaret ’56", text: "Jak w trakcie walk ratowano rannych – opatrunki, nosze i pierwsza pomoc, także w praktycznych pokazach.", photo: 9 },
  { title: "Czerwcowe Procesy ’56", text: "Procesy uczestników Poznańskiego Czerwca i ich obrońcy – dokumenty, fotografie i historie oskarżonych.", photo: 7 },
  { title: "Życie codzienne ’56", text: "Przedmioty, hasła i realia Poznania połowy lat pięćdziesiątych – od kartek na żywność po radio w kuchni.", photo: 4 },
  { title: "Pamięć Czerwca ’56", text: "Jak przez 70 lat upamiętniano Poznański Czerwiec – pomniki, ulice, tablice i ludzie, którzy pielęgnowali pamięć.", photo: 18 },
];

// --- Spacery i pamięć ---
export const walks = [
  { title: "Trasa spaceru śladami Poznańskiego Czerwca ’56" },
  { title: "Spacerownik poznański – Czerwiec ’56", to: "/czerwiec56/czerwcowe-ulice", note: "Czerwcowe ulice – Ulicznik poznański (czytaj online i pobierz PDF)" },
  { title: "Fotorelacja ze spaceru śladami Poznańskiego Czerwca ’56" },
];

export const memory = [
  { title: "Spis odwiedzonych grobów bohaterów Poznańskiego Czerwca ’56", to: "/czerwiec56/groby" },
  { title: "Fotorelacja ze sprzątania grobów powstańców czerwcowych" },
  { title: "Fotorelacja z zapalania zniczy na grobach bohaterów Czerwca ’56" },
];

// --- Media o nas ---
const miastopoznaj = ["Dr Józef Granatowicz", "Dr Henryk Karoń", "Dr Maciej Sikorski", "Dr Ireneusz Cieśliński", "Dr Bolesław Śliwiński", "Aleksandra Banasiak", "Aleksandra Siejek", "Zofia Pawłowska", "Barbara Gorczyca", "Bogumił Kapelski"];

export const media = [
  {
    outlet: "Głos Wielkopolski",
    items: [
      { title: "Kule wpadały do sal operacyjnych w Szpitalu Raszei. Poznański Czerwiec ’56 opowiadają ci, którzy ratowali życie", url: "https://gloswielkopolski.pl/kule-wpadaly-do-sal-operacyjnych-w-szpitalu-raszei-poznanski-czerwiec-56-opowiadaja-ci-ktorzy-ratowali-zycie/ar/c1p2-29443957" },
      { title: "Dlaczego Czerwiec ’56 świętujemy w październiku? Paweł Cieliczko: trzeba opowiedzieć także o zwycięstwie", kind: "rozmowa z Pawłem Cieliczką", url: "https://gloswielkopolski.pl/dlaczego-czerwiec-56-swietujemy-w-pazdzierniku-pawel-cieliczko-trzeba-opowiedziec-takze-o-zwyciestwie/ar/c1p2-29455257" },
      { title: "Lazaret, teatr i pierwsza pomoc także psom oraz kotom. Co czeka nas 24 października w Szpitalu Raszei?", kind: "zapowiedź wydarzenia", date: "23.10.2026", url: "https://gloswielkopolski.pl/wyjatkowe-wydarzenie-w-poznaniu-lazaret-teatr-i-pierwsza-pomoc-takze-psom-oraz-kotom-co-czeka-nas-24-pazdziernika-w-szpitalu-raszei/ar/c1p2-29461485" },
    ],
  },
  {
    outlet: "Sukces po poznańsku",
    items: [
      { title: "Zapowiedź pikniku „Powstańczy Lazaret ’56”", kind: "nr 10/2026", url: "https://wydawnictwa.grupamtp.pl/spp/102026/38/" },
      { title: "Rozmowa z Pawłem Cieliczką" },
    ],
  },
  {
    outlet: "Radio Poznań",
    items: [
      { title: "„Kule wpadały do sal operacyjnych”. Zobacz Czerwiec ’56 oczami ludzi ze Szpitala Raszei", date: "16.10.2026", url: "https://www.radiopoznan.fm/patronaty/kule-wpadaly-do-sal-operacyjnych-zobacz-czerwiec-56-oczami-ludzi-ze-szpitala-raszei" },
      { title: "Bimbą w historię. W poznańskich tramwajach pojawią się wędrowcy w czasie", date: "19.10.2026", url: "https://www.radiopoznan.fm/patronaty/bimba-w-historie-w-poznanskich-tramwajach-pojawia-sie-wedrowcy-w-czasie" },
      { title: "Tu ratowano rannych robotników. Powstańczy lazaret przed szpitalem Raszei", date: "24.10.2026", url: "https://radiopoznan.fm/informacje/pozostale/tu-ratowano-rannych-robotnikow-powstanczy-lazaret-przed-szpitalem-raszei" },
      { title: "Rozmowa Łukasza Kaźmierczaka z Pawłem Cieliczką" },
      { title: "Relacje z wydarzenia" },
    ],
  },
  { outlet: "Radio Emaus", items: [{ title: "Rozmowa" }] },
  { outlet: "Radio Afera", items: [{ title: "Rozmowa" }] },
  { outlet: "miastopoznaj.pl", note: "Artykuły o bohaterach Poznańskiego Czerwca ’56", items: miastopoznaj.map((title) => ({ title })) },
  { outlet: "McRadio", items: [{ title: "Materiał o wydarzeniu" }] },
  { outlet: "Senioralny Poznań", items: [{ title: "Materiał o wydarzeniu" }] },
  { outlet: "wpoznaniu.pl", items: [{ title: "Materiał o wydarzeniu" }] },
  { outlet: "Goniec Poznański", items: [{ title: "Materiał o wydarzeniu" }] },
  { outlet: "Tramwaje", items: [{ title: "Akcja „Bimbą w historię” w poznańskich tramwajach" }] },
];
