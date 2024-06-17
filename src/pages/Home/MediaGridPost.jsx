import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    Button,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    useColorModeValue,
    Image,
    VStack,
    Flex,
    Container,
    Box,
    Card,
    HStack,
    Icon,
    Spacer,
} from "@chakra-ui/react";
import { FaRegSmile } from "react-icons/fa"; // import the icon you want to use

export default function MediaPost({
    title,
    description,
    date,
    image,
    link,
    category,
    source,
}) {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(link);
    };
    const truncatedTitle = title.length > 40 ? title.substring(0, 38) + "..." : title;

    const [isHovered, setIsHovered] = useState(false);

    return (
        <VStack>
            <Text fontSize={'2xl'} fontWeight={'bold'} >{category}</Text>
        <Card
            rounded={0}
            h={"300px"}
            w={"400px"}
            bgImage={`url(${image})`}
            bgSize="cover"
            bgPosition="center"
            shadow={"1xl"}
            overflow={"hidden"}
            fontSize={"20px"}
            borderColor={"white"}
            borderWidth={"1px"}
            textColor={"white"}
            border={"black, 1px"}
            _hover={{
                textColor: "black",
                ".hover-content": { transform: "translateY(0)" },
            }}
            transition={"0.3s"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"flex-end"}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleCardClick}
        >
            <VStack
                overflowY={"scroll"}
                spacing="24px"
                w="100%"
                h={'250px'}
                backgroundColor="white"
                className="hover-content"
                transform={"translateY(180px)"}
                textColor={"black"}
                alignContent={'space-evenly'}
                transition="transform 0.3s"
                pt={"10px"}
            >
                
                <Heading mx={'30px'} textAlign={'center'} fontSize={"20px"}>{isHovered ? title : truncatedTitle}</Heading>
                <Text m={"20px"} fontSize={"16px"}>{description}</Text>
                <Spacer />

                <HStack w="96%" >
                    <Text fontSize={"12px"}>{date}</Text>
                    <Spacer />
                    <Text fontSize={"12px"}>{source}</Text>
                </HStack>
            </VStack>
        </Card>
        </VStack>
        
    );
}