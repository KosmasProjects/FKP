import React from "react";
import { Container, Flex, Text, Card, HStack, Spacer } from "@chakra-ui/react";
import Player from "./Player";

export default function TalkingAboutUs() {
  return (
    <>
      <Container maxW={"5xl"} pb={'50px'}>
      <Flex direction="column" alignItems="start" justifyContent="start" >
                <Container p={4} maxW={'5xl'} bg={'transparent'} my={4} rounded={'lg'}>
                        <Text fontSize="4xl" fontWeight={'bold'} color={"blue.400"} >Słuchowiska Radiowe</Text>
                        <Text fontSize="2xl" color={"blue.400"}>Mowia o nas </Text>
                </Container>
        </Flex>
      <Player title={'Ulice Poznania'} description={'lorem ipsum'} date={'01-02-2024'} radioName={'Radio Poznan'} link={'https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/Ulice_09.06.24.mp3'}/>
      <Player title={'Ulice Poznania'} description={'lorem ipsum'} date={'01-02-2024'} radioName={'Radio Poznan'} link={'https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/Ulice_Poznania_05.05.mp3'}/>
      <Player title={'Ulice Poznania'} description={'lorem ipsum'} date={'01-02-2024'} radioName={'Radio Poznan'} link={'https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/Ulice_Poznania_16.06.mp3'}/>
      <Player title={'Ulice Poznania'} description={'lorem ipsum'} date={'01-02-2024'} radioName={'Radio Poznan'} link={'https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/Ulice_Poznania_21.04.mp3'}/>
      <Player title={'Ulice Poznania'} description={'lorem ipsum'} date={'01-02-2024'} radioName={'Radio Poznan'} link={'https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/Ulice_Poznania_28.04.mp3'}/>
      <Player title={'Ulice Poznania'} description={'lorem ipsum'} date={'01-02-2024'} radioName={'Radio Poznan'} link={'https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/Historia_Żywa_-_Poznań_rzeczny.mp3'}/>
      <Player title={'Ulice Poznania'} description={'lorem ipsum'} date={'01-02-2024'} radioName={'Radio Poznan'} link={'https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/Historia_żywa_-_Poznań_wyspowy.mp3'}/>
      <Player title={'Ulice Poznania'} description={'lorem ipsum'} date={'01-02-2024'} radioName={'Radio Poznan'} link={'https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/Paweł_Cieliczko.mp3'}/>
      </Container>
      
    </>
  );
}
