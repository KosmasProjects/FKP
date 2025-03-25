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
    <Container maxW={"5xl"} pb={"100px"} pt={"60px"}>
      {/* <Center>
        <Text fontSize="4xl" fontWeight={"bold"} color={color} mb={5}>
          {title}
        </Text>
      </Center> */}
      <HStack alignContent={"start"} alignItems={"start"} spacing={"30px"}>
        <Image w={"50%"} alt={"Login Image"} objectFit={"cover"} src={link} />
        <Text fontSize="xl" textAlign="justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </HStack>
      <Container h={'40px'}></Container>

      <Center>
        <Text fontWeight={"bold"} pt={"20px"} fontSize={"20px"} color={color}>
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
