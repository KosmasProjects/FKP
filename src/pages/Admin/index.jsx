import React, { useState } from "react";
import {
  Container,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    console.log(username);

    if (!username || !password) {
      alert("Uzupełnij obydwa pola!");
      return;
    }

    const response = await fetch("http://127.0.0.1:8000/pl/auth_app/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (!response.ok) {
      console.error("Fetch request failed:", response);
      return;
    }

    const data = await response.json();
    console.log(data);

    // Navigate to the new page
    navigate("/FKP/admin-panel");
  };

  return (
    <Container pb={20} w={"5xl"}>
      <Flex direction="column" alignItems="center" justifyContent="center">
        <Container p={4} w={"5xl"} bg={"transparent"} my={4} rounded={"lg"}>
          <Text fontSize="4xl" fontWeight={"bold"} color={"blue.400"}>
            Panel Administratora
          </Text>
          <Text fontSize="2xl" color={"blue.400"}>
            Zaloguj się do panelu
          </Text>

          <FormControl id="username" mt={4}>
            <FormLabel>Login</FormLabel>
            <Input
              type="text"
              bg={"white.400"}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>

          <FormControl id="password" mt={4}>
            <FormLabel>Hasło</FormLabel>
            <Input
              type="password"
              bg={"white.400"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          <Button onClick={handleSubmit} colorScheme="blue" mt={4}>
            Zaloguj się
          </Button>
        </Container>
      </Flex>
    </Container>
  );
}
