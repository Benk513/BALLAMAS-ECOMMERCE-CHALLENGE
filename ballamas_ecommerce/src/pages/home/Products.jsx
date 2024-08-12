import FilterButtons from './FilterButtons'
import {useState , useEffect} from 'react'
import Product from './Product'
  
const Products = () => {

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [errorr, setErrorr] = useState()

 
   
  
  useEffect(() => { 

    const fetchProducts = async () => {

      setIsLoading(true)

      try {
    const request = await fetch('https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}')
      const response = await request.json();
        console.log(response.data.products);
   
      setProducts(response.data.products.edges);
        
      } catch (error) {
        console.log(error)
        setErrorr(error)
      }
      finally {
          setIsLoading(false)
      }    
      
    }
    fetchProducts()
  }, [])
  

  

  if (isLoading) {
    return (
      <div>Loading...</div>
    )
    
  }
  if (errorr) {
    return (
      <div className='bg-red-500 h-screen w-full'>Oups !! il ya une erreur de lors de  appel de données...</div>
    )
    
  }



  return (
      <div className='text-center font-chillax text-3xl mt-[130px]'>
          <h1 className='text-2xl lg:text-4xl lg:font-bold'>Discover the latest trends in summer fashion. Shop now and refresh your wardrobe with our stylish summer shirts.</h1>
      
          
          <FilterButtons />       
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
        

        
         {products.map((item,index) => {
          
          return  <Product key={index} item={item} />
        })} 
         
       
              
          </div>

          <button className='btn-secondary'>View More</button>
    </div>
  )
}

export default Products
