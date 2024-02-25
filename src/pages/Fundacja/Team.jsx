import React from 'react'
import { Box, chakra, SimpleGrid } from '@chakra-ui/react'
import PersonCard from './PersonCard'

export default function Team() {
  return (
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
            <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={10} fontWeight={'bold'}>
                Nasz zespół
            </chakra.h1>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
                <PersonCard name={'Paweł Cieliczko'} position={'Prezes'} />
                <PersonCard name={'Krzysztof Burzyński'} position={'Menadzer'} />
                <PersonCard name={'Kosma Cieliczko'} position={'Programista'} />
            </SimpleGrid>
        </Box>
  )
}
