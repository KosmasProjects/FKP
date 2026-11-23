// Podstrona „Czerwiec ’56” – teksty z publikacji
// „Czerwcowe ulice. Ulicznik poznański” (Paweł Cieliczko).
//
// Pliki publikacji leżą w public/czerwiec56/:
//   czerwcowe-ulice-ulicznik-poznanski.pdf – PDF do pobrania,
//   strony/NN.webp i strony/NN-min.webp     – rozkładówki do przeglądarki na stronie
//                                             (NN = numer strony PDF, od 01).
// Po podmianie PDF trzeba wygenerować obrazki na nowo i poprawić `book.pages`.

const base = `${import.meta.env.BASE_URL}czerwiec56/`;

export const book = {
  title: "Czerwcowe ulice",
  series: "Ulicznik poznański",
  author: "Paweł Cieliczko",
  pdf: `${base}czerwcowe-ulice-ulicznik-poznanski.pdf`,
  pdfFileName: "Czerwcowe-ulice-Ulicznik-poznanski.pdf",
  pdfSize: "1,4 MB",
  pages: 39,
  spread: (n) => `${base}strony/${String(n).padStart(2, "0")}.webp`,
  thumb: (n) => `${base}strony/${String(n).padStart(2, "0")}-min.webp`,
};

export const lead =
  "28 czerwca 1956 roku to pierwszy dzień w dziejach Polski Ludowej, gdy ludzi, którzy przestali się bać, było więcej niż tych zastraszonych.";

export const intro = [
  "Poznaniacy mieli już dość biedy, kłamstwa, niesprawiedliwości i upokorzeń, nie chcieli dłużej posłusznie klaskać na masówkach, a tylko szeptem krytykować towarzyszy. Zbuntowani mieszkańcy miasta opuścili swoje zakłady pracy i… wyszli na poznańskie ulice.",
  "Siła tego społecznego protestu, który 28 czerwca rozlał się po ulicach i placach Poznania, wzięła się z tego, że ludzie zobaczyli wreszcie, jak wielu ich jest, co sprawiło, że przestali się bać, poczuli własną moc i wzbudzili przerażenie rządzących, którzy pospiesznie opuścili miasto. Od tego dnia nic w Polsce nie było już takie samo.",
  "Poznański Czerwiec nie był precyzyjnie zaplanowanym strajkiem – nie istniały wówczas żadne struktury zorganizowanej opozycji, nie było przywódców, doradców ani planu działania. To była spontaniczna akcja młodych robotników, którzy potrafili się umówić i dać sobie słowo, że kiedy jeden zakład ruszy, pozostałe pójdą za nim.",
  "Poznański Czerwiec nie miał jednak szczęścia do późniejszego upamiętnienia. Władysław Gomułka stwierdził, że na „wydarzenia poznańskie” należy spuścić zasłonę milczenia, i zakazał kultywowania pamięci o tym, co działo się w Poznaniu. Możliwość upamiętnienia pojawiła się dopiero ćwierć wieku później, podczas krótkiego karnawału Solidarności.",
  "„Ulicznik poznański – Czerwiec 1956” opowiada nie tylko o tym, jak w przestrzeni naszego miasta zapisana została pamięć o tamtych wydarzeniach, ale wskazuje także na kolejne postaci, które zasługują na podobne uhonorowanie.",
];

export const outro =
  "Książka, podobnie jak robotnicza manifestacja, rozpoczyna się na ul. 28 Czerwca 1956 roku, skąd robotnicy Zakładów Cegielskiego (wówczas Stalina) wyszli na demonstrację, a kończy na placu Mickiewicza (wówczas Stalina), gdzie zebrały się największe w dziejach Polski Ludowej (przed 1980 rokiem) tłumy. Zapraszamy do wspólnego spaceru śladem jednego z ważniejszych w dziejach Poznania i Polski zrywów ludzi pracy.";

