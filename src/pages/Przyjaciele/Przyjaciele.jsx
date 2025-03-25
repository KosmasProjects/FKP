import React from "react";
import Partners from "../Home/Partners";
import { Box, Center, Container, Flex, Text } from "@chakra-ui/react";

export default function Przyjaciele() {
    return (
        <Flex direction="column" alignItems="center" justifyContent="center">
            <Container p={4} maxW={"7xl"} bg={"transparent"} my={4} rounded={"lg"}>
                <Flex direction="column" alignItems="center" justifyContent="center" >
                    <Text fontSize="4xl" fontWeight={"bold"} color={"blue.400"} textAlign="center">
                        Przyjaciele Fundacji
                    </Text>
                    <Box h={10} />
                    <Partners />
                </Flex>
            </Container>
        </Flex>
    );
}