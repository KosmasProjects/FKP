import React, { useState } from "react";
import {
  Box,
  HStack,
  Center,
  Container,
  Image,
  Grid,
  Spacer,
  Text,
  Flex,
} from "@chakra-ui/react";
import GridComponent from "../../components/GridComponent";
import TextGridComponent from "../../components/TextGridComponent";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Global, css } from "@emotion/react";
import { color } from "framer-motion";
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

export default function GridLiteracki() {
  const link =
  "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/literackiPoznanPawel.jpg";
  const [imageSrc, setImageSrc] = useState(link);

  const handleMouseEnter = (newImageSrc) => {
    setImageSrc(newImageSrc);
  };

  const handleMouseLeave = () => {
    setImageSrc(link);
  };

  const color = "teal";
  const gridItems = [
    {
      title: "Poznań literacki ",
      logo: "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/ROZWAZNI-ROMANTYCZNI_logo-pion_cmyk.svg",
      color: `${color}.400`,
      id: 1,
      hoverImage:
      "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/literackiPoznanPawel.jpg",
    },
    {
      title: "Poznań muzyczny ",
      logo: "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/WS'44_logo_CMYK_biel+czerw.svg",
      color: `${color}.500`,
      id: 2,
      hoverImage:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/007-Marcin-Rurarz-Fotografia-WB23.jpg",
    },
    {
      title: "Poznań targowy ",
      logo: "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/BIMBA-W-HISTORIE_logo-pion_rgb.png",
      color: `${color}.600`,
      id: 3,
      hoverImage:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/Bimba-w-historie.png",
    },
    {
      title: "Poznań kryminalny ",
      logo: "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/logopomniki.png",
      color: `${color}.700`,
      id: 7,
      hoverImage:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/Katedra PODPIS.jpg",
    },
    {
      title: "Poznań szpitalny ",
      logo: "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/logopomniki.png",
      color: `${color}.400`,
      id: 4,
      hoverImage:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/pomniki-stary-marych-T75_9128.jpg",
    },
    {
      title: "Poznań wodny ",
      logo: "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/ULICZNIK_POZNANSKI_logo-pion_CMYK.svg",
      color: `${color}.500`,
      id: 5,
      hoverImage:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/ULICZNIK_POZNANSKI_logo-poziom_CMYK.jpg",
    },
    {
      title: "Poznań kościelny ",
      color: `${color}.600`,
      id: 6,
      hoverImage:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/literackiPoznanPawel.jpg",
    },
    {
      title: "Poznań rogalowy ",
      color: `${color}.700`,
      id: 9,
      hoverImage:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/003. Włodarczyk 2018-01-04.jpg",
    },
  ];

  return (
    <>
      <Global styles={globalStyles} />
      <Center>
        <Container maxW={"1500px"} pb={"20px"}>
          <HStack justifyContent={"center"} alignItems={"start"} spacing={0}>
            <ReusableGrid initialImageSrc={link} gridItems={gridItems} />
          </HStack>
        </Container>
      </Center>
    </>
  );
}
