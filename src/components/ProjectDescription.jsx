import {
  Container,
  Text,
  Center,
  HStack,
  Image,
  Stack,
  IconButton,
  Button,
  VStack,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function ProjectDescription({
  title,
  color,
  link,
  fblink,
  iglink,
  pagelink,
  ytlink,
}) {
  return (
    <Container maxW={"5xl"} pb={"20px"} pt={"60px"}>
      {/* <Center>
        <Text fontSize="4xl" fontWeight={"bold"} color={color} mb={5}>
          {title}
        </Text>
      </Center> */}
      <HStack alignContent={"start"} alignItems={"start"} spacing={"30px"}>
        <Image w={"50%"} alt={"Login Image"} objectFit={"cover"} src={link} />
        <Text fontSize="xl" textAlign="justify">
          Projekt „Fotograficzny Katalog Pomników Poznania” to inicjatywa,
          której celem jest stworzenie kompleksowego katalogu fotograficznego
          pomników, tablic i innych elementów architektonicznych znajdujących
          się na terenie Poznania. W ramach projektu powstaje strona
          internetowa, na której prezentowane są zdjęcia oraz informacje o
          poszczególnych obiektach. Wszystkie zdjęcia są dostępne na licencji
          Creative Commons, co oznacza, że można je wykorzystywać w dowolny
          sposób, pod warunkiem podania autora. Projekt jest realizowany przez
          grupę pasjonatów historii i fotografii, którzy chcą przyczynić się do
          upowszechnienia wiedzy o zabytkach Poznania.
        </Text>
      </HStack>
      <Center>
        <Text fontWeight={"bold"} fontSize={"20px"} color={color}>
          Social Media:
        </Text>
      </Center>
      <Center>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={8}
          pt={"20px"}
        >
          <IconButton
            bgColor={color}
            borderRadius={"full"}
            color={"white"}
            as="a"
            href={fblink}
            aria-label="Facebook"
            icon={<FaFacebook />}
          />
          <IconButton
            bgColor={color}
            borderRadius={"full"}
            color={"white"}
            as="a"
            href={iglink}
            aria-label="Instagram"
            icon={<FaInstagram />}
          />
          <IconButton
            bgColor={color}
            borderRadius={"full"}
            color={"white"}
            as="a"
            href={pagelink}
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
          />
          <IconButton
            bgColor={color}
            borderRadius={"full"}
            color={"white"}
            as="a"
            href={ytlink}
            aria-label="YouTube"
            icon={<FaYoutube />}
          />
        </Stack>
      </Center>
    </Container>
  );
}
