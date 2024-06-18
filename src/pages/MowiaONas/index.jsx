import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Container, Flex, Text, Button } from "@chakra-ui/react";
import PlayerPage from "./PlayerPage"; // import PlayerPage

export default function TalkingAboutUs() {
  return (
    <Container maxW={"5xl"} pb={'50px'}>
      <Flex direction="column" alignItems="start" justifyContent="start" >
        <Container p={4} maxW={'5xl'} bg={'transparent'} my={4} rounded={'lg'}>
          <Text fontSize="4xl" fontWeight={'bold'} color={"blue.400"} >Uliczne Podcasty</Text>
          <Text fontSize="2xl" color={"blue.400"}>Mowia o nas </Text>
          <Button as={Link} to="player/1" colorScheme="blue" m={2}>Ulice Poznania - Odcinek 1</Button>
          <Button as={Link} to="player/2" colorScheme="blue" m={2}>Ulice Poznania - Odcinek 2</Button>
          <Button as={Link} to="player/3" colorScheme="blue" m={2}>Ulice Poznania - Odcinek 3</Button>
          <Button as={Link} to="player/6" colorScheme="blue" m={2}>Poznań rzeczny</Button>
          <Button as={Link} to="player/7" colorScheme="blue" m={2}>Poznań wyspowy</Button>
          <Button as={Link} to="player/4" colorScheme="blue" m={2}>Ulice Poznania - Odcinek 6</Button>
          <Button as={Link} to="player/5" colorScheme="blue" m={2}>Ulice Poznania - Odcinek 7</Button>
        </Container>
      </Flex>
      <Routes>
        <Route path="player/:playerId" element={<PlayerPage />} />
      </Routes>
    </Container>
  );
}