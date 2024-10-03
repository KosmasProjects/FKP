import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Flex,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Image,
  ModalBody,
  ModalCloseButton,
  Box,
  useDisclosure,
  Card,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  UnorderedList,
  Select,
  HStack,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import PersonCard from "../../components/PersonCard";

export default function AdminPanel() {
  const [people, setPeople] = useState([]);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [organization, setOrganization] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/pl/organization/")
      .then((response) => response.json())
      .then((data) => setOrganizations(data));
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/pl/people/")
      .then((response) => response.json())
      .then((data) => setPeople(data));
  }, []);

  console.log(people);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("surname", surname);
    formData.append("organization", organization);
    formData.append("description", description);
    formData.append("photo", image);

    const response = await fetch("http://127.0.0.1:8000/pl/people/new/", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const data = await fetch("http://127.0.0.1:8000/pl/people/").then(
        (response) => response.json()
      );
      setPeople(data);
      onClose();
    } else {
      console.error("Failed to add person");
      alert("Failed to add person");
       
    }
  };

  return (
    <>
      <Container pb={20} w={"5xl"}>
        <Flex direction="column" alignItems="center" justifyContent="center">
          <Container p={4} w={"5xl"} bg={"transparent"} my={4} rounded={"lg"}>
            <Text fontSize="4xl" fontWeight={"bold"} color={"blue.400"}>
              Panel Administratora
            </Text>
            <Text fontSize="2xl" color={"blue.400"}>
              Przyjaciele fundacji
            </Text>

            <Button colorScheme="blue" mt={4} onClick={onOpen}>
              Dodaj przyjaciela
            </Button>
            <Container
              pt={5}
              pr={4}
              pb={4}
              pl={0}
              w={"5xl"}
              borderRadius={"10px"}
              rounded={"lg"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"start"}
              justifyItems={"start"}
              justifyContent={"start"}
              alignContent={"start"}
            >
              <UnorderedList paddingInlineStart={0} margin={0}>
                {people.map((person, index) => (
                  <Box mb={1}>
                    <Card p={2}>
                      <HStack>
                        <VStack align={"start"}>
                          <Text fontSize={"18px"} fontWeight={"bold"}>
                            {person.name} {person.surname}
                          </Text>
                          <Text fontSize={"16px"} fontWeight={"bold"}>
                            Organizacja: {organization[person.organization - 1]}
                          </Text>
                          <Text fontSize={"14px"}>{person.description}</Text>
                        </VStack>
                        <Spacer />
                        <Image w={20} src={person.photo_url}></Image>
                      </HStack>
                    </Card>
                  </Box>
                ))}
              </UnorderedList>
            </Container>
          </Container>
        </Flex>
      </Container>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Dodaj przyjaciela</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Imię</FormLabel>
              <Input
                placeholder="Imię"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Nazwisko</FormLabel>
              <Input
                placeholder="Nazwisko"
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Organizacja</FormLabel>
              <Select
                placeholder="Wybierz organizację"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
              >
                {organizations.map((org) => (
                  <option key={org.id} value={org.id}>
                    {org.name}
                  </option>
                ))}
              </Select>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Opis</FormLabel>
              <Textarea
                placeholder="Opis"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Zdjęcie</FormLabel>
              <Input
                type="file" 
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Zapisz
            </Button>
            <Button onClick={onClose}>Anuluj</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
