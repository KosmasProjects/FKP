import { media } from "./media";

// Logotypy partnerów. `name` trafia do atrybutu alt (czytniki ekranu, SEO) –
// tam gdzie nazwa była niepewna, zostawiłem „Partner fundacji” do uzupełnienia.
export const partners = [
  { name: "Kancelaria Prezesa Rady Ministrów", file: "kancelariapremiera.png" },
  { name: "Ministerstwo Kultury i Dziedzictwa Narodowego", file: "kultura.png" },
  { name: "Ministerstwo Obrony Narodowej", file: "mon.png" },
  { name: "Ministerstwo Edukacji Narodowej", file: "men.png" },
  { name: "Ministerstwo Nauki i Szkolnictwa Wyższego", file: "MNiSW.png" },
  { name: "Ministerstwo Rozwoju i Technologii", file: "MRiT.png" },
  { name: "Miasto Poznań", file: "LOGO_POZNAN_PL_RGB_bz.jpg" },
  { name: "Samorząd Województwa Wielkopolskiego", file: "SWW.png" },
  { name: "Wielkopolski Urząd Wojewódzki w Poznaniu", file: "WUWwP.jpg" },
  { name: "Partner fundacji", file: "4.png" },
  { name: "Partner fundacji", file: "5.png" },
  { name: "Partner fundacji", file: "6.png" },
  { name: "NOWEFIO", file: "NoweFIO.png" },
  { name: "Partner fundacji", file: "logo_pl_skrocony.png" },
  { name: "Partner fundacji", file: "IAM.svg" },
  { name: "Poznańskie Towarzystwo Przyjaciół Nauk", file: "PTPN2.jpg" },
  { name: "Partner fundacji", file: "tonz.jpeg" },
  { name: "Towarzystwo Miłośników Miasta Poznania", file: "tmmp-logo.jpg" },
  { name: "Międzynarodowe Targi Poznańskie", file: "MTP.svg" },
  { name: "Aquanet", file: "aquanet.jpeg" },
  { name: "Partner fundacji", file: "natura.png" },
  { name: "Partner fundacji", file: "GW.svg" },
  { name: "Partner fundacji", file: "SPP.jpg" },
  { name: "Partner fundacji", file: "KW.png" },
  { name: "Partner fundacji", file: "7.png" },
  { name: "Partner fundacji", file: "8.png" },
  { name: "Partner fundacji", file: "9.png" },
].map((partner) => ({ ...partner, logo: media(partner.file) }));
