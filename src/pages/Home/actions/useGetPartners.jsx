import { useEffect, useState } from "react";

export function useGetPartners() {
    const [Partners, setPartners] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        fetch("https://fkpbackend.onrender.com/pl/partners/")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                setPartners(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error("Error fetching Partners:", error);
                setIsError(true);
                setIsLoading(false);
            });
    }, []);

    return { Partners, isLoading, isError };
}