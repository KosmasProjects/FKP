import { media } from "./media";

// Logotypy w public/partners/ (przycięte z „Wykazu logotypów partnerów FKP”, 6.10.2026).
const partnerLogo = (file) => `${import.meta.env.BASE_URL}partners/${file}`;

/*
 * Partnerzy i przyjaciele fundacji – układ z dokumentu
 * „Partnerzy i przyjaciele Fundacji Kochania Poznania”.
 *
 * Każdy partner: { name, logo?, background? }
 *   logo       – brak = na stronie wyświetli się nazwa w miejscu logo
 *   background – kolor tła karty dla logotypów białych (na ciemnym tle)
 *
 * Nowe logo: wrzuć plik do public/partners/ i dopisz  logo: partnerLogo("plik.webp").
 */

export const partnersIntro =
  "Nasze działania powstają dzięki współpracy instytucji publicznych, samorządów, środowisk naukowych i kulturalnych, organizacji społecznych, przedsiębiorstw, twórców oraz mediów. Wspólnie odkrywamy historię Poznania i Wielkopolski, wydajemy książki, przygotowujemy wystawy i wydarzenia, prowadzimy działania edukacyjne oraz dbamy o pamięć o ludziach związanych z naszym miastem.";

export const partnerGroups = [
  {
    id: "administracja-panstwowa-i-ministerstwa",
    title: "Administracja państwowa i ministerstwa",
    description: "Wsparcie administracji państwowej pomaga nam rozwijać projekty historyczne, edukacyjne i wydawnicze oraz docierać z nimi do nowych odbiorców.",
    subgroups: [
      {
        title: null,
        partners: [
          {
            name: "Kancelaria Prezesa Rady Ministrów",
            logo: media("kancelariapremiera.png")
          },
          {
            name: "Ministerstwo Kultury i Dziedzictwa Narodowego",
            logo: media("kultura.png")
          },
          {
            name: "Ministerstwo Obrony Narodowej",
            logo: media("mon.png")
          },
          {
            name: "Ministerstwo Edukacji Narodowej",
            logo: media("men.png")
          },
          {
            name: "Ministerstwo Nauki i Szkolnictwa Wyższego",
            logo: media("MNiSW.png")
          },
          {
            name: "Ministerstwo Rozwoju i Technologii",
            logo: media("MRiT.png")
          }
        ]
      }
    ]
  },
  {
    id: "instytucje-finansujace-i-programy-wsparcia",
    title: "Instytucje finansujące i programy wsparcia",
    description: "Dzięki wsparciu finansowemu realizujemy przedsięwzięcia służące pamięci, edukacji i aktywności społecznej.",
    subgroups: [
      {
        title: "Instytucje",
        partners: [
          {
            name: "Narodowy Instytut Wolności – Centrum Rozwoju Społeczeństwa Obywatelskiego",
            logo: media("5.png")
          },
          {
            name: "Fundacja Grupy PKP",
            logo: partnerLogo("uzup-fundacja-grupy-pkp.webp")
          },
          {
            name: "Komitet do spraw Pożytku Publicznego",
            logo: media("4.png")
          }
        ]
      },
      {
        title: "Programy",
        partners: [
          {
            name: "Niepodległa",
            logo: media("logo_pl_skrocony.png")
          },
          {
            name: "Patriotyzm Jutra. Wielkie Rocznice"
          },
          {
            name: "Fundusz Inicjatyw Obywatelskich FIO",
            logo: media("6.png")
          },
          {
            name: "Fundusz Inicjatyw Obywatelskich NOWEFIO",
            logo: media("NoweFIO.png")
          },
          {
            name: "PROO",
            logo: partnerLogo("uzup-proo.webp")
          }
        ]
      }
    ]
  },
  {
    id: "samorzady-i-administracja-regionalna",
    title: "Samorządy i administracja regionalna",
    description: "Współpraca z samorządami, administracją regionalną oraz radami osiedli i dzielnic łączy nasze działania z potrzebami mieszkańców i lokalnych wspólnot.",
    subgroups: [
      {
        title: "Partnerzy regionalni i lokalni",
        partners: [
          {
            name: "Miasto Poznań",
            logo: partnerLogo("001-miasto-poznan.webp")
          },
          {
            name: "Samorząd Województwa Wielkopolskiego",
            logo: partnerLogo("002-samorzad-wojewodztwa-wielkopolskiego.webp")
          },
          {
            name: "Urząd Marszałkowski Województwa Wielkopolskiego w Poznaniu",
            logo: partnerLogo("003-urzad-marszalkowski-wojewodztwa-wielkopolskiego.webp")
          },
          {
            name: "Wielkopolski Urząd Wojewódzki w Poznaniu",
            logo: media("WUWwP.jpg")
          },
          {
            name: "Starostwo Powiatowe w Poznaniu",
            logo: partnerLogo("005-starostwo-powiatowe-w-poznaniu.webp")
          },
          {
            name: "Gmina Kaźmierz",
            logo: partnerLogo("006-gmina-kazmierz.webp")
          },
          {
            name: "Gmina Czerwonak",
            logo: partnerLogo("007-gmina-czerwonak.webp")
          }
        ]
      },
      {
        title: "Rady osiedli i dzielnic",
        partners: [
          {
            name: "Rada Dzielnicy Ochota m.st. Warszawy",
            logo: partnerLogo("uzup-rada-dzielnicy-ochota.webp")
          },
          {
            name: "Rada Osiedla Stare Miasto w Poznaniu",
            logo: partnerLogo("009-rada-osiedla-stare-miasto-w-poznaniu.webp")
          },
          {
            name: "Rada Osiedla Św. Łazarz w Poznaniu",
            logo: partnerLogo("uzup-rada-osiedla-lazarz.webp"),
            background: "#30395a"
          },
          {
            name: "Rada Osiedla Wilda w Poznaniu",
            logo: partnerLogo("011-rada-osiedla-wilda-w-poznaniu.webp")
          }
        ]
      }
    ]
  },
  {
    id: "mecenasi-i-partnerzy-biznesowi",
    title: "Mecenasi i partnerzy biznesowi",
    description: "Przedsiębiorstwa wspierają nasze projekty finansowo, rzeczowo i organizacyjnie. Ich zaangażowanie pomaga zamieniać pomysły w książki, wydarzenia i działania społeczne.",
    subgroups: [
      {
        title: "Mecenasi i partnerzy przedsiębiorstw",
        partners: [
          {
            name: "Aquanet S.A.",
            logo: partnerLogo("012-aquanet-s-a.webp")
          },
          {
            name: "Międzynarodowe Targi Poznańskie sp. z o.o. (Grupa MTP)",
            logo: partnerLogo("013-miedzynarodowe-targi-poznanskie-sp-z-o-o-grupa-m.webp")
          },
          {
            name: "Miejskie Przedsiębiorstwo Komunikacyjne w Poznaniu sp. z o.o.",
            logo: partnerLogo("014-miejskie-przedsiebiorstwo-komunikacyjne-w-poznan.webp")
          },
          {
            name: "UWI Inwestycje S.A. (dawniej Unia Wspólnego Inwestowania)",
            logo: partnerLogo("015-uwi-inwestycje-s-a-dawniej-unia-wspolnego-inwest.webp"),
            background: "#292c31"
          },
          {
            name: "Poczta Polska S.A.",
            logo: partnerLogo("016-poczta-polska-s-a.webp")
          },
          {
            name: "„PKP Intercity” S.A.",
            logo: partnerLogo("017-pkp-intercity-s-a.webp")
          },
          {
            name: "Koleje Wielkopolskie sp. z o.o.",
            logo: partnerLogo("018-koleje-wielkopolskie-sp-z-o-o.webp")
          },
          {
            name: "TORPOL S.A.",
            logo: partnerLogo("019-torpol-s-a.webp")
          }
        ]
      },
      {
        title: "Partnerzy rzeczowi, organizacyjni i usługowi",
        partners: [
          {
            name: "YORK PL sp. z o.o. sp. k.",
            logo: partnerLogo("020-york-pl-sp-z-o-o-sp-k.webp"),
            background: "#292c31"
          },
          {
            name: "Piekarnia Natura Prosta Spółka Akcyjna",
            logo: partnerLogo("021-piekarnia-natura-prosta-spolka-akcyjna.webp"),
            background: "#292c31"
          },
          {
            name: "Browar Sady sp. z o.o. sp. k.",
            logo: partnerLogo("022-browar-sady-sp-z-o-o-sp-k.webp"),
            background: "#292c31"
          },
          {
            name: "Tłocznia Dziadka Franka (marka firmy frankfood Agnieszki Wiśniewskiej)",
            logo: partnerLogo("023-tlocznia-dziadka-franka-marka-firmy-frankfood-ag.webp")
          },
          {
            name: "Turystyka Kolejowa TurKol.pl sp. z o.o.",
            logo: partnerLogo("uzup-turkol.webp"),
            background: "#95282b"
          },
          {
            name: "Biuro Genealogiczne „ORIGO” Joanna Lubierska",
            logo: partnerLogo("025-biuro-genealogiczneorigojoanna-lubierska.webp")
          },
          {
            name: "Scriptor s.c."
          },
          {
            name: "Retromania – butik strojów historycznych Aleksandry Olejniczak",
            logo: partnerLogo("027-retromania-butik-strojow-historycznych-aleksandr.webp"),
            background: "#292c31"
          }
        ]
      }
    ]
  },
  {
    id: "uczelnie-i-partnerzy-naukowi",
    title: "Uczelnie i partnerzy naukowi",
    description: "Środowiska akademickie i naukowe są ważnym zapleczem naszych poszukiwań: pomagają poznawać źródła, rozwijać badania i przygotowywać rzetelne opowieści o przeszłości.",
    subgroups: [
      {
        title: "Uczelnie",
        partners: [
          {
            name: "Uniwersytet im. Adama Mickiewicza w Poznaniu",
            logo: partnerLogo("028-uniwersytet-im-adama-mickiewicza-w-poznaniu.webp")
          },
          {
            name: "Uniwersytet Ekonomiczny w Poznaniu",
            logo: partnerLogo("029-uniwersytet-ekonomiczny-w-poznaniu.webp")
          },
          {
            name: "Uniwersytet Medyczny im. Karola Marcinkowskiego w Poznaniu",
            logo: partnerLogo("030-uniwersytet-medyczny-im-karola-marcinkowskiego-w.webp")
          },
          {
            name: "Uniwersytet Artystyczny im. Magdaleny Abakanowicz w Poznaniu",
            logo: partnerLogo("031-uniwersytet-artystyczny-im-magdaleny-abakanowicz.webp")
          },
          {
            name: "Politechnika Poznańska w Poznaniu",
            logo: partnerLogo("032-politechnika-poznanska-w-poznaniu.webp"),
            background: "#292c31"
          }
        ]
      },
      {
        title: "Jednostki i instytucje naukowe",
        partners: [
          {
            name: "Wydział Historii Uniwersytetu im. Adama Mickiewicza w Poznaniu (dawniej Instytut Historii UAM)",
            logo: partnerLogo("033-wydzial-historii-uniwersytetu-im-adama-mickiewic.webp")
          },
          {
            name: "Centrum „Instytut Wielkopolski” Wydziału Historii Uniwersytetu im. Adama Mickiewicza w Poznaniu",
            logo: partnerLogo("uzup-uam-instytut-wielkopolski.webp")
          },
          {
            name: "Instytut Zachodni im. Zygmunta Wojciechowskiego",
            logo: partnerLogo("035-instytut-zachodni-im-zygmunta-wojciechowskiego.webp")
          },
          {
            name: "Poznańskie Towarzystwo Przyjaciół Nauk",
            logo: partnerLogo("036-poznanskie-towarzystwo-przyjaciol-nauk.webp")
          },
          {
            name: "Fundacja na rzecz Badań Literackich"
          }
        ]
      }
    ]
  },
  {
    id: "muzea-i-izby-pamieci",
    title: "Muzea i izby pamięci",
    description: "Muzea i izby pamięci przybliżają historię poprzez kolekcje, wystawy i edukację. Współpraca z nimi pozwala łączyć lokalne opowieści z szerszym dziedzictwem.",
    subgroups: [
      {
        title: null,
        partners: [
          {
            name: "Muzeum Historii Polski w Warszawie",
            logo: partnerLogo("038-muzeum-historii-polski-w-warszawie.webp")
          },
          {
            name: "Muzeum Narodowe w Warszawie",
            logo: partnerLogo("039-muzeum-narodowe-w-warszawie.webp")
          },
          {
            name: "Muzeum Wojska Polskiego w Warszawie",
            logo: partnerLogo("040-muzeum-wojska-polskiego-w-warszawie.webp")
          },
          {
            name: "Muzeum Powstania Warszawskiego",
            logo: partnerLogo("041-muzeum-powstania-warszawskiego.webp")
          },
          {
            name: "Muzeum Narodowe w Poznaniu",
            logo: partnerLogo("042-muzeum-narodowe-w-poznaniu.webp"),
            background: "#292c31"
          },
          {
            name: "Wielkopolskie Muzeum Niepodległości w Poznaniu",
            logo: partnerLogo("043-wielkopolskie-muzeum-niepodleglosci-w-poznaniu.webp")
          },
          {
            name: "Muzeum Powstania Poznańskiego – Czerwiec 1956",
            logo: partnerLogo("uzup-muzeum-czerwiec-1956.webp")
          },
          {
            name: "Ratusz – Muzeum Poznania, dawniej Muzeum Historii Miasta Poznania",
            logo: partnerLogo("uzup-ratusz-muzeum-poznania.webp"),
            background: "#1d2a3a"
          },
          {
            name: "Muzeum Archidiecezjalne w Poznaniu"
          },
          {
            name: "Muzeum Uniwersytetu im. Adama Mickiewicza w Poznaniu",
            logo: partnerLogo("047-muzeum-uniwersytetu-im-adama-mickiewicza-w-pozna.webp")
          },
          {
            name: "Muzeum Uniwersytetu Medycznego im. Karola Marcinkowskiego w Poznaniu",
            logo: partnerLogo("uzup-muzeum-ump.webp")
          },
          {
            name: "Muzeum Powstańców Wielkopolskich im. gen. Józefa Dowbora Muśnickiego w Lusowie",
            logo: partnerLogo("049-muzeum-powstancow-wielkopolskich-im-gen-jozefa-d.webp")
          },
          {
            name: "GASPAR Muzeum Starych Narzędzi i Maszyn",
            logo: partnerLogo("uzup-gaspar.webp")
          },
          {
            name: "Muzeum Made in Poznań",
            logo: partnerLogo("uzup-muzeum-made-in-poznan.webp")
          },
          {
            name: "Poznańskie Muzeum Pyry",
            logo: partnerLogo("052-poznanskie-muzeum-pyry.webp")
          },
          {
            name: "Muzeum Historii Ubioru w Poznaniu",
            logo: partnerLogo("uzup-muzeum-historii-ubioru.webp")
          },
          {
            name: "Izba Pamięci PRL-u w Poznaniu"
          }
        ]
      }
    ]
  },
  {
    id: "instytucje-kultury-i-dziedzictwa",
    title: "Instytucje kultury i dziedzictwa",
    description: "Wspólnie z instytucjami kultury i dziedzictwa rozwijamy przedsięwzięcia poświęcone historii, literaturze, muzyce i pamięci o ludziach związanych z Poznaniem.",
    subgroups: [
      {
        title: null,
        partners: [
          {
            name: "Instytut Pamięci Narodowej – Komisja Ścigania Zbrodni przeciwko Narodowi Polskiemu",
            logo: partnerLogo("055-instytut-pamieci-narodowej-komisja-scigania-zbro.webp")
          },
          {
            name: "Instytut Dziedzictwa Narodowego",
            logo: partnerLogo("uzup-narodowy-instytut-dziedzictwa.webp")
          },
          {
            name: "Instytut Książki",
            logo: partnerLogo("057-instytut-ksiazki.webp")
          },
          {
            name: "Instytut Adama Mickiewicza",
            logo: partnerLogo("058-instytut-adama-mickiewicza.webp")
          },
          {
            name: "Instytut na rzecz Badań Literackich w Warszawie",
            logo: partnerLogo("uzup-instytut-badan-literackich.webp")
          },
          {
            name: "Filharmonia Poznańska im. Tadeusza Szeligowskiego",
            logo: partnerLogo("060-filharmonia-poznanska-im-tadeusza-szeligowskiego.webp")
          },
          {
            name: "Brama Poznania ICHOT – Interaktywne Centrum Historii Ostrowa Tumskiego (Poznańskie Centrum Dziedzictwa)",
            logo: partnerLogo("061-brama-poznania-ichot-interaktywne-centrum-histor.webp")
          },
          {
            name: "Centrum Szyfrów Enigma (Poznańskie Centrum Dziedzictwa)",
            logo: partnerLogo("062-centrum-szyfrow-enigma-poznanskie-centrum-dziedz.webp")
          }
        ]
      }
    ]
  },
  {
    id: "biblioteki-archiwa-i-repozytoria",
    title: "Biblioteki, archiwa i repozytoria",
    description: "Księgozbiory, dokumenty i fotografie pomagają odtwarzać dzieje miasta i jego mieszkańców. Biblioteki, archiwa i repozytoria są ważnymi partnerami pracy nad publikacjami i projektami historycznymi.",
    subgroups: [
      {
        title: "Biblioteki",
        partners: [
          {
            name: "Biblioteka Raczyńskich w Poznaniu",
            logo: partnerLogo("063-biblioteka-raczynskich-w-poznaniu.webp")
          },
          {
            name: "Biblioteka Uniwersytecka w Poznaniu",
            logo: partnerLogo("064-biblioteka-uniwersytecka-w-poznaniu.webp")
          },
          {
            name: "Polska Akademia Nauk Biblioteka Kórnicka",
            logo: partnerLogo("065-polska-akademia-nauk-biblioteka-kornicka.webp"),
            background: "#292c31"
          },
          {
            name: "Biblioteka Poznańskiego Towarzystwa Przyjaciół Nauk",
            logo: partnerLogo("uzup-biblioteka-ptpn.webp")
          }
        ]
      },
      {
        title: "Archiwa i repozytoria",
        partners: [
          {
            name: "Archiwum Państwowe w Poznaniu",
            logo: partnerLogo("067-archiwum-panstwowe-w-poznaniu.webp")
          },
          {
            name: "Archiwum Archidiecezjalne w Poznaniu",
            logo: partnerLogo("068-archiwum-archidiecezjalne-w-poznaniu.webp")
          },
          {
            name: "Archiwum Archidiecezjalne w Gnieźnie",
            logo: partnerLogo("uzup-archiwum-archidiecezjalne-gniezno.webp")
          },
          {
            name: "CYRYL – Cyfrowe Repozytorium Lokalne Poznań",
            logo: partnerLogo("070-cyryl-cyfrowe-repozytorium-lokalne-poznan.webp"),
            background: "#292c31"
          },
          {
            name: "Fundacja Generał Elżbiety Zawackiej – Archiwum i Muzeum Pomorskie Armii Krajowej oraz Wojskowej Służby Polek",
            logo: partnerLogo("071-fundacja-general-elzbiety-zawackiej-archiwum-i-m.webp")
          }
        ]
      }
    ]
  },
  {
    id: "ochrona-zabytkow",
    title: "Ochrona zabytków",
    description: "Współpraca z instytucjami i organizacjami ochrony zabytków wspiera troskę o materialne ślady przeszłości oraz o miejsca ważne dla pamięci miasta.",
    subgroups: [
      {
        title: null,
        partners: [
          {
            name: "Wojewódzki Urząd Ochrony Zabytków w Poznaniu – Wielkopolski Wojewódzki Konserwator Zabytków",
            logo: partnerLogo("072-wojewodzki-urzad-ochrony-zabytkow-w-poznaniu-wie.webp")
          },
          {
            name: "Powiatowy Konserwator Zabytków w Starostwie Powiatowym w Poznaniu",
            logo: partnerLogo("uzup-powiatowy-konserwator-zabytkow.webp")
          },
          {
            name: "Biuro Miejskiego Konserwatora Zabytków w Poznaniu",
            logo: partnerLogo("uzup-miejski-konserwator-zabytkow.webp")
          },
          {
            name: "Towarzystwo Opieki nad Zabytkami Oddział w Poznaniu",
            logo: media("tonz.jpeg")
          }
        ]
      }
    ]
  },
  {
    id: "edukacja-i-harcerstwo",
    title: "Edukacja i harcerstwo",
    description: "Z partnerami edukacyjnymi i harcerskimi przybliżamy historię młodym odbiorcom, rozwijamy ich zainteresowanie miastem i zachęcamy do aktywnego udziału w działaniach Fundacji.",
    subgroups: [
      {
        title: null,
        partners: [
          {
            name: "Kuratorium Oświaty w Poznaniu",
            logo: partnerLogo("uzup-kuratorium-oswiaty-poznan.webp")
          },
          {
            name: "Ośrodek Doskonalenia Nauczycieli w Poznaniu",
            logo: partnerLogo("077-osrodek-doskonalenia-nauczycieli-w-poznaniu.webp")
          },
          {
            name: "Zespół Szkół Handlowych im. Bohaterów Poznańskiego Czerwca ’56 w Poznaniu",
            logo: partnerLogo("078-zespol-szkol-handlowych-im-bohaterow-poznanskieg.webp")
          },
          {
            name: "Zespół Szkół im. Pogromców Enigmy w Luboniu",
            logo: partnerLogo("uzup-zs-pogromcow-enigmy-lubon.webp")
          },
          {
            name: "Szkoła Podstawowa im. Marii Dąbrowskiej w Kaźmierzu",
            logo: partnerLogo("080-szkola-podstawowa-im-marii-dabrowskiej-w-kazmier.webp")
          },
          {
            name: "Związek Harcerstwa Polskiego",
            logo: partnerLogo("081-zwiazek-harcerstwa-polskiego.webp")
          },
          {
            name: "Związek Harcerstwa Rzeczypospolitej",
            logo: partnerLogo("082-zwiazek-harcerstwa-rzeczypospolitej.webp")
          },
          {
            name: "Fundacja Projekty Edukacyjne",
            logo: partnerLogo("083-fundacja-projekty-edukacyjne.webp"),
            background: "#292c31"
          }
        ]
      }
    ]
  },
  {
    id: "partnerzy-medyczni-i-ratowniczy",
    title: "Partnerzy medyczni i ratowniczy",
    description: "Partnerzy medyczni, humanitarni i środowiska związane ze szpitalami pomagają przybliżać historię ratowania życia oraz pamięć o lekarzach i osobach niosących pomoc.",
    subgroups: [
      {
        title: null,
        partners: [
          {
            name: "Szpital Miejski im. Franciszka Raszei w Poznaniu",
            logo: partnerLogo("084-szpital-miejski-im-franciszka-raszei-w-poznaniu.webp")
          },
          {
            name: "Szpital Kliniczny Przemienienia Pańskiego Uniwersytetu Medycznego im. Karola Marcinkowskiego w Poznaniu (obecnie w strukturach Uniwersyteckiego Szpitala Klinicznego w Poznaniu)",
            logo: partnerLogo("085-szpital-kliniczny-przemienienia-panskiego-uniwer.webp")
          },
          {
            name: "Polski Czerwony Krzyż",
            logo: partnerLogo("086-polski-czerwony-krzyz.webp")
          },
          {
            name: "Towarzystwo Przyjaciół Szpitala im. Franciszka Raszei w Poznaniu",
            logo: partnerLogo("uzup-towarzystwo-przyjaciol-szpitala-raszei.webp")
          },
          {
            name: "Fundacja Rozwoju Edukacji i Turystyki Rysy",
            logo: partnerLogo("088-fundacja-rozwoju-edukacji-i-turystyki-rysy.webp")
          }
        ]
      }
    ]
  },
  {
    id: "wojsko",
    title: "Wojsko",
    description: "Współpraca z wojskiem wzbogaca działania związane z pamięcią historyczną, edukacją i organizacją wydarzeń.",
    subgroups: [
      {
        title: null,
        partners: [
          {
            name: "12 Wielkopolska Brygada Obrony Terytorialnej im. gen. bryg. Stanisława Taczaka",
            logo: partnerLogo("089-12-wielkopolska-brygada-obrony-terytorialnej-im.webp")
          }
        ]
      }
    ]
  },
  {
    id: "organizacje-spoleczne-i-srodowiska-pamieci",
    title: "Organizacje społeczne i środowiska pamięci",
    description: "Stowarzyszenia, fundacje i środowiska społeczne wnoszą wiedzę, doświadczenie oraz zaangażowanie. Dzięki nim nasze projekty łączą różne pokolenia i kręgi mieszkańców.",
    subgroups: [
      {
        title: "Organizacje historyczne i kombatanckie",
        partners: [
          {
            name: "Światowy Związek Żołnierzy Armii Krajowej",
            logo: partnerLogo("090-swiatowy-zwiazek-zolnierzy-armii-krajowej.webp")
          },
          {
            name: "Towarzystwo Pamięci Powstania Wielkopolskiego 1918/1919",
            logo: partnerLogo("091-towarzystwo-pamieci-powstania-wielkopolskiego-19.webp")
          },
          {
            name: "Stowarzyszenie „Poznański Czerwiec ’56”"
          },
          {
            name: "Związek Powstańców Poznańskiego Czerwca 1956 „Niepokonani”"
          },
          {
            name: "Związek Kombatantów i Uczestników Powstania Poznańskiego Czerwca 1956 r."
          },
          {
            name: "Stowarzyszenie Odra–Niemen",
            logo: partnerLogo("095-stowarzyszenie-odraniemen.webp")
          },
          {
            name: "Fundacja Nie zapomnij o nas",
            logo: partnerLogo("096-fundacja-nie-zapomnij-o-nas.webp")
          },
          {
            name: "Fundacja Pokolenia Kolumbów",
            logo: partnerLogo("097-fundacja-pokolenia-kolumbow.webp")
          },
          {
            name: "Fundacja Orła Białego",
            logo: partnerLogo("uzup-fundacja-orla-bialego.webp")
          },
          {
            name: "Wielkopolskie Towarzystwo Genealogiczne „Gniazdo”",
            logo: partnerLogo("099-wielkopolskie-towarzystwo-genealogiczne-gniazdo.webp")
          }
        ]
      },
      {
        title: "Organizacje regionalne, społeczne i kulturalne",
        partners: [
          {
            name: "Towarzystwo Miłośników Miasta Poznania im. Cyryla Ratajskiego",
            logo: media("tmmp-logo.jpg")
          },
          {
            name: "Towarzystwo im. Hipolita Cegielskiego",
            logo: partnerLogo("101-towarzystwo-im-hipolita-cegielskiego.webp")
          },
          {
            name: "Wielkopolskie Towarzystwo Kulturalne w Poznaniu",
            logo: partnerLogo("102-wielkopolskie-towarzystwo-kulturalne-w-poznaniu.webp")
          },
          {
            name: "Stowarzyszenie „Unia Wielkopolan”",
            logo: partnerLogo("103-stowarzyszenie-unia-wielkopolan.webp")
          },
          {
            name: "Fundacja Zakłady Kórnickie",
            logo: partnerLogo("104-fundacja-zaklady-kornickie.webp")
          },
          {
            name: "Fundacja Akademii Lubrańskiego",
            logo: partnerLogo("105-fundacja-akademii-lubranskiego.webp")
          },
          {
            name: "Wielkopolski Kongres Kobiet",
            logo: partnerLogo("106-stowarzyszenie-kongres-kobiet.webp")
          },
          {
            name: "Fundacja Instytut Poznański",
            logo: partnerLogo("107-fundacja-instytut-poznanski.webp")
          },
          {
            name: "Fundacja Pro Posnania",
            logo: partnerLogo("108-fundacja-pro-posnania.webp")
          },
          {
            name: "Fundacja Willa wśród róż",
            logo: partnerLogo("uzup-fundacja-willa-wsrod-roz.webp")
          },
          {
            name: "Fundacja Artystyczno-Edukacyjna „Puenta”",
            logo: partnerLogo("uzup-puenta.webp")
          },
          {
            name: "Fundacja Animacji Marzeń",
            logo: partnerLogo("uzup-fundacja-animacji-marzen.webp"),
            background: "#66b130"
          },
          {
            name: "Fundacja Świat Głuchych",
            logo: partnerLogo("112-fundacja-swiat-gluchych.webp")
          },
          {
            name: "Fundacja Chce się żyć",
            logo: partnerLogo("113-fundacja-chce-sie-zyc.webp")
          },
          {
            name: "Fundacja Wspierania Praworządności"
          }
        ]
      },
      {
        title: "Organizacje zawodowe i krajoznawcze",
        partners: [
          {
            name: "Polskie Towarzystwo Wydawców Książek",
            logo: partnerLogo("115-polskie-towarzystwo-wydawcow-ksiazek.webp")
          },
          {
            name: "Federacja Stowarzyszeń Naukowo-Technicznych NOT – Rada w Poznaniu",
            logo: partnerLogo("uzup-not-poznan.webp")
          },
          {
            name: "Stowarzyszenie Elektryków Polskich Oddział Poznański im. prof. Józefa Węglarza",
            logo: partnerLogo("117-stowarzyszenie-elektrykow-polskich-oddzial-pozna.webp")
          },
          {
            name: "Koło Przewodników Polskiego Towarzystwa Turystyczno-Krajoznawczego im. Marcelego Mottego przy Oddziale Poznańskim PTTK",
            logo: partnerLogo("uzup-kolo-przewodnikow-pttk.webp")
          }
        ]
      }
    ]
  },
  {
    id: "rekonstrukcja-i-edukacja-historyczna",
    title: "Rekonstrukcja i edukacja historyczna",
    description: "Rekonstruktorzy i edukatorzy historyczni pomagają przybliżać przeszłość poprzez stroje, opowieści, pokazy i działania angażujące uczestników.",
    subgroups: [
      {
        title: null,
        partners: [
          {
            name: "Stowarzyszenie Miłośników Historii HUZAR w Kaźmierzu",
            logo: partnerLogo("uzup-huzar-kazmierz.webp")
          },
          {
            name: "Studio Historyczne Huzar – Łukasz Gładysiak",
            logo: partnerLogo("120-studio-historyczne-huzar-lukasz-gladysiak.webp")
          },
          {
            name: "Stowarzyszenie Parva Patria",
            logo: partnerLogo("121-stowarzyszenie-parva-patria.webp")
          },
          {
            name: "Fundacja Wojskowości Polskiej"
          },
          {
            name: "Grupa Rekonstrukcji Historycznej Walhalla"
          }
        ]
      }
    ]
  },
  {
    id: "partnerzy-wydawniczy-artystyczni-i-produkcyjni",
    title: "Partnerzy wydawniczy, artystyczni i produkcyjni",
    description: "Razem nadajemy poznańskim opowieściom formę, do której można wracać: książki, mapy, nagrania, filmy, ilustracje i przedstawienia.",
    subgroups: [
      {
        title: "Wydawnictwa i drukarnie",
        partners: [
          {
            name: "Wydawnictwo „Druga Strona Poznania” sp. z o.o.",
            logo: partnerLogo("uzup-druga-strona-poznania.webp")
          },
          {
            name: "Wydawnictwo Miejskie Posnania",
            logo: partnerLogo("uzup-wydawnictwo-miejskie-posnania.webp")
          },
          {
            name: "Drukarnia ABEDIK sp. z o. o.",
            logo: partnerLogo("126-drukarnia-abedik-sp-z-o-o.webp")
          },
          {
            name: "Drukarnia Perfect s.c.",
            logo: partnerLogo("uzup-drukarnia-perfekt.webp")
          },
          {
            name: "Miastomedia Jerzy Erenz"
          }
        ]
      },
      {
        title: "Twórcy, teatr i produkcja",
        partners: [
          {
            name: "Teatr Fuzja",
            logo: partnerLogo("uzup-teatr-fuzja.webp"),
            background: "#000000"
          },
          {
            name: "Teatr Rozterka",
            logo: partnerLogo("uzup-teatr-rozterka.webp"),
            background: "#731110"
          },
          {
            name: "Spółdzielnia Teatralna",
            logo: partnerLogo("uzup-spoldzielnia-teatralna.webp")
          },
          {
            name: "Stowarzyszenie VTOPIA",
            logo: partnerLogo("uzup-vtopia.webp"),
            background: "#2c3185"
          },
          {
            name: "Studenckie Koło Literacko-Teatralne „Dygresja” przy Wydziale Studiów Edukacyjnych Uniwersytetu im. Adama Mickiewicza w Poznaniu",
            logo: partnerLogo("133-studenckie-kolo-literacko-teatralne-dygresja-prz.webp")
          },
          {
            name: "YAF – Justyna Szadkowska",
            logo: partnerLogo("134-yaf-justyna-szadkowska.webp")
          },
          {
            name: "Zajafka – Jakub Woźniak",
            logo: partnerLogo("135-zajafka-jakub-wozniak.webp")
          },
          {
            name: "Pyrkon TV",
            logo: partnerLogo("uzup-pyrkon.webp")
          }
        ]
      }
    ]
  },
  {
    id: "kluby-sportowe-i-srodowiska-kibicowskie",
    title: "Kluby sportowe i środowiska kibicowskie",
    description: "Kluby sportowe i środowiska kibicowskie są częścią tożsamości Poznania. Ich udział poszerza krąg odbiorców naszych inicjatyw i wzmacnia więź z miastem.",
    subgroups: [
      {
        title: null,
        partners: [
          {
            name: "KKS Lech Poznań S.A.",
            logo: partnerLogo("137-kks-lech-poznan-s-a.webp")
          },
          {
            name: "Warta Poznań S.A.",
            logo: partnerLogo("uzup-warta-poznan.webp")
          },
          {
            name: "Stowarzyszenie Kibiców Kolejorz",
            logo: partnerLogo("139-stowarzyszenie-kibicow-kolejorz.webp")
          }
        ]
      }
    ]
  },
  {
    id: "media-i-partnerzy-komunikacyjni",
    title: "Media i partnerzy komunikacyjni",
    description: "Media pomagają naszym opowieściom docierać do mieszkańców: informują o wydarzeniach, publikują teksty i udostępniają przestrzeń do rozmowy o Poznaniu.",
    subgroups: [
      {
        title: "Radio",
        partners: [
          {
            name: "Radio Poznań",
            logo: partnerLogo("140-radio-poznan.webp"),
            background: "#292c31"
          },
          {
            name: "MC Radio",
            logo: partnerLogo("141-mc-radio.webp")
          },
          {
            name: "Radio Emaus",
            logo: partnerLogo("142-radio-emaus.webp")
          },
          {
            name: "Radio Afera",
            logo: partnerLogo("143-radio-afera.webp")
          },
          {
            name: "Radio ESKA Poznań",
            logo: partnerLogo("144-radio-eska-poznan.webp")
          }
        ]
      },
      {
        title: "Telewizja",
        partners: [
          {
            name: "TVP3 Poznań",
            logo: partnerLogo("145-tvp3-poznan.webp")
          },
          {
            name: "TVP3 Warszawa",
            logo: partnerLogo("146-tvp3-warszawa.webp")
          },
          {
            name: "TVP Historia",
            logo: partnerLogo("147-tvp-historia.webp")
          },
          {
            name: "Telewizja WTK – Wielkopolska Telewizja Kablowa sp. z o.o.",
            logo: partnerLogo("148-telewizja-wtk-wielkopolska-telewizja-kablowa-sp.webp")
          },
          {
            name: "Swarzędzka Telewizja Kablowa",
            logo: partnerLogo("149-swarzedzka-telewizja-kablowa.webp")
          }
        ]
      },
      {
        title: "Prasa i czasopisma",
        partners: [
          {
            name: "Głos Wielkopolski",
            logo: partnerLogo("150-glos-wielkopolski.webp")
          },
          {
            name: "„IKS” – Poznański Informator Kulturalny, Sportowy i Turystyczny",
            logo: partnerLogo("uzup-iks.webp")
          },
          {
            name: "„Puls Poznania”",
            logo: partnerLogo("uzup-puls-poznania.webp")
          },
          {
            name: "„Uczyć lepiej” – czasopismo Ośrodka Doskonalenia Nauczycieli w Poznaniu",
            logo: partnerLogo("uzup-uczyc-lepiej.webp")
          },
          {
            name: "„Senioralny Poznań” – pismo Centrum Inicjatyw Senioralnych w Poznaniu",
            logo: partnerLogo("uzup-senioralni.webp")
          },
          {
            name: "„Sukces po poznańsku”",
            logo: partnerLogo("155-sukces-po-poznansku.webp")
          },
          {
            name: "„Kolej na Wielkopolskie” – magazyn pokładowy Kolei Wielkopolskich",
            logo: partnerLogo("uzup-kolej-na-wielkopolskie.webp")
          },
          {
            name: "„Nasza Wilda” – kwartalnik Fundacji Pro Posnania",
            logo: partnerLogo("uzup-nasza-wilda.webp")
          },
          {
            name: "„W zgodzie z Naturą” – kwartalnik, wydawca: Fundacja Pro Posnania",
            logo: partnerLogo("uzup-pro-posnania.webp")
          },
          {
            name: "„Nasza Historia”",
            logo: partnerLogo("uzup-nasza-historia.webp")
          }
        ]
      },
      {
        title: "Portale internetowe",
        partners: [
          {
            name: "epoznan.pl",
            logo: partnerLogo("160-epoznan-pl.webp")
          },
          {
            name: "miastopoznaj.pl",
            logo: partnerLogo("161-miastopoznaj-pl.webp")
          },
          {
            name: "tytus.pl"
          },
          {
            name: "historia.org"
          }
        ]
      }
    ]
  }
];

export const allPartners = partnerGroups.flatMap((group) =>
  group.subgroups.flatMap((subgroup) => subgroup.partners),
);

// Logotypy na stronie głównej (w tej kolejności).
const FEATURED = [
  "Miasto Poznań",
  "Samorząd Województwa Wielkopolskiego",
  "Ministerstwo Kultury i Dziedzictwa Narodowego",
  "Narodowy Instytut Wolności – Centrum Rozwoju Społeczeństwa Obywatelskiego",
  "Instytut Pamięci Narodowej – Komisja Ścigania Zbrodni przeciwko Narodowi Polskiemu",
  "Aquanet S.A.",
  "Międzynarodowe Targi Poznańskie sp. z o.o. (Grupa MTP)",
  "Miejskie Przedsiębiorstwo Komunikacyjne w Poznaniu sp. z o.o.",
  "Uniwersytet im. Adama Mickiewicza w Poznaniu",
  "Muzeum Powstania Warszawskiego",
  "Radio Poznań",
  "Koleje Wielkopolskie sp. z o.o.",
];

export const featuredPartners = FEATURED.map((name) =>
  allPartners.find((partner) => partner.name === name),
).filter((partner) => partner?.logo);
