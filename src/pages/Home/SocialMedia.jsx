import {
  Box,
  VStack,
  Image,
  Text,
  Flex,
  Center,
  Modal,
  ModalOverlay,
  ModalContent,
  Stack,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Spacer,
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function Team() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    {
      name: "Paweł Cieliczko",
      image:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/DSC_7070.jpg",
      group: "Zarząd Fundacji Kochania Poznania",
      description:
        "Paweł Cieliczko - prezes zarządu Fundacji Kochania Poznania. Historyk, publicysta, autor książek, wykładowca, pasjonat historii Poznania i Wielkopolski.",
    },
    {
      name: "Elwira Fronczak",
      image:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/okladka_Czerwcowe ulice.jpg",
      group: "Stowarzyszenie Husaria",
      description:
        "Paweł Cieliczko - prezes zarządu Fundacji Kochania Poznania. Historyk, publicysta, autor książek, wykładowca, pasjonat historii Poznania i Wielkopolski.",
    },
    {
      name: "Katarzyna Słupianek-Cieliczko",
      image:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/okladka_Czerwcowe ulice.jpg",
      group: "Stowarzyszenie Husaria",
      description:
        "Paweł Cieliczko - prezes zarządu Fundacji Kochania Poznania. Historyk, publicysta, autor książek, wykładowca, pasjonat historii Poznania i Wielkopolski.",
    },
    {
      name: "Paweł Cieliczko",
      image:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/rekografiazeznakiem086.jpg",
      group: "Stowarzyszenie Husaria",
      description:
        "Paweł Cieliczko - prezes zarządu Fundacji Kochania Poznania. Historyk, publicysta, autor książek, wykładowca, pasjonat historii Poznania i Wielkopolski.",
    },
    {
      name: "Paweł Cieliczko",
      image:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/Fronczak.png",
      group: "Stowarzyszenie Husaria",
      description:
        "Paweł Cieliczko - prezes zarządu Fundacji Kochania Poznania. Historyk, publicysta, autor książek, wykładowca, pasjonat historii Poznania i Wielkopolski.",
    },
    {
      name: "Paweł Cieliczko",
      image:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/okladka_Czerwcowe ulice.jpg",
      group: "Stowarzyszenie Husaria",
      description:
        "Paweł Cieliczko - prezes zarządu Fundacji Kochania Poznania. Historyk, publicysta, autor książek, wykładowca, pasjonat historii Poznania i Wielkopolski.",
    },
    // Add more items here
  ];

  const handleBoxClick = (item) => {
    setSelectedItem(item);
    onOpen();
  };

  return (
    <Center>
      <Box
        maxW="100%"
        overflowX="scroll"
        overflowY="hidden"
        marginX={"50px"}
        p={"20px"}
        marginY={"20px"}
        backgroundColor={"blue.400"}
      >
        <Flex direction="row" spacing={10}>
          {items.map((item, index) => (
            <Box
              w={"270px"}
              p={5}
              onClick={() => handleBoxClick(item)}
              _hover={{
                cursor: "pointer",
                transform: "scale(1.05)",
                transition: "all 0.2s",
              }}
            >
              <VStack
                key={index}
                borderRadius={"5px"}
                bg="white"
                minH={"300px"}
                p={4}
                boxShadow="md"
                minW={"250px"}
              >
                <Image
                  mt={"10px"}
                  boxSize="150px"
                  minW={"150px"}
                  objectFit="cover"
                  src={item.image}
                  alt={item.name}
                  borderRadius="full" // make the image circular
                />
                <Text
                  textAlign={"center"}
                  fontWeight={"semi-bold"}
                  fontSize={"20px"}
                >
                  {item.name}
                </Text>
                <Text textAlign={"center"}>{item.group}</Text>
              </VStack>
            </Box>
          ))}
        </Flex>
      </Box>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={"3xl"}
        motionPreset="slideInBottom"
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={4}
              alignContent={"start"}
              p={5}
            >
              <Image
                boxSize="200px"
                objectFit="cover"
                src={selectedItem?.image}
                alt={selectedItem?.name}
                borderRadius="full"
              />
              <Spacer />
              <VStack w={"100%"} alignItems={"start"}>
                <Text fontSize={"2xl"} textAlign="center">
                  {selectedItem?.name}
                </Text>
                <Text fontWeight={"bold"}>{selectedItem?.group}</Text>
                <Text>{selectedItem?.description}</Text>
              </VStack>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Center>
  );
}
