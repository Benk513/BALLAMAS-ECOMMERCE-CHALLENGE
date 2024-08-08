import React, { createContext , useEffect, useState} from 'react'


export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    
    //products state
    const [products, setProducts] = useState([]);

    // fetch products
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchProducts();
    },[])

    return <ProductContext.Provider>
      
  </ProductContext.Provider>
}

export default ProductProvider
