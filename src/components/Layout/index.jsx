import { Box, useDisclosure, Text, Center } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

export default function Layout() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box minH="100vh" backgroundColor={'gray.100'}>
            <Navbar onOpen={onOpen} />

            <Box ml={{ base: 0, md: 0 }} p="4">
                <Outlet />
            </Box>
            <Center w='full' bg='white' p='5' position={'fixed'} bottom={'0'}>
                <Text>© {new Date().getFullYear()} Fundacja Kochania Poznania. All rights reserved.</Text>
            </Center>
        </Box>
    )
}