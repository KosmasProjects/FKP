import {
  Button,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
  VStack,
  Flex,
  Container,
  Box,
  Card,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { FaRegSmile } from "react-icons/fa"; // import the icon you want to use

export default function GridComponent({
  title,
  color,
  id,
  onMouseEnter,
  onMouseLeave,
  logo,
}) {
  return (
    <Card
      rounded={0}
      h={"100px"}
      w={"242px"}
      shadow={"1xl"}
      overflow={"hidden"}
      onClick={() => {
        console.log(id);
      }}
      fontSize={"20px"}
      backgroundColor={color}
      borderColor={"white"}
      borderWidth={"1px"}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      textColor={"white"}
      _hover={{
        backgroundColor: "white",
        textColor: "black",
        borderWidth: "3px",
        borderColor: color,
      }}
      transition={"0.3s"}
    >
      <Center h="100%" p={5}>
        <HStack spacing="5px" alignItems={"stretch"}>
          <Heading fontSize={"20px"}>{title}</Heading>
          <Image height={'50px'} src={logo} alt={title} fontSize={"10px"}/>{" "}
        </HStack>
      </Center>
    </Card>
  );
}
