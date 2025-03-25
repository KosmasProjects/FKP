import {
    Grid,
    Container,
    Image,
    HStack,
    Center,
    Box,
} from "@chakra-ui/react";
import GridComponent from "./GridComponent";
import { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Global, css } from "@emotion/react";
import TextGridComponent from "./TextGridComponent";

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

const ReusableGrid = ({ initialImageSrc, gridItems, isMainPage }) => {
    const [imageSrc, setImageSrc] = useState(initialImageSrc);

    const handleMouseEnter = (newImageSrc) => {
        setImageSrc(newImageSrc);
    };

    const handleMouseLeave = () => {
        setImageSrc(initialImageSrc);
    };

    // Split the gridItems into two halves
    const midIndex = Math.ceil(gridItems.length / 2);
    const leftItems = gridItems.slice(0, midIndex);
    const rightItems = gridItems.slice(midIndex);

    return (
        <>
            <Global styles={globalStyles} />
            <Center>
                <Container maxW={"1500px"} pb={"20px"}>
                    <HStack justifyContent={"center"} alignItems={"start"} spacing={0}>
                        <Grid>
                            <TextGridComponent title={"Programy historyczne"} />
                            {leftItems.map((item, index) => (
                                <GridComponent
                                    key={index}
                                    isMainPage={isMainPage}
                                    title={item.title}
                                    propsite={item.propsite}
                                    logo={item.logo}
                                    color={item.color}
                                    id={item.id}
                                    onMouseEnter={() => handleMouseEnter(item.hoverImage)}
                                    onMouseLeave={handleMouseLeave}
                                />
                            ))}
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
                            <TextGridComponent title={"Programy miejskie"} />
                            {rightItems.map((item, index) => (
                                <GridComponent
                                    key={index}
                                    isMainPage={isMainPage}
                                    title={item.title}
                                    propsite={item.propsite}
                                    logo={item.logo}
                                    color={item.color}
                                    id={item.id}
                                    onMouseEnter={() => handleMouseEnter(item.hoverImage)}
                                    onMouseLeave={handleMouseLeave}
                                />
                            ))}
                        </Grid>
                    </HStack>
                </Container>
            </Center>
        </>
    );
};

export default ReusableGrid;