import { media, photo } from "./media";

// Palety kolorów (odcienie 400–700 z poprzedniej wersji strony).
const palettes = {
  blue: ["#4299E1", "#3182CE", "#2B6CB0", "#2C5282"],
  orange: ["#ED8936", "#DD6B20", "#C05621", "#9C4221"],
  teal: ["#38B2AC", "#319795", "#2C7A7B", "#285E61"],
  green: ["#48BB78", "#38A169", "#2F855A", "#276749"],
  purple: ["#9F7AEA", "#805AD5", "#6B46C1", "#553C9A"],
  pink: ["#ED64A6", "#D53F8C", "#B83280", "#97266D"],
  gray: ["#A0AEC0", "#718096", "#4A5568", "#2D3748"],
};

/*
 * Każdy projekt to jedna podstrona pod adresem /<slug>.
 *
 *  group       – kolumna na stronie głównej: "historyczne" albo "miejskie"
 *                (kolejność w tablicy = kolejność kafelków w kolumnie)
 *  tileColor   – kolor kafelka na stronie głównej
 *  palette     – kolory podstrony projektu
 *  logo        – logo projektu (kafelek na stronie głównej + opis)
 *  preview     – zdjęcie pokazywane po najechaniu na kafelek na stronie głównej
 *  cover       – zdjęcie startowe na podstronie projektu
 *  social      – opcjonalne linki { facebook, instagram, youtube, website }
 *
 * Opis programu i teksty kafelków (wraz ze zdjęciami) są w src/data/content/<slug>.js.
 */
const rawProjects = [
  {
    slug: "poznanskielegendy",
    title: "Poznańskie legendy",
    group: "historyczne",
    tileColor: palettes.green[2],
    palette: palettes.green,
    logo: media("logopomniki.png"),
    preview: photo("katedra-wieze.webp"),
    cover: photo("katedra-wieze.webp"),
  },
  {
    slug: "rozwazniiromantyczni",
    title: "Rozważni i romantyczni",
    group: "historyczne",
    tileColor: palettes.blue[0],
    palette: palettes.blue,
    logo: media("ROZWAZNI-ROMANTYCZNI_logo-pion_cmyk.svg"),
    preview: photo("pomnik-powstancow-wielkopolskich-plac.webp"),
    cover: photo("12-pazdziernika-1918.webp"),
  },
  {
    slug: "ws44",
    title: "Wspólna sprawa’44",
    group: "historyczne",
    tileColor: palettes.orange[3],
    palette: palettes.orange,
    logo: media("WS'44_logo_CMYK_biel+czerw.svg"),
    preview: photo("wielkopolska-barykada-2023.webp"),
    cover: media("WS'44_logo_CMYK_biel+czerw.svg"),
  },
  {
    slug: "bimbawhistorie",
    title: "Bimbą w historię",
    group: "historyczne",
    tileColor: palettes.orange[0],
    palette: palettes.orange,
    logo: media("BIMBA-W-HISTORIE_logo-pion_rgb.png"),
    preview: photo("bimba-w-historie.webp"),
    cover: photo("poznanski-czerwiec-1956-pochod.webp"),
  },
  {
    slug: "pomnikipoznania",
    title: "Pomniki Poznania",
    group: "miejskie",
    tileColor: palettes.teal[0],
    palette: palettes.teal,
    logo: media("POMNIKI-POZNANIA_logo-pion_cmyk.svg"),
    preview: photo("pomnik-stary-marych-polwiejska.webp"),
    cover: media("POMNIKI-POZNANIA_logo-pion_cmyk.svg"),
  },
  {
    slug: "ulicznikpoznanski",
    title: "Ulicznik poznański",
    group: "miejskie",
    tileColor: palettes.gray[0],
    palette: palettes.gray,
    logo: media("ULICZNIK_POZNANSKI_logo-pion_CMYK.svg"),
    preview: photo("okraglak.webp"),
    cover: photo("plan-posen.webp"),
    hasPodcasts: true,
  },
  {
    slug: "herstoriawartapoznania",
    title: "Herstoria warta Poznania",
    group: "miejskie",
    tileColor: palettes.pink[0],
    palette: palettes.purple,
    logo: media("HERSTORIE_logo-pion_CMYK.svg"),
    preview: photo("herstoria-kazimiera-illakowiczowna.webp"),
    cover: photo("herstoria-wlodarczyk.webp"),
  },
  {
    slug: "literackipoznan",
    title: "Poznańskie opowieści",
    group: "miejskie",
    tileColor: palettes.purple[0],
    palette: palettes.teal,
    logo: media("logopomniki.png"),
    preview: photo("ksiegarnia-sw-wojciecha.webp"),
    cover: photo("pawel-cieliczko-ksiazki.webp"),
  },
];

export const projects = rawProjects.map((project) => ({
  social: {},
  ...project,
  path: `/${project.slug}`,
}));

export const projectBySlug = Object.fromEntries(projects.map((p) => [p.slug, p]));

export const homeCover = photo("plac-kolegiacki.webp");
