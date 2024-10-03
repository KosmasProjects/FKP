import { Card, Container, Flex, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useGetPosts } from './actions/useGetPosts'
import Post from './Post'

export default function Blog() {
    const { data, isLoading, isError } = useGetPosts();

    useEffect(() => {
        if (data) {
            console.log(data);
        }
    }, [data]);


    return (
        <Container pb={20} w={'5xl'}>
            <Flex direction="column" alignItems="center" justifyContent="center">
                <Container p={4} w={'5xl'} bg={'transparent'} my={4} rounded={'lg'}>
                    <Text fontSize="4xl" fontWeight={'bold'} color={"blue.400"} >Blog</Text>
                    <Text fontSize="2xl" color={"blue.400"}>Witaj na naszym blogu</Text> 
                </Container>
                {isLoading ? (
                    <div>Loading...</div>
                ) : isError ? (
                    <div>Error</div>
                ) : (
                    data.map((post) => <Post key={post.id} post={post} />)
                )}
                
            </Flex>
        </Container>
    )
}