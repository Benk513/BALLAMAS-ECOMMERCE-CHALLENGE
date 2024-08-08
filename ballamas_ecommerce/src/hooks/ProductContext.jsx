import React, { createContext , useEffect, useState} from 'react'


export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    
    //products state
    const [products, setProducts] = useState([]);

    // fetch products
    useEffect(() => {
        const fetchProducts = async () => {
            try {

            const request = await fetch('https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}')
            
                const response = await request.json();
                console.log(response);
            
                setProducts(response);
                console.log(response)
                
            } catch (error) {
                console.error(error);
            }
        };
        fetchProducts();
    },[])

    return <ProductContext.Provider>{children}</ProductContext.Provider>
}

export default ProductProvider





