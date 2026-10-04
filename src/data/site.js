import { media } from "./media";

// Podstawowe informacje o fundacji – używane w nagłówku, stopce i na podstronach.
export const site = {
  name: "Fundacja Kochania Poznania",

  // Tekst główny fundacji (strona główna) jest w src/data/content/fundacja.js.

  heroImage: media("244-Marcin-Rurarz-Fotografia-WB23.jpg"),

  email: "kontakt@fundacjakochaniapoznania.pl",
  extraEmails: ["pawel@cieliczko.pl"],
  // Dodaj numer telefonu, jeśli ma być widoczny, np. "+48 600 000 000".
  phones: [],
  address: ["ul. Matejki 55/2", "60-770 Poznań"],

  social: {
    facebook: "https://www.facebook.com/FundacjaKochaniaPoznania/",
    instagram: "https://www.instagram.com/fundacja_kochania_poznania/",
    linkedin: "https://www.linkedin.com/company/fundacja-kochania-poznania/",
    youtube: "https://www.youtube.com/@fundacjakochaniapoznania5820",
  },

  // Dane do wpłat – sekcja „Wesprzyj nas” pokaże je, gdy zostaną uzupełnione.
  donation: {
    accountNumber: "", // np. "12 3456 7890 1234 5678 9012 3456"
    accountName: "Fundacja Kochania Poznania",
    transferTitle: "Darowizna na cele statutowe",
    krs: "",
  },
};

// Strona „Fundacja” (akapity „Czym się zajmujemy” pochodzą z tekstu głównego).
export const about = {
  activities: ["Projekty edukacyjne", "Spotkania integracyjne", "Wystawy i koncerty"],
  image: media("DSC_7070.jpg"),
};

// Zespół – zdjęcie jest opcjonalne (bez niego wyświetlą się inicjały).
export const team = [
  { name: "Paweł Cieliczko", role: "Prezes" },
  { name: "Krzysztof Burzyński", role: "Menedżer" },
  { name: "Kosma Cieliczko", role: "Programista" },
];

// Przyjaciele fundacji (dawniej pobierani z backendu). Pusta lista = sekcja ukryta.
// Przykład: { name: "Jan Kowalski", organization: "TMMP", description: "…", image: media("plik.jpg") }
export const friends = [];

// Publikacje fundacji (dawniej pobierane z backendu). Pusta lista = sekcja ukryta.
// Przykład: { title: "Ulicznik poznański", author: "…", price: "39,90 zł", description: "…", image: media("okladka.jpg") }
export const publications = [];
