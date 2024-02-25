
import {
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Header() {
  return (
    <Container maxW={{ base: "full", md: "5xl" }}>
      <Stack
        minH={"100vh"}
        w={{ base: "full", md: "5xl" }}
        direction={{ base: "column", md: "row" }}
        justifyContent={"center"}
      >
        <Flex p={8} flex={1} align={"start"} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"100%"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: useBreakpointValue({ base: "20%", md: "30%" }),
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "blue.400",
                  zIndex: -1,
                }}
              >
                Fundacja
              </Text>
              <br />
              <Text color={"blue.400"} as={"span"}>
                Kochania Poznania
              </Text>
            </Heading>
            <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tristique diam in augue sodales ullamcorper. Donec tincidunt hendrerit diam aliquet tincidunt. Cras libero massa, scelerisque vitae leo vel, dapibus cursus nisl. In eget blandit tellus. Cras in tellus vitae arcu varius egestas vel ac sem. Aenean sit amet lorem nec libero lacinia sagittis id sit amet risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin blandit mauris ante, a feugiat odio congue vestibulum. Maecenas tincidunt rutrum nunc, id lacinia eros mollis et. In nec faucibus augue. Cras ut nisl sit amet sapien consectetur aliquet. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus.
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Aktualności
              </Button>
              <Button rounded={"full"}>Wesprzyj nas</Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={
              "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
          />
        </Flex>
      </Stack>
    </Container>
  );
}
