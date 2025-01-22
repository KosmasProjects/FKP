import { useQuery } from "react-query";
import { client } from '../../../config/client'
import { useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export const useGetPosts = () => {
    const toast = useToast()

    const fetchPosts = async () => {
        const { data } = await client.get('https://fkpbackend.onrender.com/pl/aktualnosci/fkp/')
        return data
    }

    const { data, isLoading, isError } = useQuery('posts', fetchPosts, {
        refetchOnWindowFocus: false,
        onError: () => {
            toast({
                title: "Błąd",
                description: "Nie udało się pobrać postów",
                status: "error",
                duration: 5000,
                isClosable: true,
            })
        }
    })

    return { data, isLoading, isError }
}