// `page` – numer strony PDF, na której zaczyna się rozdział (do przycisku „Czytaj w książce”).
export const placeGroups = [
  {
    id: "upamietnieni",
    title: "Upamiętnieni w nazwach ulic",
    description:
      "Ulica 28 Czerwca 1956 roku była pierwszą, w nazwie której upamiętniono robotniczy zryw. Przez kolejne 35 lat w przestrzeni miejskiej uhonorowano zaledwie osiem postaci związanych z Poznańskim Czerwcem.",
    places: [
      {
        letter: "A",
        type: "ulica",
        name: "28 Czerwca 1956 roku",
        district: "Wilda / Dębiec",
        year: "1981",
        page: 7,
        text: "Pierwsza ulica upamiętniająca robotniczy zryw. W 1981 roku Miejska Rada Narodowa zdecydowała, że Feliks Dzierżyński przestanie być patronem arterii wiodącej od Zakładów Cegielskiego do centrum miasta.",
      },
      {
        letter: "B",
        type: "ulica",
        name: "Romka Strzałkowskiego",
        district: "Jeżyce",
        year: "1981",
        page: 9,
        text: "Nastoletni uczestnik demonstracji i najmłodsza śmiertelna ofiara Poznańskiego Czerwca. Uliczkę wydzielono z dawnej ul. Mylnej, a u jej wlotu umieszczono pamiątkową tablicę.",
      },
      {
        letter: "C",
        type: "ulica",
        name: "Petera Mansfelda",
        district: "Jeżyce",
        year: "1990",
        page: 11,
        text: "Młody budapeszteńczyk, który zainspirowany poznańskim przykładem podjął walkę z dyktaturą komunistyczną w swoim kraju, za co został skazany na śmierć.",
      },
      {
        letter: "D",
        type: "ulica",
        name: "Kazimiery Iłłakowiczówny",
        district: "Łazarz",
        year: "1990",
        page: 13,
        text: "Poetka, autorka wiersza „Rozstrzelano moje serce”, który stał się literackim symbolem Poznańskiego Czerwca.",
      },
      {
        letter: "E",
        type: "ulica",
        name: "Jarosława Maciejewskiego",
        district: "Naramowice",
        year: "1990",
        page: 15,
        text: "Profesor romantyzmu na poznańskiej polonistyce, współredaktor monografii „Poznański Czerwiec 1956” z 1981 roku, w której zbudował heroiczną legendę Czarnego Czwartku.",
      },
      {
        letter: "F",
        type: "ulica",
        name: "Stanisława Hejmowskiego",
        district: "Stare Miasto",
        year: "2006",
        page: 17,
        text: "Złotousty adwokat broniący oskarżonych robotników w procesach poznańskich. Przy jego ulicy, prowadzącej do Sądu Okręgowego, stoi Pomnik Poznańskich Adwokatów.",
      },
      {
        letter: "G",
        type: "ulica",
        name: "Stanisława Matyi",
        district: "Wilda",
        year: "2010",
        page: 19,
        text: "Przywódca i główny organizator robotniczej protestacji. Jego ulicę wydzielono z ul. Towarowej – prowadzi bezpośrednio na most Dworcowy.",
      },
      {
        letter: "H",
        type: "ulica",
        name: "Janusza Kulasa",
        district: "Centrum",
        year: "2016",
        page: 21,
        text: "Jeden z najaktywniejszych uczestników wydarzeń, oskarżony w procesie dziesięciu „o wszystko”. Jego ulica łączy się tuż obok Sądu Okręgowego z ul. Hejmowskiego.",
      },
      {
        letter: "I",
        type: "skwer",
        name: "Jana Suwarta",
        district: "Centrum",
        year: "2016",
        page: 23,
        text: "Uczestnik walk pod Urzędem Bezpieczeństwa, który zasłynął zeznaniami przed sądem – stały się one oskarżeniem systemu komunistycznego.",
      },
    ],
  },
  {
    id: "postulaty",
    title: "Patroni, o których upominamy się w książce",
    description:
      "Na liście ulicznej chwały Poznańskiego Czerwca wciąż są rażące pominięcia. Autor proponuje upamiętnienie osób, które ratowały rannych i walczyły o uczciwą pamięć o Powstaniu Poznańskim, gdy nie było to ani proste, ani bezpieczne. Część tych propozycji udało się już zrealizować – z inicjatywy Fundacji powstał m.in. skwer dr. Józefa Granatowicza naprzeciw szpitala Raszei.",
    places: [
      {
        letter: "J",
        type: "skwer",
        name: "Józefa Granatowicza",
        district: "Jeżyce",
        page: 26,
        text: "Twórca i dyrektor Szpitala Miejskiego im. F. Raszei, który 28 czerwca 1956 roku przekształcił go w powstańczy lazaret i z narażeniem życia niósł pomoc rannym.",
      },
      {
        letter: "K",
        type: "ulica",
        name: "Konrada Doberschuetza",
        district: "Strzeszyn Literacki",
        page: 28,
        text: "Pisarz, poeta i dziennikarz, który głosił prawdę o Poznańskim Czerwcu, co przepłacił więzieniem za wiersz o Romku Strzałkowskim.",
      },
      {
        letter: "L",
        type: "ulica",
        name: "Zofii Trojanowiczowej",
        district: "Naramowice",
        page: 30,
        text: "Profesor poznańskiej polonistyki, która wraz z prof. Jarosławem Maciejewskim przygotowała w 1981 roku legendarną książkę „Poznański Czerwiec 1956”.",
      },
      {
        letter: "M",
        type: "pasaż",
        name: "Lecha Trzeciakowskiego",
        district: "Centrum",
        page: 32,
        text: "Profesor historii poznańskiego uniwersytetu – pierwszy badacz, który odszedł od umniejszania rangi wydarzeń i nazwał je Powstaniem Poznańskim.",
      },
      {
        letter: "N",
        type: "skwer",
        name: "Aleksandra Ziemkowskiego",
        district: "Wilda",
        page: 34,
        text: "Kustosz pamięci o Poznańskim Czerwcu, który przez dziesiątki lat zbierał dokumenty i relacje uczestników – do dziś są one źródłem wiedzy dla historyków.",
      },
    ],
  },
  {
    id: "suplement",
    title: "Suplement",
    description:
      "Najważniejszym miejscem tamtych wydarzeń – obok ówczesnych Zakładów im. Stalina – był plac, na którym zgromadził się nieprzebrany tłum mieszkańców miasta.",
    places: [
      {
        letter: "O",
        type: "plac",
        name: "Stalina",
        district: "Centrum",
        page: 37,
        text: "Dzisiejszy plac Mickiewicza. Osobliwość tej historii polega na tym, że Józef Stalin nigdy formalnie nie patronował temu centralnemu placowi.",
      },
    ],
  },
];
