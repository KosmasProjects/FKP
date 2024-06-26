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
  Spacer,
  Flex,
  Container,
  Box,
  Card,
  HStack,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function GridComponent({
  title,
  color,
  onMouseEnter,
  onMouseLeave,
  logo,
  propsite,
  isMainPage,
}) {
  // const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(propsite);
  };

  return (
    <>
      <Card
        onClick={handleClick}
        rounded={0}
        h={"100px"}
        w={"242px"}
        shadow={"1xl"}
        overflow={"hidden"}
        fontSize={"20px"}
        backgroundColor={color}
        borderColor={"white"}
        borderWidth={"1px"}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        textColor={"gray.100"}
        _hover={{
          backgroundColor: "white",
          textColor: "black",
          borderWidth: "3px",
          borderColor: color,
        }}
        transition={"0.3s"}
      >
        <HStack
          h={"100%"}
          spacing="5px"
          justifyContent={isMainPage ? "space-between" : "center"}
          alignItems={"center"}
          px={"18px"}
        >
          <Heading fontSize={"20px"}>{title}</Heading>
          {isMainPage && (
            <Image height={"60px"} src={logo} alt={title} fill={"wheat"} />
          )}
        </HStack>
      </Card>

      {/* <Modal isOpen={isOpen} onClose={onClose} size={"5xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader fontSize={"40px"}>
            <HStack w={"90%"}>
              <Text>{title}</Text>
              <Spacer />
              <Image h={"120px"} src={logo} alt></Image>
            </HStack>
          </ModalHeader>

          <ModalBody py={"30px"} bgColor={"gray.100"}>
            <VStack>
              <VStack bgColor={"white"} w={"full"}></VStack>
              <Center>
                <HStack>
                  <Image h={"200px"} src={image} alt></Image>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Text>
                </HStack>
              </Center>
            </VStack>
                  <Button colorScheme="blue" m={2} onClick={handleClick} >{buttonLabel}</Button>
          </ModalBody>
        </ModalContent>
      </Modal> */}
    </>
  );
}
