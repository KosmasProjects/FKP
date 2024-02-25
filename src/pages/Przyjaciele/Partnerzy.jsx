import React from 'react'

import { Container, Flex, Text } from '@chakra-ui/react'
export default function Partnerzy() {
  return (
    <Flex direction="column" alignItems="center" justifyContent="center">
                <Container p={4} w={'5xl'} bg={'transparent'} my={4} rounded={'lg'}>
                    <Text fontSize="4xl" fontWeight={'bold'} color={"blue.400"} >Partnerzy Fundacji</Text>
                    <Text fontSize="2xl" color={"blue.400"}>Nasi Partnerzy Fundacji</Text>
                </Container>
            </Flex>
    
    )
}
