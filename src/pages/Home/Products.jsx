import { Box, VStack, Image, Text, Flex, Center } from "@chakra-ui/react";
import React from "react";

export default function Products() {
    const items = [
        { name: "Historie Doktora Granatowicza", price: "19.99zł", image: "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/SKipinan ko22020912400.png" },
        { name: "Czerwcowe Ulice", price: "29.99zł", image: "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/okladka_Czerwcowe ulice.jpg" },
        { name: "Historia grupy MTP", price: "29.99zł", image: "https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/MTP_okladka-eksponaty.pdf" },
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
                        <Box p={5} key={index}>
                            <VStack
                                bg="gray.100"
                                p={4}
                                boxShadow="md"
                                w={'200px'}
                                h={'250px'}
                            >
                                <Image boxSize="auto" w={'full'} h={'120px'} objectFit="contain" src={item.image} alt={item.name} />
                                <Text textAlign={'center'} fontSize={'18px'} >{item.name}</Text>
                                <Text fontWeight={'bold'}>{item.price}</Text>
                            </VStack>
                        </Box>
                    ))}
                </Flex>
            </Box>
        </Center>
    );
}