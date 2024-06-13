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
    Card,
    HStack,
    Icon

} from '@chakra-ui/react'
import { FaRegSmile } from "react-icons/fa"; // import the icon you want to use


export default function GridComponent({ title, color, id, onMouseEnter, onMouseLeave }) {
    return (
        <Card
            rounded={0}
            h={"100px"}
            w={"242px"}
            shadow={'1xl'}
            overflow={'hidden'}
            onClick={() => { console.log(id) }}
            fontSize={'20px'}
            backgroundColor={color}
            borderColor={'white'}
            borderWidth={'1px'}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            textColor={'white'}

            _hover={{ backgroundColor: 'white', textColor: 'black', borderWidth: '3px', borderColor: color }}
            transition={'0.3s'}

        >
            
<Center h="100%" p={10}>
    <HStack spacing="24px">
        <Heading fontSize={'20px'}>{title}</Heading>
        <Icon as={FaRegSmile} /> {/* replace FaRegSmile with the icon you want */}
    </HStack>
</Center>
        </Card >
    )
}