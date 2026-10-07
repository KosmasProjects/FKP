# Publikacja na cyber_Folks (new.fundacjakochaniapoznania.pl)

Są dwa sposoby – wystarczy wybrać jeden:

- **A. Ręcznie** – budujesz stronę u siebie i wgrywasz pliki (jak na Netlify).
  Dobre przy rzadkich aktualizacjach.
- **B. Automatycznie** – GitHub Actions buduje i wysyła stronę przez FTP przy każdym
  `git push` (oraz co 6 godzin, żeby odświeżać posty z Facebooka).

W obu przypadkach najpierw raz trzeba zrobić krok 1 (subdomena + SSL).

## 1. Subdomena (panel DirectAdmin)

1. Zaloguj się do panelu cyber_Folks → **DirectAdmin**.
2. Wybierz domenę `fundacjakochaniapoznania.pl` → **Zarządzanie subdomenami**
   (*Subdomain Management*) → dodaj subdomenę **`new`**.
3. DirectAdmin utworzy katalog
   `domains/fundacjakochaniapoznania.pl/public_html/new` – tam trafi strona.
4. **SSL**: w **Certyfikaty SSL** (*SSL Certificates*) upewnij się, że certyfikat
   Let's Encrypt obejmuje `new.fundacjakochaniapoznania.pl` (zaznacz subdomenę
   i wygeneruj ponownie, jeśli jej brakuje). Strona wymusza HTTPS, więc bez certyfikatu
   przeglądarka pokaże błąd.

DNS: jeśli domena korzysta z serwerów nazw cyber_Folks, rekord dla subdomeny doda się
sam. Jeśli DNS jest gdzie indziej, dodaj tam rekord `A` dla `new` na adres IP serwera.

## A. Publikacja ręczna

1. (Opcjonalnie) pobierz aktualne posty z Facebooka: `npm run fb`
   (wymaga pliku `.env.local`, patrz FACEBOOK.md; bez tego blog pokaże wtyczkę Facebooka).
2. Zbuduj stronę w wersji testowej (z blokadą Google):

   ```
   npm run build:new
   ```

   Na docelową domenę (bez blokady) użyj `npm run build`.
3. Spakuj **zawartość** katalogu `dist` (nie sam katalog):

   ```
   cd dist && zip -r ../strona.zip . && cd ..
   ```

   (Na Windowsie: zaznacz wszystko w `dist` → *Wyślij do* → *Folder skompresowany*.
   Upewnij się, że w środku jest plik `.htaccess` – Finder i Eksplorator mogą go ukrywać.)
4. DirectAdmin → **Menedżer plików** → `domains/fundacjakochaniapoznania.pl/public_html/new`
   → usuń starą zawartość → **Prześlij** `strona.zip` → **Rozpakuj** → usuń `strona.zip`.

   Zamiast menedżera plików możesz użyć programu FTP (FileZilla, Cyberduck) i przeciągnąć
   zawartość `dist` do katalogu subdomeny.

Uwaga: przy publikacji ręcznej posty na blogu są takie, jak w chwili budowania –
odświeżą się przy następnym wgraniu.

## B. Publikacja automatyczna

### 2. Konto FTP tylko dla subdomeny

1. DirectAdmin → **Zarządzanie FTP** (*FTP Management*) → **Utwórz konto FTP**.
2. Nazwa np. `deploy`, silne hasło (zapisz je).
3. Katalog: **Własny** (*Custom*) → `domains/fundacjakochaniapoznania.pl/public_html/new`.
   Dzięki temu konto widzi tylko subdomenę i nie może nic zmienić na głównej stronie.
4. Zanotuj pełną nazwę użytkownika (zwykle `deploy@fundacjakochaniapoznania.pl`)
   i adres serwera FTP (w panelu cyber_Folks / mailu powitalnym, np. `sXX.cyber-folks.pl`;
   zwykle działa też `fundacjakochaniapoznania.pl`).

### 3. Sekrety w repozytorium GitHub

Repozytorium → **Settings** → **Secrets and variables** → **Actions** →
**New repository secret**:

| Nazwa | Wartość |
|---|---|
| `FTP_SERVER` | adres serwera FTP, np. `s123.cyber-folks.pl` |
| `FTP_USERNAME` | np. `deploy@fundacjakochaniapoznania.pl` |
| `FTP_PASSWORD` | hasło konta FTP |

### 4. Publikacja

Zrób `git push` albo w **Actions** → **Deploy** → **Run workflow**. Po 1–2 minutach
strona będzie pod https://new.fundacjakochaniapoznania.pl.

Dopóki sekret `FTP_SERVER` nie jest ustawiony, workflow tylko sprawdza, czy strona się
buduje – niczego nie wysyła. Możesz więc spokojnie robić `git push` w trakcie prac.

Wysyłane są tylko zmienione pliki (stan trzyma plik `.ftp-deploy-sync-state.json`
na serwerze – nie usuwaj go).

## Wersja testowa a Google

`npm run build:new` (ręcznie) i workflow (`NOINDEX: "1"`) dodają znacznik `noindex`,
więc subdomena nie pojawi się w wynikach wyszukiwania.

## Przeniesienie na fundacjakochaniapoznania.pl

1. Zrób kopię obecnej zawartości `public_html` głównej domeny.
2. Utwórz konto FTP (lub zmień katalog istniejącego) na `domains/fundacjakochaniapoznania.pl/public_html`
   i podmień sekrety `FTP_*`.
3. Buduj przez `npm run build` (nie `build:new`), a w `.github/workflows/deploy.yml` **usuń linię `NOINDEX: "1"`**.
4. W `index.html` możesz dodać `<link rel="canonical" href="https://fundacjakochaniapoznania.pl/">`.

## Gdy coś nie działa

- **Błąd logowania FTP** w kroku „Wyślij na serwer” – sprawdź sekrety. Jeśli serwer
  nie obsługuje FTPS, zmień w workflow `protocol: ftps` na `protocol: ftp`.
- **Strona główna działa, ale odświeżenie podstrony daje 404** – na serwer nie trafił plik
  `.htaccess` (w niektórych programach FTP pliki z kropką są ukryte – sprawdź w menedżerze
  plików DirectAdmin).
- **Błąd 500** po wgraniu – usuń tymczasowo z `.htaccess` sekcje `<IfModule mod_headers.c>`
  i `<IfModule mod_deflate.c>` i daj znać.
