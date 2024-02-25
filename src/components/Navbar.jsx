import React from 'react';
import { Box, Flex, Image, Button } from '@chakra-ui/react';
import logo from '../assets/FKPLOGO.png';
export default function Navbar() {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            padding="1.5rem"
            bg="white.500"
            color="white"
        >
            <Flex align="center">
                <Image src={logo} w={"200px"} />
            </Flex>

            <Box
                display="flex"
                width="auto"
                alignItems="center"
                flexGrow={1}
                justifyContent="flex-end"
            >
                <Button colorScheme="teal" variant="ghost" mr={2}>
                    Aktualności
                </Button>
                <Button colorScheme="teal" variant="ghost" mr={2}>
                    Fundacja
                </Button>
                <Button colorScheme="teal" variant="ghost" mr={2}>
                    Partnerzy i Przyjaciele Fundacji
                </Button>
                <Button colorScheme="teal" variant="ghost" mr={2}>
                    Wesprzyj nas
                </Button>
                <Button colorScheme="teal" variant="ghost" mr={2}>
                    Kontakt
                </Button>
            </Box>
        </Flex>
    );
};
