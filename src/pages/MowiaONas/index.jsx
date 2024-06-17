import React from "react";
import { Container, Flex, Text } from "@chakra-ui/react";

export default function TalkingAboutUs() {
  return (
    <>
      <Container maxW={"5xl"} >
      <Flex direction="column" alignItems="center" justifyContent="center" >
                <Container p={4} w={'5xl'} bg={'transparent'} my={4} rounded={'lg'}>
                        <Text fontSize="4xl" fontWeight={'bold'} color={"blue.400"} >Kontakt</Text>
                        <Text fontSize="2xl" color={"blue.400"}>Mowia o nas </Text>
                </Container>
        </Flex>
      </Container>
      ,
    </>
  );
}
