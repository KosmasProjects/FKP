import React from 'react';
import SplitWithImage from '../Fundacja/Info';
import MyGrid from './Grid';
import Header from './Header';
import { Container } from '@chakra-ui/react';

export default function HomePage() {


    return (
        <>
            <Header />
            <MyGrid />
            <Container h={40}></Container>
        </>
    );
}