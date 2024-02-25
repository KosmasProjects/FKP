import React from 'react';
import SplitWithImage from '../Fundacja/Info';
import MyGrid from './Grid';
import Header from './Header';
import { Container } from '@chakra-ui/react';

export default function HomePage() {


    return (
        <>
            <MyGrid />
            <Header />
            <Container h={40}></Container>
        </>
    );
}