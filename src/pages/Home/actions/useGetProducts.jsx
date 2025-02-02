import { useEffect, useState } from "react";

export function useGetProducts() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        fetch("https://fkpbackend.onrender.com/pl/products/")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(data => {
                setProducts(data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error("Error fetching products:", error);
                setIsError(true);
                setIsLoading(false);
            });
    }, []);

    return { products, isLoading, isError };
}