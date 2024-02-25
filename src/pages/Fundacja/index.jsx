import React from 'react'
import SplitWithImage from './Info'
import StatsCard from './Statistics'
import { Container } from '@chakra-ui/react'
import Team from './Team'

export default function Fundacja() {
    return (<>
        <SplitWithImage />
        <StatsCard />
        <Team />
        <Container h={40}></Container>
    </>

    )
}
