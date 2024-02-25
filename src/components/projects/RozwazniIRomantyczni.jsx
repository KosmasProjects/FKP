import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure, HStack, Flex, Image, Text, Box, VStack } from "@chakra-ui/react";
import logo from '../../assets/FKPLOGO.png';

export default function RozwazniIRomantyczni() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <VStack onClick={onOpen}>
                <Box backgroundColor="blue.500" p={4} rounded={10}>
                    <Image h={"300px"} w={"400"} src="https://via.placeholder.com/400x200" alt="Placeholder" rounded={10} />
                    <Box w="400px" h="130px" backgroundColor="blue.500" p={4} rounded={10}
                        style={{
                            fontSize: "26px",
                            whiteSpace: "normal",
                            wordWrap: "break-word",
                            color: "white",
                        }}>
                        Rozważni i romantyczni. Powstanie Wielkopolskie 1918/1919
                    </Box></Box>

            </VStack>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Content for Button 1
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}