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

export default function GridBimba() {
  const link =
    "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/007-Marcin-Rurarz-Fotografia-WB23.jpg";
  const [imageSrc, setImageSrc] = useState(link);

  const handleMouseEnter = (newImageSrc) => {
    setImageSrc(newImageSrc);
  };

  const handleMouseLeave = () => {
    setImageSrc(link);
  };

  const color = "orange";

  return (
    <>
      <Global styles={globalStyles} />
      <Center>
        <Container maxW={"1500px"} pb={"20px"}>
          <HStack justifyContent={"center"} alignItems={"start"} spacing={0}>
            <Grid>
              <TextGridComponent title={"Programy historyczne"} />
              <GridComponent
                title={"Granatowicz"}
                logo={
                  "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/ROZWAZNI-ROMANTYCZNI_logo-pion_cmyk.svg"
                }
                color={`${color}.400`}
                id={1}
                onMouseEnter={() =>
                  handleMouseEnter(
                    "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/ROZWAZNI-ROMANTYCZNI_logo-poziom_cmyk.ai"
                  )
                }
                onMouseLeave={handleMouseLeave}
              />
              <GridComponent
                title={"Borys"}
                logo={
                  "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/WS'44_logo_CMYK_biel+czerw.svg"
                }
                id={2}
                color={`${color}.500`}
                onMouseEnter={() =>
                  handleMouseEnter(
                    "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/007-Marcin-Rurarz-Fotografia-WB23.jpg"
                  )
                }
                onMouseLeave={handleMouseLeave}
              />
              <GridComponent
                color={`${color}.600`}
                title={"osoba"}
                logo={
                  "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/BIMBA-W-HISTORIE_logo-pion_rgb.png"
                }
                id={3}
                onMouseEnter={() =>
                  handleMouseEnter(
                    "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/Bimba-w-historie.png"
                  )
                }
                onMouseLeave={handleMouseLeave}
              />
              <GridComponent
                title={"Osoba 2"}
                logo={
                  "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/logopomniki.png"
                }
                id={7}
                color={`${color}.700`}
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
                title={"Cos tam"}
                image={
                  "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/pomniki-stary-marych-T75_9128.jpg"
                }
                logo={
                  "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/logopomniki.png"
                }
                id={4}
                color={`${color}.400`}

                onMouseEnter={() =>
                  handleMouseEnter(
                    "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/pomniki-stary-marych-T75_9128.jpg"
                  )
                }
                onMouseLeave={handleMouseLeave}
              />
              <GridComponent
                title={"Lorem Ipsum"}
                logo={
                  "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/ULICZNIK_POZNANSKI_logo-pion_CMYK.svg"
                }
                propsite={"/FKP/mowia-o-nas"}
                buttonLabel={"Posłuchaj Podcastów"}
                color={`${color}.500`}

                id={5}
                onMouseEnter={() =>
                  handleMouseEnter(
                    "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/ULICZNIK_POZNANSKI_logo-poziom_CMYK.jpg"
                  )
                }
                onMouseLeave={handleMouseLeave}
              />
              <GridComponent
                title={"Nie wiem"}
                color={`${color}.600`}

                id={6}
                onMouseEnter={() =>
                  handleMouseEnter(
                    "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/literackiPoznanPawel.jpg"
                  )
                }
                onMouseLeave={handleMouseLeave}
              />
              <GridComponent
                title={"Wymysl"}
                color={`${color}.700`}

                id={9}
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
