import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
} from '@chakra-ui/react'
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons'
import { ReactElement } from 'react'
import MyGrid from '../Home/Grid'



const Feature = ({ text, icon, iconBg }) => {
    return (
        <Stack direction={'row'} align={'center'}>
            <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{text}</Text>
        </Stack>
    )
}

export default function SplitWithImage() {
    return (
        <Container maxW={'5xl'} pt={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} marginBottom={20}>
                <Stack spacing={4}>
                    <Text
                        textTransform={'uppercase'}
                        color={'blue.400'}
                        fontWeight={600}
                        fontSize={'sm'}
                        bg={useColorModeValue('blue.50', 'blue.900')}
                        p={2}
                        alignSelf={'flex-start'}
                        rounded={'md'}>
                        Nasza historia
                    </Text>
                    <Heading>Czym zajmuje się Fundacja Kochania Poznania?</Heading>
                    <Text color={'gray.500'} fontSize={'lg'}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                        eirmod tempor invidunt ut labore
                    </Text>
                    <Stack
                        spacing={4}
                        divider={
                            <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
                        }>
                        <Feature
                            icon={<Icon as={HamburgerIcon} color={'yellow.500'} w={5} h={5} />}
                            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                            text={'Projekty edukacyjne'}
                        />
                        <Feature
                            icon={<Icon as={HamburgerIcon} color={'green.500'} w={5} h={5} />}
                            iconBg={useColorModeValue('green.100', 'green.900')}
                            text={'Spotkania integracyjne'}
                        />
                        <Feature
                            icon={<Icon as={HamburgerIcon} color={'purple.500'} w={5} h={5} />}
                            iconBg={useColorModeValue('purple.100', 'purple.900')}
                            text={'Wystawy i koncerty'}
                        />
                    </Stack>
                </Stack>
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={'feature image'}
                        src={
                            'https://wspolnasprawa.blob.core.windows.net/wspolnasprawaphotos/DSC_7070.jpg'}
                        objectFit={'cover'}
                    />
                </Flex>
            </SimpleGrid>
        </Container>
    )
}