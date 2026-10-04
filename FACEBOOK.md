# Posty z Facebooka na podstronie „Blog”

Podstrona `/blog` wyświetla najnowsze posty fundacji jako karty w stylu strony.
Posty pobiera skrypt `scripts/fetch-facebook.mjs` (Graph API) i zapisuje do
`public/facebook-posts.json`. Na GitHubie robi to workflow przy każdej publikacji
i automatycznie co 6 godzin.

Dopóki token nie jest ustawiony, blog pokazuje zapasową, oficjalną wtyczkę Facebooka
(ładowaną po kliknięciu „Pokaż posty”).

## Jednorazowa konfiguracja (ok. 20–30 minut)

Potrzebujesz konta na Facebooku z rolą administratora strony fundacji.

1. **Utwórz aplikację.** Wejdź na https://developers.facebook.com → *Moje aplikacje* →
   *Utwórz aplikację*. Jako przypadek użycia wybierz zarządzanie stroną
   (np. „Zarządzaj wszystkim na swojej stronie”). Aplikacja może zostać w trybie
   deweloperskim – do czytania postów własnej strony nie jest potrzebna weryfikacja.

2. **Wygeneruj token użytkownika.** Otwórz *Graph API Explorer*
   (https://developers.facebook.com/tools/explorer), wybierz swoją aplikację,
   „User Token” i dodaj uprawnienia `pages_show_list` oraz `pages_read_engagement`.
   Kliknij *Generate Access Token*, zaloguj się i zaznacz stronę fundacji.

3. **Przedłuż token.** Skopiuj token do *Access Token Debugger*
   (https://developers.facebook.com/tools/debug/accesstoken), kliknij
   *Debug*, a potem *Extend Access Token* na dole. Dostaniesz token ważny ~60 dni.

4. **Pobierz token strony.** Wróć do Graph API Explorera, wklej przedłużony token
   i wykonaj zapytanie `GET me/accounts`. Przy stronie fundacji znajdziesz:
   - `id` – to jest **FB_PAGE_ID**,
   - `access_token` – to jest **FB_PAGE_TOKEN**.

   Token strony uzyskany z przedłużonego tokenu użytkownika **nie wygasa**.
   Możesz to sprawdzić w Access Token Debugger („Expires: Never”).

5. **Dodaj sekrety na GitHubie.** Repozytorium → *Settings* → *Secrets and variables*
   → *Actions* → *New repository secret*. Dodaj dwa sekrety: `FB_PAGE_ID` i `FB_PAGE_TOKEN`.

6. **Uruchom publikację.** *Actions* → *Deploy* → *Run workflow*. Po 1–2 minutach
   blog pokaże posty.

## Podgląd lokalny

Utwórz w katalogu projektu plik `.env.local` (nie trafia do gita):

```
FB_PAGE_ID=123456789
FB_PAGE_TOKEN=EAAB...
```

Następnie:

```
npm run fb
npm run dev
```

## Gdy posty przestaną się aktualizować

- Token przestaje działać m.in. po zmianie hasła lub utracie roli administratora
  strony – wygeneruj nowy (kroki 2–5).
- GitHub wyłącza zaplanowane uruchomienia po 60 dniach bez commitów w repozytorium.
  Włączysz je ponownie w *Actions* → *Deploy* → *Enable workflow*.
- Błędy pobierania widać w logu kroku „Pobierz posty z Facebooka”. Strona i tak się
  opublikuje – blog pokaże wtedy zapasową wtyczkę.
