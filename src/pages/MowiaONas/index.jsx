import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Container, Flex, Text, Button, Center } from "@chakra-ui/react";
import PlayerPage from "./PlayerPage"; // import PlayerPage
import GridMowiaONas from "./GridMowiaONas";

export default function TalkingAboutUs() {
  return (
    <>
      <Center>
        <Text fontSize="4xl" fontWeight={"bold"} color={"blue.400"} mb={5}>
          Ulicznik Poznański
        </Text>
      </Center>
      <GridMowiaONas />
      <Container maxW={"5xl"} pb={"50px"}>
        <Flex direction="column" alignItems="start" justifyContent="start">
          <Container
            p={4}
            maxW={"5xl"}
            bg={"transparent"}
            my={4}
            rounded={"lg"}
          >
            <Text fontSize="4xl" fontWeight={"bold"} color={"blue.400"}>
              Uliczne Podcasty
            </Text>
            <Text fontSize="2xl" color={"blue.400"}>
              Mowia o nas{" "}
            </Text>
            <Button as={Link} to="player/1" colorScheme="blue" m={2}>
              Odcinek 1 - Ulice Poznania
            </Button>
            <Button as={Link} to="player/2" colorScheme="blue" m={2}>
              Odcinek 2 - Ulice Poznania
            </Button>
            <Button as={Link} to="player/3" colorScheme="blue" m={2}>
              Odcinek 3 - Ulice Poznania
            </Button>
            <Button as={Link} to="player/6" colorScheme="blue" m={2}>
              Odcinek 4 - Poznań rzeczny
            </Button>
            <Button as={Link} to="player/7" colorScheme="blue" m={2}>
              Odcinek 5 - Poznań wyspowy
            </Button>
            <Button as={Link} to="player/4" colorScheme="blue" m={2}>
              Odcinek 6 - Ulice Poznania
            </Button>
            <Button as={Link} to="player/5" colorScheme="blue" m={2}>
              Odcinek 7 - Ulice Poznania
            </Button>
          </Container>
        </Flex>
        <Routes>
          <Route path="player/:playerId" element={<PlayerPage />} />
        </Routes>
      </Container>
    </>
  );
}
