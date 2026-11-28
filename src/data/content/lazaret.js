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

export const heroGroups = ["Szpital Raszei", "Inne szpitale i ratownicy", "Robotnicy i tramwajarki", "Świadkowie i obrońcy pamięci"];

export const heroes = [
  {
    "slug": "granatowicz",
    "name": "dr Józef Granatowicz",
    "role": "dyrektor Szpitala Raszei",
    "group": "Szpital Raszei",
    "brochure": {
      "title": "Człowiek, który wiedział, co robić",
      "lead": "W opowieściach pracowników Raszei nazwisko dyrektora wraca przy sprawach pozornie mało bohaterskich: wolnych łóżkach, opatrunkach, jedzeniu, przydzielaniu zadań. Właśnie z tych drobnych decyzji wyłania się człowiek, który 28 czerwca 1956 roku wziął odpowiedzialność za cały szpital."
    },
    "article": {
      "title": "Józef Granatowicz - Człowiek, który wiedział, co robić",
      "date": "2026-10-15",
      "url": "https://miastopoznaj.pl/blogi/z-poznania/17607-jozef-granatowicz-czlowiek-ktory-wiedzial-co-robic"
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
    },
    "article": {
      "title": "Henryk Karoń - Z okien szpitala",
      "date": "2026-10-15",
      "url": "https://miastopoznaj.pl/blogi/z-poznania/17608-henryk-karon-z-okien-szpitala"
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
    },
    "article": {
      "title": "Maciej Sikorski - Nie chciał być bohaterem",
      "date": "2026-10-18",
      "url": "https://miastopoznaj.pl/blogi/z-poznania/17614-maciej-sikorski-nie-chcial-byc-bohaterem"
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
    },
    "article": {
      "title": "Ireneusz Cieśliński - Z księgą przyjęć do sądu",
      "date": "2026-10-18",
      "url": "https://miastopoznaj.pl/blogi/z-poznania/17613-ireneusz-cieslinski-z-ksiega-przyjec-do-sadu"
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
    },
    "article": {
      "title": "Bolesław Śliwiński - Z pomocą do Urzędu Bezpieczeństwa",
      "date": "2026-10-18",
      "url": "https://miastopoznaj.pl/blogi/z-poznania/17612-boleslaw-sliwinski-z-pomoca-do-urzedu-bezpieczenstwa"
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
    },
    "article": {
      "title": "Aleksandra Banasiak - Dzień wolny siostry Awany",
      "date": "2026-10-25",
      "url": "https://miastopoznaj.pl/blogi/z-poznania/17626-aleksandra-banasiak-dzien-wolny-siostry-awany"
    }
  },
  {
    "slug": "kozlowska",
    "name": "Aleksandra Kozłowska-Siejek",
    "role": "laborantka i sanitariuszka",
    "group": "Szpital Raszei",
    "brochure": {
      "title": "Do dziś pamiętam jego twarz",
      "lead": "Aleksandra Kozłowska miała osiemnaście lat i pracowała w Raszei jako pomoc laboratoryjna. Nie była jeszcze wykwalifikowaną pielęgniarką. Gdy 28 czerwca 1956 roku zaczęto wołać o pomoc, wyszła z koleżankami po rannych. Bała się, ale wracała na ulicę."
    },
    "article": {
      "title": "Aleksandra Kozłowska-Siejek - Do dziś pamiętam jego twarz",
      "date": "2026-10-24",
      "url": "https://miastopoznaj.pl/blogi/z-poznania/17624-aleksandra-kozlowska-siejek-do-dzis-pamietam-jego-twarz"
    }
  },
  {
    "slug": "pawlowska",
    "name": "Zofia Pawłowska-Bartoszewska",
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
    },
    "article": {
      "title": "Zofia Pawłowska-Bartoszewska - Pacjentka, która wróciła do pracy",
      "date": "2026-10-21",
      "url": "https://miastopoznaj.pl/blogi/z-poznania/17620-zofia-pawlowska-bartoszewska-pacjentka-ktora-wrocila-do-pracy"
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
    },
    "article": {
      "title": "Barbara Gorczyca - Została do niedzieli",
      "date": "2026-10-25",
      "url": "https://miastopoznaj.pl/blogi/z-poznania/17625-barbara-gorczyca-zostala-do-niedzieli"
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
    "slug": "laskowska",
    "name": "s. Gertruda Laskowska",
    "role": "szarytka, pielęgniarka izby przyjęć Szpitala Przemienienia Pańskiego",
    "group": "Inne szpitale i ratownicy",
    "brochure": {
      "title": "Przy drzwiach izby przyjęć",
      "lead": "Siostra Gertruda Laskowska pełniła 28 czerwca 1956 roku dyżur w izbie przyjęć Szpitala Przemienienia Pańskiego przy ulicy Długiej. Do niej trafiali ludzie przywożeni z ulic Poznania. Opatrywała rannych, pomagała kierować ich do dalszego leczenia, odpowiadała na pytania rodzin. Wkrótce musiała także chronić pacjentów przed aresztowaniem."
    },
    "interview": {
      "slug": "szarytki",
      "title": "„Od izby przyjęć do sali operacyjnej”",
      "pages": 18,
      "note": "rozmowa z s. Gertrudą Laskowską i s. Reginą Szypurą"
    }
  },
  {
    "slug": "imielinski",
    "name": "Zdzisław Imieliński",
    "role": "mechanik, kierowca improwizowanej karetki",
    "group": "Inne szpitale i ratownicy",
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
    "group": "Robotnicy i tramwajarki",
    "brochure": {
      "title": "Chłopak z transparentem",
      "lead": "Janusz Kulas miał dziewiętnaście lat i pracował jako kierowca. 28 czerwca 1956 roku namówił kolegów do wyjścia na ulicę i stanął na czele grupy demonstrantów. Kilka miesięcy później siedział na ławie oskarżonych. Władza chciała pokazać przywódcę chuliganów. On opowiadał przed sądem o biciu, którym wymuszono jego zeznania."
    }
  },
  {
    "slug": "suwart",
    "name": "Jan Suwart",
    "role": "uczestnik walk, oskarżony w procesie dziewięciu",
    "group": "Robotnicy i tramwajarki",
    "brochure": {
      "title": "Oskarżony, który oskarżył system",
      "lead": "Jan Suwart znał gmach Urzędu Bezpieczeństwa przy Kochanowskiego. Pracował tam jego ojciec, przedwojenny komunista. 28 czerwca 1956 roku Jan zobaczył, jak z tego budynku strzela się do demonstrantów. Włączył się do walki. Kilka miesięcy później, już jako oskarżony, opowiedział przed sądem o krzywdach wyrządzonych jego rodzinie przez tę samą władzę."
    }
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
    "role": "świadek wydarzeń, ranny przed Urzędem Bezpieczeństwa",
    "group": "Świadkowie i obrońcy pamięci",
    "brochure": {
      "title": "Z balkonu do szpitala raszei",
      "lead": "Egon Naganowski patrzył na ulicę Kochanowskiego z balkonu mieszkania znajomej dentystki. Widział tłum przed Urzędem Bezpieczeństwa i ludzi padających po strzałach. Po kilkudziesięciu minutach sam został ranny. Jego opowieść prowadzi z balkonu do pokoju, w którym zakładano mu opatrunek, a potem do ostrzelanej sali Szpitala Raszei."
    }
  },
  {
    "slug": "hejmowski",
    "name": "Stanisław Hejmowski",
    "role": "adwokat oskarżonych w procesach poznańskich",
    "group": "Świadkowie i obrońcy pamięci",
    "brochure": {
      "title": "Adwokat poznańskich robotników",
      "lead": "Młody oskarżony ukłonił się sędziom i podziękował, że nie bito go w areszcie. Stanisław Hejmowski nie mógł przejść nad tym do porządku. Przypomniał sądowi, że wolny człowiek nie powinien musieć dziękować władzy za brak przemocy. Jesienią 1956 roku tak właśnie bronił uczestników Poznańskiego Czerwca: pokazując krzywdę kryjącą się za językiem oskarżenia."
    }
  },
  {
    "slug": "doberschuetz",
    "name": "Konrad Doberschuetz",
    "role": "poeta i dziennikarz",
    "group": "Świadkowie i obrońcy pamięci",
    "brochure": {
      "title": "Skazany za poezję",
      "lead": "Konrad Doberschuetz opisał Czerwiec jako świadek i poeta. Widział maszerujących robotników, a potem napisał kołysankę dla Romka Strzałkowskiego. Za ten wiersz i inne utwory stanął przed sądem. W 1959 roku usłyszał wyrok trzech lat więzienia. Jego pisanie uznano za zbrodnię przeciwko państwu."
    }
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

export const heroArticle = (hero) => asset(`artykuly/${hero.slug}.json`);

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
  { title: "Radio Poznań – relacja z pikniku, cz. 1", src: asset("audio/piknik-raszei-1.mp3"), duration: "5:17" },
  { title: "Radio Poznań – relacja z pikniku, cz. 2", src: asset("audio/piknik-raszei-2.mp3"), duration: "6:20" },
  { title: "Radio Poznań – relacja z pikniku, cz. 3", src: asset("audio/piknik-raszei-3.mp3"), duration: "7:14" },
  { title: "Radio Poznań – relacja z pikniku, cz. 4", src: asset("audio/piknik-raszei-4.mp3"), duration: "8:01" },
  { title: "Radio Poznań – „Kultura w obiegu”: Powstańczy Lazaret ’56", src: asset("audio/kultura-w-obiegu-lazaret56.mp3"), duration: "12:19" },
  { title: "Radio Emaus – rozmowa z Pawłem Cieliczką (20.10.2026)", src: asset("audio/radio-emaus-pawel-cieliczko-2026-10-20.mp3"), duration: "15:51" },
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
// url – oryginał; local – kopia tekstu na naszej stronie. Kopie PDF (dokumentacja publikacji)
// są w prasa.js i podpinają się automatycznie po tym samym adresie url.

export const media = [
  {
    outlet: "Głos Wielkopolski",
    items: [
      { title: "„Kule wpadały do sal operacyjnych”. Czerwiec ’56 opowiadają ci, którzy ratowali życie", kind: "Grzegorz Okoński", date: "19.10.2026", url: "https://gloswielkopolski.pl/kule-wpadaly-do-sal-operacyjnych-w-szpitalu-raszei-poznanski-czerwiec-56-opowiadaja-ci-ktorzy-ratowali-zycie/ar/c1p2-29443957" },
      { title: "„Poznański Czerwiec zapoczątkował Polski Październik”. Zbliża się wyjątkowy piknik", kind: "Sylwia Rycharska", date: "21.10.2026", url: "https://gloswielkopolski.pl/dlaczego-czerwiec-56-swietujemy-w-pazdzierniku-pawel-cieliczko-trzeba-opowiedziec-takze-o-zwyciestwie/ar/c1p2-29455257" },
      { title: "Lazaret, teatr i pierwsza pomoc także psom oraz kotom. Co czeka nas 24 października w Szpitalu Raszei?", kind: "Sylwia Rycharska", date: "23.10.2026", url: "https://gloswielkopolski.pl/wyjatkowe-wydarzenie-w-poznaniu-lazaret-teatr-i-pierwsza-pomoc-takze-psom-oraz-kotom-co-czeka-nas-24-pazdziernika-w-szpitalu-raszei/ar/c1p2-29461485" },
    ],
  },
  {
    outlet: "miastopoznaj.pl",
    note: "Cykl „Najważniejszy dyżur w życiu” – teksty Pawła Cieliczki są też do przeczytania u nas, na stronach bohaterów.",
    items: [
      { title: "„Najważniejszy dyżur w życiu”. Nowy cykl historyczny na Miastopoznaj.pl", kind: "zapowiedź cyklu", date: "15.10.2026", url: "https://miastopoznaj.pl/wiadomosci/17606-najwazniejszy-dyzur-w-zyciu-nowy-cykl-historyczny-na-miastopoznaj-pl" },
      { title: "Józef Granatowicz - Człowiek, który wiedział, co robić", kind: "Paweł Cieliczko", date: "15.10.2026", url: "https://miastopoznaj.pl/blogi/z-poznania/17607-jozef-granatowicz-czlowiek-ktory-wiedzial-co-robic", local: "/czerwiec56/bohaterowie/granatowicz#artykul" },
      { title: "Henryk Karoń - Z okien szpitala", kind: "Paweł Cieliczko", date: "15.10.2026", url: "https://miastopoznaj.pl/blogi/z-poznania/17608-henryk-karon-z-okien-szpitala", local: "/czerwiec56/bohaterowie/karon#artykul" },
      { title: "Bolesław Śliwiński - Z pomocą do Urzędu Bezpieczeństwa", kind: "Paweł Cieliczko", date: "18.10.2026", url: "https://miastopoznaj.pl/blogi/z-poznania/17612-boleslaw-sliwinski-z-pomoca-do-urzedu-bezpieczenstwa", local: "/czerwiec56/bohaterowie/sliwinski#artykul" },
      { title: "Ireneusz Cieśliński - Z księgą przyjęć do sądu", kind: "Paweł Cieliczko", date: "18.10.2026", url: "https://miastopoznaj.pl/blogi/z-poznania/17613-ireneusz-cieslinski-z-ksiega-przyjec-do-sadu", local: "/czerwiec56/bohaterowie/cieslinski#artykul" },
      { title: "Maciej Sikorski - Nie chciał być bohaterem", kind: "Paweł Cieliczko", date: "18.10.2026", url: "https://miastopoznaj.pl/blogi/z-poznania/17614-maciej-sikorski-nie-chcial-byc-bohaterem", local: "/czerwiec56/bohaterowie/sikorski#artykul" },
      { title: "Zofia Pawłowska-Bartoszewska - Pacjentka, która wróciła do pracy", kind: "Paweł Cieliczko", date: "21.10.2026", url: "https://miastopoznaj.pl/blogi/z-poznania/17620-zofia-pawlowska-bartoszewska-pacjentka-ktora-wrocila-do-pracy", local: "/czerwiec56/bohaterowie/pawlowska#artykul" },
      { title: "Aleksandra Kozłowska-Siejek - Do dziś pamiętam jego twarz", kind: "Paweł Cieliczko", date: "24.10.2026", url: "https://miastopoznaj.pl/blogi/z-poznania/17624-aleksandra-kozlowska-siejek-do-dzis-pamietam-jego-twarz", local: "/czerwiec56/bohaterowie/kozlowska#artykul" },
      { title: "Barbara Gorczyca - Została do niedzieli", kind: "Paweł Cieliczko", date: "25.10.2026", url: "https://miastopoznaj.pl/blogi/z-poznania/17625-barbara-gorczyca-zostala-do-niedzieli", local: "/czerwiec56/bohaterowie/gorczyca#artykul" },
      { title: "Aleksandra Banasiak - Dzień wolny siostry Awany", kind: "Paweł Cieliczko", date: "25.10.2026", url: "https://miastopoznaj.pl/blogi/z-poznania/17626-aleksandra-banasiak-dzien-wolny-siostry-awany", local: "/czerwiec56/bohaterowie/banasiak#artykul" },
      { title: "Powstańczy Lazaret 56 roku", kind: "zapowiedź wydarzenia", date: "22.10.2026", url: "https://miastopoznaj.pl/kultura-i-styl/17622-powstanczy-lazaret-56-roku" },
    ],
  },
  {
    outlet: "wpoznaniu.pl",
    items: [
      { title: "Tramwaj nie przyjechał. Kilka godzin później Szpital Raszei był powstańczym lazaretem", kind: "rozmowa z Pawłem Cieliczką", date: "13.10.2026", url: "https://wpoznaniu.pl/tramwaj-nie-przyjechal-kilka-godzin-pozniej-szpital-raszei-byl-powstanczym-lazaretem/" },
      { title: "Przed szpitalem Raszei przypominają bohaterów Czerwca ’56", kind: "Aleksandra Wróblewska", date: "24.10.2026", url: "https://wpoznaniu.pl/przed-szpitalem-raszei-przypominaja-bohaterow-czerwca-56/" },
    ],
  },
  {
    outlet: "Radio Poznań",
    items: [
      { title: "„Kule wpadały do sal operacyjnych”. Zobacz Czerwiec ’56 oczami ludzi ze Szpitala Raszei", date: "16.10.2026", url: "https://www.radiopoznan.fm/patronaty/kule-wpadaly-do-sal-operacyjnych-zobacz-czerwiec-56-oczami-ludzi-ze-szpitala-raszei" },
      { title: "Bimbą w historię. W poznańskich tramwajach pojawią się wędrowcy w czasie", date: "19.10.2026", url: "https://www.radiopoznan.fm/patronaty/bimba-w-historie-w-poznanskich-tramwajach-pojawia-sie-wedrowcy-w-czasie" },
      { title: "Tu ratowano rannych robotników. Powstańczy lazaret przed szpitalem Raszei", date: "24.10.2026", url: "https://radiopoznan.fm/informacje/pozostale/tu-ratowano-rannych-robotnikow-powstanczy-lazaret-przed-szpitalem-raszei" },
      { title: "Rozmowa Łukasza Kaźmierczaka z Pawłem Cieliczką" },
    ],
  },
  {
    outlet: "Radio Emaus",
    items: [
      { title: "Poznański Lazaret ’56 – Paweł Cieliczko, prezes Fundacji Kochania Poznania", kind: "rozmowa (audio)", date: "20.10.2026", url: "https://radioemaus.pl/aktualnosci/poznanski-lazaret56-pawel-cieliczko-prezes-fundacji-kochania-poznania/", local: "/czerwiec56#nagrania", localLabel: "posłuchaj u nas" },
    ],
  },
  {
    outlet: "Centrum Inicjatyw Senioralnych",
    items: [
      { title: "Powstańczy Lazaret ’56", kind: "zapowiedź wydarzenia", date: "29.09.2026", url: "https://centrumis.pl/powstanczy-lazaret-56/" },
    ],
  },
  {
    outlet: "Sukces po poznańsku",
    items: [
      { title: "Zapowiedź pikniku „Powstańczy Lazaret ’56”", kind: "nr 10/2026, s. 38–39", url: "https://wydawnictwa.grupamtp.pl/spp/102026/38/" },
      { title: "Artykuł na stronie internetowej" },
    ],
  },
  {
    outlet: "Facebook",
    note: "Zdjęcia i rolki z wydarzenia.",
    items: [
      { title: "Zdjęcie z wydarzenia", kind: "post", url: "https://www.facebook.com/photo?fbid=1800072144996793&set=a.559608782376475" },
      { title: "Zdjęcie z wydarzenia", kind: "post", url: "https://www.facebook.com/photo/?fbid=1798065291864145&set=a.559608795709807" },
      { title: "Zdjęcia z wydarzenia", kind: "post", url: "https://www.facebook.com/photo/?fbid=1427597252921798&set=pcb.1427597306255126" },
      { title: "Zdjęcia z wydarzenia", kind: "post", url: "https://www.facebook.com/photo?fbid=1407900434839363&set=pcb.1407900854839321" },
      { title: "Rolka z wydarzenia", kind: "film", url: "https://www.facebook.com/reel/1604853511322525" },
    ],
  },
  { outlet: "Radio Afera", items: [{ title: "Rozmowa z Pawłem Cieliczką" }] },
  { outlet: "McRadio", items: [{ title: "Materiał o wydarzeniu" }] },
  { outlet: "Senioralny Poznań", items: [{ title: "Materiał o wydarzeniu" }] },
  { outlet: "Goniec Poznański", items: [{ title: "Materiał o wydarzeniu" }] },
  { outlet: "Tramwaje", items: [{ title: "Akcja „Bimbą w historię” w poznańskich tramwajach" }] },
];
