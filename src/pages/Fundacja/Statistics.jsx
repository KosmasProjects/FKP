
import {
    Box,
    chakra,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
} from '@chakra-ui/react'


function StatsCard(props) {
    const { title, stat } = props
    return (
        <Stat
        bg={useColorModeValue('white', 'gray.700')}
            px={{ base: 4, md: 8 }}
            py={'5'}
            shadow={'xl'}
            borderColor={useColorModeValue('gray.800', 'gray.500')}
            rounded={'lg'}>
            <StatLabel fontWeight={'medium'} isTruncated>
                {title}
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
                {stat}
            </StatNumber>
        </Stat>
    )
}

export default function BasicStatistics() {
    return (
        <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
            <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={10} fontWeight={'bold'}>
                Nasze osiągnięcia
            </chakra.h1>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
                <StatsCard title={'Projekty'} stat={'14 rónych projektów'} />
                <StatsCard title={'Pomniki'} stat={'32 poznanskie pomniki'} />
                <StatsCard title={'Skwerki'} stat={'11 nazwanych skwerków'} />
            </SimpleGrid>
        </Box>
    )
}