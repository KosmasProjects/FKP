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
    Box
} from '@chakra-ui/react'

export default function GridComponent() {
    return (
        <Container
            minH={"175px"}
            w={"290px"}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            overflow={'hidden'}
            onClick={() => { console.log('Container clicked!') }}
            fontSize={'20px'}
            backgroundColor={'orange'}
        >


            Rozwazni i Romantyczni


        </Container >
    )
}