import { Center, useDisclosure, Grid, Spinner, Alert, AlertIcon } from "@chakra-ui/react";
import React, { useState } from "react";
import PersonCard from "../../components/PersonCard";
import { useGetPeople } from "./actions/useGetPeople"; // Import the hook

export default function Team() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState(null);
  const { people, isLoading, isError } = useGetPeople(); // Call the hook

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
          There was an error fetching the people.
        </Alert>
      </Center>
    );
  }

  return (
    <Center>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(4, 1fr)",
          "repeat(5, 1fr)",
        ]}
        rowGap={4}
        gap={10}
        maxW="100%"
      >
        {people.map((item, index) => (
          <PersonCard key={index} item={item} />
        ))}
      </Grid>
    </Center>
  );
}