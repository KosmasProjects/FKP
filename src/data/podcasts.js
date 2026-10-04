import { media } from "./media";

// Podcast „Ulice Poznania” (Radio Poznań), w kolejności emisji.
export const podcasts = [
  { title: "Ulice Poznania", date: "2024-04-21", file: "Ulice_Poznania_21.04.mp3" },
  { title: "Ulice Poznania", date: "2024-04-28", file: "Ulice_Poznania_28.04.mp3" },
  { title: "Ulice Poznania", date: "2024-05-05", file: "Ulice_Poznania_05.05.mp3" },
  { title: "Poznań rzeczny", date: "2024-05-12", file: "Historia_Żywa_-_Poznań_rzeczny.mp3" },
  { title: "Poznań wyspowy", date: "2024-05-17", file: "Historia_żywa_-_Poznań_wyspowy.mp3" },
  { title: "Ulice Poznania", date: "2024-06-09", file: "Ulice_09.06.24.mp3" },
  { title: "Ulice Poznania", date: "2024-06-16", file: "Ulice_Poznania_16.06.mp3" },
].map((episode, index) => ({
  ...episode,
  number: index + 1,
  station: "Radio Poznań",
  src: media(episode.file),
}));
