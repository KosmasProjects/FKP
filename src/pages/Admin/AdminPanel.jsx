import React, { useState } from "react";
import { Box, Text, VStack, Button, Divider } from "@chakra-ui/react";
import AdminTableWidget from "./pages/adminTableWidget";
import { useGetData } from './actions/useGetData'; // Import the hook

export default function AdminPanel() {
  const [selectedView, setSelectedView] = useState("aktualnosci/fkp");
  const { data, isLoading, isError } = useGetData(selectedView); // Use the hook


  const handleMenuClick = (view) => {
    setSelectedView(view);
  };

  return (
    <Box display="flex" h="100vh" w="5xl">
      <Box w="200px" borderRight="1px" borderColor="gray.200">
        <VStack align="start" spacing={0} mr={'10px'}>
          <Text fontSize="2xl" fontWeight={"bold"} color={"blue.400"}>
            Panel Administratora
          </Text>
          <Box
            as="button"
            textAlign="left"
            w="100%"
            p={2}
            onClick={() => handleMenuClick("aktualnosci/fkp")}
            bg={selectedView === "aktualnosci/fkp" ? "white" : ""}
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
            onClick={() => handleMenuClick("people")}
            bg={selectedView === "people" ? "white" : ""}
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
            onClick={() => handleMenuClick("partners")}
            bg={selectedView === "partners" ? "white" : ""}
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
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error</div>
        ) : (
          <>
            {selectedView === "aktualnosci/fkp" && (
              <AdminTableWidget title={"Aktualności"} data={data} />
            )}
            {selectedView === "people" && (
              <AdminTableWidget title={"Przyjaciele"} data={data} />
            )}
            {selectedView === "partners" && (
              <AdminTableWidget title={"Partnerzy"} data={data} />
            )}
            {selectedView === "view4" && (
              <AdminTableWidget title={"Pomniki"} data={data} />
            )}
            {selectedView === "view5" && (
              <AdminTableWidget title={"Słuchowiska"} data={data} />
            )}
          </>
        )}
      </Box>
    </Box>
  );
}
