'use client'

import { ReactElement } from 'react'
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Card } from '@chakra-ui/react'
import { AiOutlineMail, AiOutlineHome, AiOutlinePhone } from "react-icons/ai";



const Feature = ({ title, text, icon }) => {
    return (
        <Stack>
            <Flex
                w={16}
                h={16}
                align={'center'}
                justify={'center'}
                color={'white'}
                rounded={'full'}
                bg={'white'}

                mb={1}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{title}</Text>
            <Text color={'gray.600'}>{text}</Text>
        </Stack>
    )
}

export default function ContactUs() {
    return (
        <Box p={4}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                <Card p={10}>
                    <Feature
                        icon={<Icon as={AiOutlineMail} w={10} h={10} color={'black'} />}
                        title={'Contact via Email and Social Media'}
                        text={
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
                        }
                    /></Card>
                <Card p={10}>

                    <Feature
                        icon={<Icon as={AiOutlineHome} w={10} h={10} color={'black'} />}
                        title={'Our Address'}
                        text={
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
                        }
                    /></Card>
                <Card p={10}>

                    <Feature
                        icon={<Icon as={AiOutlinePhone} w={10} h={10} color={'black'} />}
                        title={'Phone Number'}
                        text={
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
                        }
                    /></Card>
            </SimpleGrid>
        </Box>
    )
}