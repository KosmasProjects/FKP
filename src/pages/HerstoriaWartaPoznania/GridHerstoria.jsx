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

export default function GridHerstoria() {
  const link =
  "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/003. Włodarczyk 2018-01-04.jpg";
  const [imageSrc, setImageSrc] = useState(link);

  const handleMouseEnter = (newImageSrc) => {
    setImageSrc(newImageSrc);
  };

  const handleMouseLeave = () => {
    setImageSrc(link);
  };
  const color = "purple";

  const gridItems = [
    {
      title: "Herstoria warta Poznania",
      logo: "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/ROZWAZNI-ROMANTYCZNI_logo-pion_cmyk.svg",
      color: `${color}.400`,
      id: 1,
      hoverImage:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/003. Włodarczyk 2018-01-04.jpg",
    },
    {
      title: "Poznańskie Literatki ",
      logo: "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/WS'44_logo_CMYK_biel+czerw.svg",
      color: `${color}.500`,
      id: 2,
      hoverImage:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/009. Aniela Tułodziecka 2018-01-04.jpg",
    },
    {
      title: "Poznanianki na cokołach ",
      logo: "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/BIMBA-W-HISTORIE_logo-pion_rgb.png",
      color: `${color}.600`,
      id: 3,
      hoverImage:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/017. Bibianna Moraczewska 2018-01-10.jpg",
    },
    {
      title: "Patronki poznańskich ulic",
      logo: "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/logopomniki.png",
      color: `${color}.700`,
      id: 7,
      hoverImage:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/018. Bogusława Kowalska 2018-01-12.jpg",
    },
    {
      title: "Poznanianki warte Poznania – album ",
      logo: "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/logopomniki.png",
      color: `${color}.400`,
      id: 4,
      hoverImage:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/020. Dagmara Nickel 2018-01-15.jpg",
    },
    {
      title: "Stulecie praw kobiet ",
      logo: "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/ULICZNIK_POZNANSKI_logo-pion_CMYK.svg",
      color: `${color}.500`,
      id: 5,
      hoverImage:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/036. Grażyna Kulczyk 2018-03-26.jpg",
    },
    {
      title: "Matki Chrzestne Powstania Wielkopolskiego ",
      color: `${color}.600`,
      id: 6,
      hoverImage:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/038. Hanna Banaszak 2018-01-29.jpg",
    },
    {
      title: "Trzy tramwajarki ",
      color: `${color}.700`,
      id: 9,
      hoverImage:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/047. Izabela Łukomska-Pyżalska 2018-01-14.jpg",
    },
  ];

  return (
    <>
      <Global styles={globalStyles} />
      <Center>
        <Container maxW={"1500px"} pb={"20px"}>
          <HStack justifyContent={"center"} alignItems={"start"} spacing={0}>
            <ReusableGrid initialImageSrc={link} gridItems={gridItems} />w
          </HStack>
        </Container>
      </Center>
    </>
  );
}
