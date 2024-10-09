import React, { useState } from "react";
import { Box, Text, VStack, Button, Divider } from "@chakra-ui/react";w
import AdminTableWidget from "./pages/adminTableWidget";

export default function AdminPanel() {
  const [selectedView, setSelectedView] = useState("view1");

  const users = [
    { id: 1, name: "User 1", aktualnosci: "Aktualnosci 1" },
    { id: 2, name: "User 2", aktualnosci: "Aktualnosci 2" },
    // Add more users as needed
  ];

  const handleMenuClick = (view) => {
    setSelectedView(view);
  };

  return (
    <Box display="flex" h="100vh" w="5xl">
      <Box w="200px" borderRight="1px" borderColor="gray.200">
        <VStack align="start" spacing={0}>
          <Text fontSize="2xl" fontWeight={"bold"} color={"blue.400"}>
            Panel Administratora
          </Text>
          <Box
            as="button"
            textAlign="left"
            w="100%"
            p={2}
            onClick={() => handleMenuClick("view1")}
            bg={selectedView === "view1" ? "white" : ""}
            _hover={{ transform: "scale(1.05)", bg: "white" }}
            transition="all 0.1s"
          >
            Aktualnosci
          </Box>
          <Divider />
          <Box
            as="button"
            textAlign="left"
            w="100%"
            p={2}
            onClick={() => handleMenuClick("view2")}
            bg={selectedView === "view2" ? "white" : ""}
            _hover={{ transform: "scale(1.05)", bg: "white" }}
            transition="all 0.1s"
          >
            Przyjaciele
          </Box>
          <Box
            as="button"
            textAlign="left"
            w="100%"
            p={2}
            onClick={() => handleMenuClick("view3")}
            bg={selectedView === "view3" ? "white" : ""}
            _hover={{ transform: "scale(1.05)", bg: "white" }}
            transition="all 0.1s"
          >
            Partnerzy
          </Box>
          <Box
            as="button"
            textAlign="left"
            w="100%"
            p={2}
            onClick={() => handleMenuClick("view4")}
            bg={selectedView === "view4" ? "white" : ""}
            _hover={{ transform: "scale(1.05)", bg: "white" }}
            transition="all 0.1s"
          >
            Pomniki
          </Box>
          <Box
            as="button"
            textAlign="left"
            w="100%"
            p={2}
            onClick={() => handleMenuClick("view5")}
            bg={selectedView === "view5" ? "white" : ""}
            _hover={{ transform: "scale(1.05)", bg: "white" }}
            transition="all 0.1s"
          >
            Słuchowiska
          </Box>
          <Divider />
          {/* Add more buttons as needed */}
        </VStack>
      </Box>
      <Box flex="1" p={4}>
        {selectedView === "view1" && (
          <AdminTableWidget title={"Aktualności"} data={users} />
        )}{" "}
        {/* Display the component */}
        {selectedView === "view2" && (
          <AdminTableWidget title={"Przyjaciele"} data={users} />
        )}
        {selectedView === "view3" && (
          <AdminTableWidget title={"Partnerzy"} data={users} />
        )}
        {selectedView === "view4" && (
          <AdminTableWidget title={"Pomniki"} data={users} />
        )}
        {selectedView === "view5" && (
          <AdminTableWidget title={"Słuchowiska"} data={users} />
        )}
      </Box>
    </Box>
  );
}
