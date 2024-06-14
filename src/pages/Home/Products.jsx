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
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  HStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function Products() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState(null);

  const items = [
    {
      name: "Historie Doktora Granatowicza",
      autor: "Paweł Cieliczko",
      price: "19.99zł",
      image:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/SKipinan ko22020912400.png",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Historie Doktora Granatowicza",
      autor: "Paweł Cieliczko",
      price: "19.99zł",
      image:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/SKipinan ko22020912400.png",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Czerwcowe Ulice",
      price: "29.99zł",
      autor: "Paweł Cieliczko",
      image:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/okladka_Czerwcowe ulice.jpg",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Historia grupy MTP",
      price: "29.99zł",
      autor: "Paweł Cieliczko",
      image:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/MTP_okladka-eksponaty.pdf",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Czerwcowe Ulice",
      price: "29.99zł",
      autor: "Paweł Cieliczko",
      image:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/okladka_Czerwcowe ulice.jpg",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Czerwcowe Ulice",
      price: "29.99zł",
      autor: "Paweł Cieliczko",
      image:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/okladka_Czerwcowe ulice.jpg",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Czerwcowe Ulice",
      price: "29.99zł",
      autor: "Paweł Cieliczko",
      image:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/okladka_Czerwcowe ulice.jpg",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Czerwcowe Ulice",
      price: "29.99zł",
      autor: "Paweł Cieliczko",
      image:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/okladka_Czerwcowe ulice.jpg",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Czerwcowe Ulice",
      price: "29.99zł",
      autor: "Paweł Cieliczko",
      image:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/okladka_Czerwcowe ulice.jpg",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Historie Doktora Granatowicza",
      autor: "Paweł Cieliczko",
      price: "19.99zł",
      image:
        "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/SKipinan ko22020912400.png",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
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
        bgColor={"gray.300"}
      >
        <Flex direction="row" spacing={10}>
          {items.map((item, index) => (
            <Box
              p={5}
              key={index}
              onClick={() => handleBoxClick(item)}
              _hover={{
                cursor: "pointer",
                transform: "scale(1.05)",
                transition: "all 0.2s",
              }}
            >
              <VStack
                bg="gray.100"
                p={4}
                boxShadow="md"
                w={"200px"}
                h={"250px"}
              >
                <Image
                  boxSize="auto"
                  w={"full"}
                  h={"120px"}
                  objectFit="contain"
                  src={item.image}
                  alt={item.name}
                />
                <Text textAlign={"center"} fontSize={"18px"}>
                  {item.name}
                </Text>
                <Text fontWeight={"bold"}>{item.price}</Text>
              </VStack>
            </Box>
          ))}
        </Flex>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size={"2xl"} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody mt={"30px"} pb={"20px"}>
            <Center>
              <Image
                h={"200px"}
                objectFit="cover"
                src={selectedItem?.image}
                alt={selectedItem?.name}
              />
            </Center>
            <VStack mt={"10px"}>
              <Text fontSize={"2xl"} fontWeight={"bold"} textAlign="center">
                {selectedItem?.name}
              </Text>
              <Text fontWeight={"semi-bold"}>autor: {selectedItem?.autor}</Text>
              <Text>{selectedItem?.details}</Text>
              <Text fontWeight={"bold"} fontSize={"20px"}>
                {selectedItem?.price}
              </Text>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Center>
  );
}
