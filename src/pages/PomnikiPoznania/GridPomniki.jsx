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
import GridComponent from "../Home/GridComponent";
import TextGridComponent from "../Home/TextGridComponent";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Global, css } from "@emotion/react";

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

export default function GridPomniki() {
  const link =
    "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/007-Marcin-Rurarz-Fotografia-WB23.jpg";
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
            <Grid>
              <TextGridComponent title={"Programy historyczne"} />
              <GridComponent
                title={"Pomniki Historyczne"}
                logo={
                  "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/ROZWAZNI-ROMANTYCZNI_logo-pion_cmyk.svg"
                }
                color={"teal.700"}
                id={1}
                onMouseEnter={() =>
                  handleMouseEnter(
                    "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/ROZWAZNI-ROMANTYCZNI_logo-poziom_cmyk.ai"
                  )
                }
                onMouseLeave={handleMouseLeave}
              />
              <GridComponent
                title={"Kamienie Pamięci"}
                logo={
                  "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/WS'44_logo_CMYK_biel+czerw.svg"
                }
                color={"teal.600"}
                id={2}
                onMouseEnter={() =>
                  handleMouseEnter(
                    "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/007-Marcin-Rurarz-Fotografia-WB23.jpg"
                  )
                }
                onMouseLeave={handleMouseLeave}
              />
              <GridComponent
                title={"Tablice Pamięci"}
                logo={
                  "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/BIMBA-W-HISTORIE_logo-pion_rgb.png"
                }
                color={"teal.500"}
                id={3}
                onMouseEnter={() =>
                  handleMouseEnter(
                    "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/Bimba-w-historie.png"
                  )
                }
                onMouseLeave={handleMouseLeave}
              />
              <GridComponent
                title={"Kobiety na Pomnikach"}
                logo={
                  "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/logopomniki.png"
                }
                color={"teal.400"}
                id={7}
                onMouseEnter={() =>
                  handleMouseEnter(
                    "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/Katedra PODPIS.jpg"
                  )
                }
                onMouseLeave={handleMouseLeave}
              />
            </Grid>
            <Box
              position="relative"
              height="440px"
              width="700px"
              p={0}
              m={0}
              margin={0}
              padding={0}
              backgroundColor="white.900"
              border="1px solid white"
            >
              <TransitionGroup>
                <CSSTransition key={imageSrc} timeout={500} classNames="fade">
                  <Box
                    as="div"
                    position="absolute"
                    width="100%"
                    height="100%"
                    margin={0}
                    padding={0}
                  >
                    <Image
                      h="100%"
                      w="100%"
                      src={imageSrc}
                      alt="Example"
                      objectFit={"contain"}
                    />
                  </Box>
                </CSSTransition>
              </TransitionGroup>
            </Box>

            <Grid>
              <TextGridComponent title={"Piątkowo"} />
              <GridComponent
                title={"Monumenty"}
                image={
                  "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/pomniki-stary-marych-T75_9128.jpg"
                }
                logo={
                  "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/logopomniki.png"
                }
                id={4}
                onMouseEnter={() =>
                  handleMouseEnter(
                    "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/pomniki-stary-marych-T75_9128.jpg"
                  )
                }
                color={"teal.700"}
                onMouseLeave={handleMouseLeave}
              />
              <GridComponent
                title={"Pomniki Patriotyczne"}
                logo={
                  "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/ULICZNIK_POZNANSKI_logo-pion_CMYK.svg"
                }
                color={"teal.600"}
                propsite={"/FKP/"}
                buttonLabel={"Posłuchaj Podcastów"}
                id={5}
                onMouseEnter={() =>
                  handleMouseEnter(
                    "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/ULICZNIK_POZNANSKI_logo-poziom_CMYK.jpg"
                  )
                }
                onMouseLeave={handleMouseLeave}
              />
              <GridComponent
                color={"teal.500"}
                title={"Nasze Tablice"}
                id={6}
                onMouseEnter={() =>
                  handleMouseEnter(
                    "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/literackiPoznanPawel.jpg"
                  )
                }
                onMouseLeave={handleMouseLeave}
              />
              <GridComponent
                title={"Nasze Pomniki"}
                id={9}
                color={"teal.400"}
                onMouseEnter={() =>
                  handleMouseEnter(
                    "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/003. Włodarczyk 2018-01-04.jpg"
                  )
                }
                onMouseLeave={handleMouseLeave}
              />
            </Grid>
          </HStack>
        </Container>
      </Center>
    </>
  );
}
