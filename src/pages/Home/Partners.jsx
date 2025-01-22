import { Center, useDisclosure, Grid, Spinner, Alert, AlertIcon } from "@chakra-ui/react";
import React, { useState } from "react";
import PersonCard from "../../components/PersonCard";
import { useGetPartners } from "./actions/useGetPartners"; // Import the hook

export default function Partners() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedItem, setSelectedItem] = useState(null);
  const { Partners, isLoading, isError } = useGetPartners(); // Call the hook

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
          There was an error fetching the Partners.
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
        {Partners.map((item, index) => (
          <PersonCard key={index} item={item} />
        ))}
      </Grid>
    </Center>
  );
}