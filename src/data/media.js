// Zdjęcia, logotypy i nagrania leżą na Azure Blob Storage (kontener publiczny).
// Jeśli kiedyś przeniesiesz pliki gdzie indziej, wystarczy zmienić MEDIA_URL.
export const MEDIA_URL =
  "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/";

// Pliki z polskimi znakami zostały wgrane na Azure w postaci Unicode NFD
// („a” + osobny ogonek zamiast gotowego „ą”, tak zapisuje je macOS).
// Bez normalize("NFD") np. „12 października 1918…” zwraca 404.
export const media = (fileName) => MEDIA_URL + encodeURIComponent(fileName.normalize("NFD"));
