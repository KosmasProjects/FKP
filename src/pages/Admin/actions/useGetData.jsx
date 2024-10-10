import { useQuery } from "react-query";
import { client } from '../../../config/client'
import { useToast } from "@chakra-ui/react";

export const useGetData = (view) => {
    const toast = useToast()

    const fetchData = async () => {
        const { data } = await client.get(`http://127.0.0.1:8000/pl/${view}/`)
        return data
    }

    const { data, isLoading, isError } = useQuery([view], fetchData, {
        refetchOnWindowFocus: false,
        onError: () => {
            toast({
                title: "Błąd",
                description: `Nie udało się pobrać danych dla widoku ${view}`,
                status: "error",
                duration: 5000,
                isClosable: true,
            })
        }
    })

    return { data, isLoading, isError }
}