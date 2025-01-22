import { useEffect, useState } from "react";

export function useGetPeople() {
    const [people, setPeople] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        fetch("https://fkpbackend.onrender.com/pl/people/")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                setPeople(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error("Error fetching people:", error);
                setIsError(true);
                setIsLoading(false);
            });
    }, []);

    return { people, isLoading, isError };
}