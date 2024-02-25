import { Grid, Container, Image, Flex, HStack, Center } from "@chakra-ui/react";
import GridComponent from "./GridComponent";

export default function MyGrid() {
    return (
        <Center>
            <Container maxW={'1500px'} py={12}>
                <HStack justifyContent={'center'} alignItems={'center'}>
                    <Grid>
                        <GridComponent title={"Rozważni i romantyczni"} color={"orange"} />
                        <GridComponent title={"Wspólna sprawa’44"} color={"yellow.700"} />
                        <GridComponent title={"Bimbą w historię"} color={"blue.400"} />
                    </Grid>
                    <Image
                        h={'525px'}
                        w={'900px'}
                        src={
                            'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                        }
                        alt="Example"
                    />
                    <Grid>
                        <GridComponent title={"Pomniki Poznania "} color={"teal.600"} />
                        <GridComponent title={"Ulicznik poznański"} color={"purple.600"} />
                        <GridComponent title={"Poznań wart Poznania"} color={"pink.600"} />
                    </Grid>
                </HStack>
                <Center> {/* Center the last grid */}
                    <Grid templateColumns={"repeat(3, 1fr)"}>
                        <GridComponent title={"Poznańskie legendy "} color={"green.600"} />
                        <GridComponent title={"Literacki Poznań"} color={"orange.600"} />
                        <GridComponent title={"Herstoriwa warta Poznania"} color={"blue.600"} />
                    </Grid>
                </Center>
            </Container>
        </Center>
    );
}
