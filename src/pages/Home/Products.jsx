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
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  HStack,
  Spinner,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useGetProducts } from "./actions/useGetProducts"; // Import the hook

export default function Products() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState(null);
  const { products, isLoading, isError } = useGetProducts(); // Call the hook

  const handleBoxClick = (item) => {
    setSelectedItem(item);
    onOpen();
  };

  if (isLoading) {
    return (
      <Center>
        <Spinner size="xl" />
      </Center>
    );
  }

  if (isError) {
    return (
      <Center>
        <Alert status="error">
          <AlertIcon />
          There was an error fetching the products.
        </Alert>
      </Center>
    );
  }

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
          {products.map((item, index) => (
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
                  alt={item.title}
                />
                <Text textAlign={"center"} fontSize={"18px"}>
                  {item.title}
                </Text>
                <Text fontWeight={"bold"}>{item.regularPrice}</Text>
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
                alt={selectedItem?.title}
              />
            </Center>
            <VStack mt={"10px"}>
              <Text fontSize={"2xl"} fontWeight={"bold"} textAlign="center">
                {selectedItem?.title}
              </Text>
              <Text fontWeight={"semi-bold"}>autor: {selectedItem?.autor}</Text>
              <Text>{selectedItem?.description}</Text>
              <Text fontWeight={"bold"} fontSize={"20px"}>
                {selectedItem?.regularPrice}
              </Text>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Center>
  );
}