import { Card, Container, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Post from './Post'

export default function Blog() {
    return (
        <Container pb={20} w={'5xl'}>
            <Flex direction="column" alignItems="center" justifyContent="center">
                <Container p={4} w={'5xl'} bg={'transparent'} my={4} rounded={'lg'}>
                    <Text fontSize="4xl" fontWeight={'bold'} color={"blue.400"} >Blog</Text>
                    <Text fontSize="2xl" color={"blue.400"}>Witaj na naszym blogu</Text> 
                </Container>
                <Post />
            </Flex>
        </Container>
    )
}