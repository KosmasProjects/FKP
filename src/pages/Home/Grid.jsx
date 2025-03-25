import {
  Grid,
  Container,
  Image,
  Flex,
  HStack,
  Center,
  Text,
  Box,
} from "@chakra-ui/react";
import GridComponent from "../../components/GridComponent";
import { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Global, css } from "@emotion/react";
import TextGridComponent from "../../components/TextGridComponent";
import ReusableGrid from "../../components/ReusableGrid";

const globalStyles = css`
  .fade-enter {
    opacity: 0.01;
    position: absolute;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 250ms ease-in;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 250ms ease-in;
  }
`;

const link =
  "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/12 października 1918 B&W (1).jpg";

const gridItems = [
  {
    title: "Rozważni i romantyczni",
    propsite: "/FKP/rozwazniiromantyczni",
    logo: "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/ROZWAZNI-ROMANTYCZNI_logo-pion_cmyk.svg",
    color: "blue.400",
    id: 1,
    hoverImage:
      "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/11 październia 1918 B&W.jpg",
  },
  {
    title: "Wspólna sprawa’44",
    propsite: "/FKP/ws44",
    logo: "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/WS'44_logo_CMYK_biel+czerw.svg",
    color: "orange.700",
    id: 2,
    hoverImage:
      "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/007-Marcin-Rurarz-Fotografia-WB23.jpg",
  },
  {
    title: "Bimbą w historię",
    propsite: "/FKP/bimbawhistorie",
    logo: "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/BIMBA-W-HISTORIE_logo-pion_rgb.png",
    color: "orange.400",
    id: 3,
    hoverImage:
      "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/Bimba-w-historie.png",
  },
  {
    title: "Poznańskie legendy",
    propsite: "/FKP/poznanskielegendy",
    logo: "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/logopomniki.png",
    color: "green.600",
    id: 7,
    hoverImage:
      "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/Katedra PODPIS.jpg",
  },
  {
    title: "Pomniki Poznania",
    propsite: "/FKP/pomnikipoznania",
    logo: "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/logopomniki.png",
    color: "teal.400",
    id: 4,
    hoverImage:
      "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/pomniki-stary-marych-T75_9128.jpg",
  },
  {
    title: "Ulicznik poznański",
    propsite: "/FKP/ulicznikpoznanski",
    logo: "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/ULICZNIK_POZNANSKI_logo-pion_CMYK.svg",
    color: "gray.400",
    id: 5,
    hoverImage:
      "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/Po_546_1_0434.jpg",
  },
  {
    title: "Poznańskie Opowieści",
    propsite: "/FKP/literackipoznan",
    color: "purple.400",
    logo: "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/logopomniki.png",
    id: 6,
    hoverImage:
      "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/literackiPoznanPawel.jpg",
  },
  {
    title: "Herstoria warta Poznania",
    propsite: "/FKP/herstoriawartapoznania",
    logo: "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/HERSTORIE_logo-pion_CMYK.svg",
    color: "pink.400",
    id: 9,
    hoverImage:
      "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/003. Włodarczyk 2018-01-04.jpg",
  },
];

export default function MyGrid() {
  const [imageSrc, setImageSrc] = useState(link);

  const handleMouseEnter = (newImageSrc) => {
    setImageSrc(newImageSrc);
  };

  const handleMouseLeave = () => {
    setImageSrc(link);
  };

  return (
    <>
      <Global styles={globalStyles} />
      <Center>
        <Container maxW={"1500px"} pb={"20px"}>
          <HStack justifyContent={"center"} alignItems={"start"} spacing={0}>
            <ReusableGrid initialImageSrc={imageSrc} gridItems={gridItems} isMainPage={'true'} />
          </HStack>
        </Container>
      </Center>
    </>
  );
}
