import { useQuery } from "react-query";
import { client } from '../../../config/client';
import { useToast } from "@chakra-ui/react";

export const useGetPlayers = () => {
    const toast = useToast();

    const fetchPlayers = async () => {
        const { data } = await client.get('http://127.0.0.1:8000/pl/podcasts/');
        return data;
        console.log(data);
    };

    const { data, isLoading, isError } = useQuery('players', fetchPlayers, {
        refetchOnWindowFocus: false,
        onError: () => {
            toast({
                title: "Error",
                description: "Failed to fetch players data",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    });

    return { data, isLoading, isError };
};


