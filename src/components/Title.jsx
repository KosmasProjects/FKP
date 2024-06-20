import React from "react";
import { Link } from "react-router-dom";
import { Flex, Text, Center, HStack, Box, Button } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

export default function Title({ title, color }) {
    return (
        <Center>
            <HStack w={"85%"} h={"80px"} justifyContent={'space-between'} alignItems={'start'}>
                <Box w={"20%"} h={"60px"}>
                    <Flex alignItems="start" justifyContent="flex-start">
                        <Button
                            as={Link}
                            to="/FKP/"
                            color={color}
                            fontWeight={'bold'}
                            m={2}
                            leftIcon={<ArrowBackIcon boxSize={5} />}
                            
                        >
                            Wróć do strony głównej
                        </Button>
                    </Flex>
                </Box>
                <Box w={"60%"} h={"60px"}>
                    <Center>
                        <Text
                            fontSize="4xl"
                            fontWeight={"bold"}
                            color={color}
                            mb={5}
                        >
                            {title}
                        </Text>
                    </Center>
                </Box>
                <Box w={"20%"} h={"60px"}></Box>
            </HStack>
        </Center>
    );
}