import React from 'react'
import { Container, VStack } from '@chakra-ui/react'
import Przyjaciele from './Przyjaciele'
import Partnerzy from './Partnerzy'

export default function Friends() {
    return (
        <Container pb={20} w={'full'} centerContent>
            <VStack w={'5xl'}>
                <Przyjaciele />
                <Partnerzy />
            </VStack>
        </Container>
    )
}