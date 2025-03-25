import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex, Card } from '@chakra-ui/react';
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
            <Text color={'gray.600'} dangerouslySetInnerHTML={{ __html: text }} />
        </Stack>
    );
};

export default function ContactUs() {
    return (
        <Box p={4}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
                <Card p={10}>
                    <Feature
                        icon={<Icon as={AiOutlineMail} w={10} h={10} color={'black'} />}
                        title={'Email'}
                        text={'kontakt@fundacjakochaniapoznania.pl<br /><br />pawel@cieliczko.pl'}
                    />
                </Card>
                <Card p={10}>
                    <Feature
                        icon={<Icon as={AiOutlineHome} w={10} h={10} color={'black'} />}
                        title={'Adres Fundacji'}
                        text={'ul. Matejki 55/2<br />60-770 Poznań'}
                    />
                </Card>
                <Card p={10}>
                    <Feature
                        icon={<Icon as={AiOutlinePhone} w={10} h={10} color={'black'} />}
                        title={'Kontakt Telefoniczny (sztuczny)'}
                        text={'+48 123 456 789<br />+48 987 654 321'}
                    />
                </Card>
            </SimpleGrid>
        </Box>
    );
}