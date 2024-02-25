import { Grid, Container, Text } from "@chakra-ui/react";
import GridComponent from "./GridComponent";

export default function MyGrid() {
    return (

        <Container maxW={'5xl'} py={12}>
            <Text fontSize={{ base: '40px', lg: '40px' }} color={'blue.400'} fontWeight={'bold'} p={5}>Projekty</Text>
            <Grid templateColumns="repeat(2, 1fr)" gap={6} width="100%">
                <GridComponent />
                <GridComponent />
                <GridComponent />
                <GridComponent />
                <GridComponent />
                <GridComponent />
                <GridComponent />
                <GridComponent />
            </Grid>
        </Container>
    );
}