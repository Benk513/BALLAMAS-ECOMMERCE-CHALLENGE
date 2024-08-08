import FilterButtons from './FilterButtons'
import Product from './Product'

const Products = () => {
  return (
      <div className='text-center font-chillax text-3xl mt-[72px]'>
          <h1 className='text-2xl lg:text-4xl'>Discover the latest trends in summer fashion. Shop now and refresh your wardrobe with our stylish summer shirts.</h1>
      
          
          <FilterButtons />
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6'
          >
           <Product/>
           <Product/>
           <Product/>
           <Product/>
           <Product/>
           <Product/>
              
          </div>

          <button className='btn-secondary'>View More</button>
    </div>
  )
}

export default Products
