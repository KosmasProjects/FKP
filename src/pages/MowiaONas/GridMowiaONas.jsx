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
import { useGetPlayers } from "./actions/useGetPlayers";

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

export default function GridMowiaONas() {
  const link =
    "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/poznanrzut.jpg";
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
                title={"Galeria patronów poznańskich ulic"}
                logo={
                  "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/ROZWAZNI-ROMANTYCZNI_logo-pion_cmyk.svg"
                }
                color={"gray.300"}
                id={1}
                onMouseEnter={() =>
                  handleMouseEnter(
                    "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/lazarz.jpg"
                  )
                }
                onMouseLeave={handleMouseLeave}
              />
              <GridComponent
                title={"Gawędy o patronach poznańskich ulic"}
                logo={
                  "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/WS'44_logo_CMYK_biel+czerw.svg"
                }
                color={"gray.400"}
                id={2}
                onMouseEnter={() =>
                  handleMouseEnter(
                    "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/jezyce.jpg"
                  )
                }
                onMouseLeave={handleMouseLeave}
              />
              <GridComponent
                title={"Wnioski nazewnicze – zrealizowane"}
                logo={
                  "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/BIMBA-W-HISTORIE_logo-pion_rgb.png"
                }
                color={"gray.500"}
                id={3}
                onMouseEnter={() =>
                  handleMouseEnter(
                    "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/wilda.jpg"
                  )
                }
                onMouseLeave={handleMouseLeave}
              />
              <GridComponent
                title={"Wnioski nazewnicze – w trakcie realizacji"}
                logo={
                  "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/logopomniki.png"
                }
                color={"gray.600"}
                id={7}
                onMouseEnter={() =>
                  handleMouseEnter(
                    "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/staremiasto.jpg"
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
              <TextGridComponent title={"tytuł"} />
              <GridComponent
                title={"Ulicznik poznański – seria książek "}
                image={
                  "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/pomniki-stary-marych-T75_9128.jpg"
                }
                logo={
                  "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/piatkowo.jpg"
                }
                color={"gray.300"}
                id={4}
                onMouseEnter={() =>
                  handleMouseEnter(
                    "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/piatkowo.jpg"
                  )
                }
                onMouseLeave={handleMouseLeave}
              />
              <GridComponent
                title={"Czerwcowe ulice – książki "}
                logo={
                  "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/ULICZNIK_POZNANSKI_logo-pion_CMYK.svg"
                }
                propsite={"/FKP/mowia-o-nas"}
                buttonLabel={"Posłuchaj Podcastów"}
                color={"gray.400"}
                id={5}
                onMouseEnter={() =>
                  handleMouseEnter(
                    "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/garbary.jpg"
                  )
                }
                onMouseLeave={handleMouseLeave}
              />
              <GridComponent
                title={"Podcasty o poznańskich ulicach "}
                color={"gray.500"}
                id={6}
                onMouseEnter={() =>
                  handleMouseEnter(
                    "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/ogrody.jpeg"
                  )
                }
                onMouseLeave={handleMouseLeave}
              />
              <GridComponent
                title={"Poznaj swojego patrona"}
                color={"gray.600"}
                id={9}
                onMouseEnter={() =>
                  handleMouseEnter(
                    "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/grunwald.jpeg")
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
