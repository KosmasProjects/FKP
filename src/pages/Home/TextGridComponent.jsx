import {
    Box,
    Center,
    Text
} from '@chakra-ui/react'

export default function TextGridComponent({ title }) {
    return (
        <Box
            rounded={0}
            h={"40px"}
            w={"242px"}
            shadow={'1xl'}
            overflow={'hidden'}
            justifyContent={'center'}
            alignItems={'center'}
            display={'flex'}
            backgroundColor={'gray.400'}
            borderColor={'white'}
            borderWidth={'1px'}
            textColor={'white'}
            _hover={{ backgroundColor: 'white', textColor: 'black', borderWidth: '3px', borderColor: 'gray.800' }}
            transition={'0.3s'}
        >
            <Center>
            <Text textAlign={'center'} fontSize={'16px'}>{title}</Text>
            </Center>
        </Box>
    )
}