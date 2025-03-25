import React from "react";
import { Container, Flex, Text, SimpleGrid, Image } from "@chakra-ui/react";
import PartnerImage from "./PartnerImage";

export default function Partnerzy() {
  return (
    <Flex direction="column" alignItems="center" justifyContent="center">
      <Container p={4} w={"10xl"} bg={"transparent"} my={4} rounded={"lg"}>
        <Text fontSize="4xl" fontWeight={"bold"} color={"blue.400"}>
          Partnerzy Fundacji
        </Text>
      </Container>
      <Container p={4} maxW={"10xl"} bg={"transparent"} my={4} rounded={"lg"}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        
        <PartnerImage src={"https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/1.png"} />
        <PartnerImage src={"https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/2.png"} />
        <PartnerImage src={"https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/3.png"} />
        <PartnerImage src={"https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/4.png"} />
        <PartnerImage src={"https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/5.png"} />
        <PartnerImage src={"https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/6.png"} />
        <PartnerImage src={"https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/7.png"} />
        <PartnerImage src={"https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/8.png"} />
        <PartnerImage src={"https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/9.png"} />
        <PartnerImage src={"https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/10.png"} />
        <PartnerImage src={"https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/11.png"} />
        <PartnerImage src={"https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/12.png"} />
        </SimpleGrid>
      </Container>
    </Flex>
  );
}
