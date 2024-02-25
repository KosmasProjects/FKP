import { Grid, Container, Image, Flex, HStack, Center, Text, Box } from "@chakra-ui/react";
import GridComponent from "./GridComponent";
import { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Global, css } from '@emotion/react';



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


export default function MyGrid() {
    const [imageSrc, setImageSrc] = useState('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');

    const handleMouseEnter = (newImageSrc) => {
        setImageSrc(newImageSrc);
    }

    const handleMouseLeave = () => {
        setImageSrc('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
    }

    return (
        <>
            <Global styles={globalStyles} />
            <Center>
                <Container maxW={'1500px'} py={'50px'} >
                    <Box>
                        <HStack mx={2} justifyContent={'space-between'} alignItems={'center'} spacing={0}>


                        </HStack>
                    </Box>

                    <HStack justifyContent={'center'} alignItems={'center'} spacing={0}>
                        <Grid>
                            <Text textAlign={'center'} fontSize={'2xl'} >Programy historyczne</Text>
                            <GridComponent title={"Rozważni i romantyczni"} color={"orange"} id={1} onMouseEnter={() => handleMouseEnter('https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')} onMouseLeave={handleMouseLeave} />
                            <GridComponent title={"Wspólna sprawa’44"} color={"yellow.700"} id={2} onMouseEnter={() => handleMouseEnter('https://www.shutterstock.com/shutterstock/photos/2265006343/display_1500/stock-photo-pendant-lights-hanging-on-ceiling-in-modern-kitchen-and-cushions-arranged-on-sofa-in-living-room-2265006343.jpg')} onMouseLeave={handleMouseLeave} />
                            <GridComponent title={"Bimbą w historię"} color={"blue.400"} id={3} onMouseEnter={() => handleMouseEnter('https://www.shutterstock.com/shutterstock/photos/168161747/display_1500/stock-photo-high-angle-view-of-an-artist-drawing-something-on-graphic-tablet-at-the-office-168161747.jpg')} onMouseLeave={handleMouseLeave} />
                        </Grid>
                        <Box position="relative" height="530px" width="900px" p={0} m={0} margin={0} padding={0} >
                            <TransitionGroup>
                                <CSSTransition
                                    key={imageSrc}
                                    timeout={500}
                                    classNames="fade"
                                >
                                    {/* Set the Image to be absolutely positioned */}
                                    <Box as="div" position="absolute" width="100%" height="100%" margin={0} padding={0}>
                                        <Image
                                            h="100%"
                                            w="100%"
                                            src={imageSrc}
                                            alt="Example"
                                        />
                                    </Box>
                                </CSSTransition>
                            </TransitionGroup>
                        </Box>

                        <Grid>
                            <Text textAlign={'center'} fontSize={'2xl'}>Programy miejskie</Text>
                            <GridComponent title={"Pomniki Poznania "} color={"teal.600"} id={4} onMouseEnter={() => handleMouseEnter('https://www.shutterstock.com/shutterstock/photos/2265006343/display_1500/stock-photo-pendant-lights-hanging-on-ceiling-in-modern-kitchen-and-cushions-arranged-on-sofa-in-living-room-2265006343.jpg')} onMouseLeave={handleMouseLeave} />
                            <GridComponent title={"Ulicznik poznański"} color={"purple.600"} id={5} onMouseEnter={() => handleMouseEnter('https://www.shutterstock.com/shutterstock/photos/168161747/display_1500/stock-photo-high-angle-view-of-an-artist-drawing-something-on-graphic-tablet-at-the-office-168161747.jpg')} onMouseLeave={handleMouseLeave} />
                            <GridComponent title={"Poznań wart Poznania"} color={"pink.600"} id={6} onMouseEnter={() => handleMouseEnter('https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')} onMouseLeave={handleMouseLeave} />
                        </Grid>
                    </HStack>
                    <Center p={0}> {/* Center the last grid */}
                        <Grid templateColumns={"repeat(3, 1fr)"}>
                            <GridComponent title={"Poznańskie legendy "} color={"green.600"} id={7} onMouseEnter={() => handleMouseEnter('https://www.shutterstock.com/shutterstock/photos/2265006343/display_1500/stock-photo-pendant-lights-hanging-on-ceiling-in-modern-kitchen-and-cushions-arranged-on-sofa-in-living-room-2265006343.jpg')} onMouseLeave={handleMouseLeave} />
                            <GridComponent title={"Literacki Poznań"} color={"orange.600"} id={8} onMouseEnter={() => handleMouseEnter('https://www.shutterstock.com/shutterstock/photos/168161747/display_1500/stock-photo-high-angle-view-of-an-artist-drawing-something-on-graphic-tablet-at-the-office-168161747.jpg')} onMouseLeave={handleMouseLeave} />
                            <GridComponent title={"Herstoria warta Poznania"} color={"blue.600"} id={9} onMouseEnter={() => handleMouseEnter('https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')} onMouseLeave={handleMouseLeave} />
                        </Grid>
                    </Center>
                    <Center>
                        <Text fontSize={'2xl'}>Poznańskie opowieści</Text>
                    </Center>
                </Container>
            </Center>
        </>
    );
}