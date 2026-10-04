# Fundacja Kochania Poznania – strona

Statyczna strona w React + Vite, bez backendu. Hostowana na GitHub Pages pod `/FKP/`.

## Uruchomienie

```bash
npm install
npm run dev      # podgląd na http://localhost:5173/FKP/
npm run build    # gotowa strona w dist/
npm run lint
```

Wymaga Node.js 20.19+ (zalecany 22).

## Gdzie co zmieniać

Treść jest w plikach w `src/data/` – nie trzeba ruszać komponentów.

| Plik | Co zawiera |
|---|---|
| `src/data/site.js` | opis fundacji, kontakt, social media, zespół, przyjaciele, publikacje, dane do wpłat |
| `src/data/projects.js` | programy (kafelki na stronie głównej i podstrony projektów) |
| `src/data/partners.js` | logotypy partnerów |
| `src/data/podcasts.js` | odcinki podcastu „Ulice Poznania” |
| `src/data/media.js` | adres, pod którym leżą zdjęcia i nagrania (Azure Blob) |
| `src/data/content/` | teksty fundacji, opisy programów i teksty kafelków (+ zdjęcia kafelków) |

Sekcje z pustymi danymi (np. `friends`, `publications`, `donation.accountNumber`)
po prostu się nie wyświetlają.

### Nowy projekt

Dopisz obiekt do listy w `src/data/projects.js`, dodaj plik z treścią
`src/data/content/<slug>.js` (wzór: dowolny istniejący) i dopisz go w
`src/data/content/index.js` – podstrona `/<slug>` i kafelek na stronie głównej
pojawią się automatycznie.

## Blog (posty z Facebooka)

Konfiguracja pobierania postów jest opisana w [FACEBOOK.md](FACEBOOK.md).

## Struktura

```
src/
  main.jsx            punkt wejścia
  App.jsx             trasy, przekierowania starych adresów, tytuły stron
  navigation.js       prosty router (History API) – usePath, navigate
  router.jsx          komponenty Link i NavLink
  components/         Layout, PreviewGrid (kafelki ze zdjęciem), PersonCard, …
  pages/              podstrony (ładowane na żądanie)
  data/               cała treść strony
  styles/global.css   style
scripts/
  fetch-facebook.mjs  pobieranie postów z Facebooka (npm run fb)
```

## Publikacja

Push na `main` uruchamia `.github/workflows/deploy.yml`: lint, build i publikacja `dist/`
na gałąź `gh-pages`. **Zacommituj `package-lock.json`** (powstaje po `npm install`) –
workflow używa `npm ci`.

Podczas buildu `index.html` jest kopiowany do `404.html`, dzięki czemu odświeżenie
dowolnej podstrony na GitHub Pages działa.

Po przeniesieniu strony na własną domenę zmień `base` w `vite.config.js` na `"/"`.
