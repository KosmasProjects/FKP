import React from "react";
import ContactUs from "./Contact";
import { Container, Flex, Text } from "@chakra-ui/react";

export default function Contact() {
  return (
    <>
      <Container maxW={"5xl"} >
      <Flex direction="column" alignItems="center" justifyContent="center" >
                <Container p={4} w={'5xl'} bg={'transparent'} my={4} rounded={'lg'}>
                        <Text fontSize="4xl" fontWeight={'bold'} color={"blue.400"} >Kontakt</Text>
                        <Text fontSize="2xl" color={"blue.400"}>Skontaktuj się z nami </Text>
                </Container>
        </Flex>
        <ContactUs />
      </Container>
      ,
    </>
  );
}
