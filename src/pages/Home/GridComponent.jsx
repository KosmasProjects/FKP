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

export default function GridComponent({ title, color, id, onMouseEnter, onMouseLeave }) {
    return (
        <Card
            rounded={0}
            minH={"165px"}
            w={"295px"}
            shadow={'1xl'}
            overflow={'hidden'}
            onClick={() => { console.log(id) }}
            fontSize={'2xl'}
            backgroundColor={color}
            borderColor={'white'}
            borderWidth={'3px'}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            textColor={'white'}

            _hover={{ backgroundColor: 'white', textColor: 'black', borderWidth: '3px', borderColor: color }}
            transition={'0.3s'}

        >
            <Center h="100%" p={10} >
                {title}
            </Center>
        </Card >
    )
}