import { Box, VStack, Image, Text, Flex, Center } from "@chakra-ui/react";
import React from "react";

export default function Products() {
    const items = [
        { name: "Historie Doktora Granatowicza", price: "19.99zł", image: "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/SKipinan ko22020912400.png" },
        { name: "Czerwcowe Ulice", price: "29.99zł", image: "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/okladka_Czerwcowe ulice.jpg" },
        { name: "Czerwcowe Ulice", price: "29.99zł", image: "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/okladka_Czerwcowe ulice.jpg" },
        { name: "Czerwcowe Ulice", price: "29.99zł", image: "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/okladka_Czerwcowe ulice.jpg" },
        { name: "Czerwcowe Ulice", price: "29.99zł", image: "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/okladka_Czerwcowe ulice.jpg" },
        { name: "Czerwcowe Ulice", price: "29.99zł", image: "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/okladka_Czerwcowe ulice.jpg" },
        { name: "Czerwcowe Ulice", price: "29.99zł", image: "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/okladka_Czerwcowe ulice.jpg" },
        { name: "Czerwcowe Ulice", price: "29.99zł", image: "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/okladka_Czerwcowe ulice.jpg" },
        { name: "Historie Doktora Granatowicza", price: "19.99zł", image: "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/SKipinan ko22020912400.png" },
        // Add more items here
    ];

    return (
        <Center>
            <Box maxW="100%" overflowX="scroll" overflowY="hidden" marginX={'50px'} p={'20px'} marginY={'20px'} bgColor={'gray.300'}>
                <Flex direction="row" spacing={10}>
                    {items.map((item, index) => (
                        <Box minW={'200px'}  p={5}>
                            <VStack
                                key={index}
                                bg="gray.100"
                                p={4}
                                boxShadow="md"
                            >
                                <Image boxSize="100px" objectFit="cover" src={item.image} alt={item.name} />
                                <Text textAlign={'center'} >{item.name}</Text>
                                <Text fontWeight={'bold'}>{item.price}</Text>
                            </VStack>
                        </Box>
                    ))}
                </Flex>
            </Box>
        </Center>
    );
}