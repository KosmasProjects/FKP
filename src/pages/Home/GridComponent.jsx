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
    Card
} from '@chakra-ui/react'

export default function GridComponent({ title, color }) {
    return (
        <Card
            minH={"175px"}
            w={"290px"}
            boxShadow={'2xl'}
            overflow={'hidden'}
            onClick={() => { console.log(color) }}
            fontSize={'20px'}
            backgroundColor={color}
            border={'1px'}
            textColor={'white'}
            fontWeight={'bold'}
            _hover={{ backgroundColor: 'white', textColor: 'black' }}
            transition={'0.3s'}

        >
            <Center h="100%">
                {title}
            </Center>
        </Card >
    )
}