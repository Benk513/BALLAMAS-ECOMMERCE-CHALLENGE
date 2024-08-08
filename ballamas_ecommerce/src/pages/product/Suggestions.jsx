import React from 'react'
import Product from '../home/Product'

const Suggestions = () => {
  return (
    <div className='mt-20'>
          <h1 className='font-chillax text-3xl'>You may also like</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6'
          >
           <Product/>
           <Product/>
           <Product/>
           <Product/>
           
              
          </div>
    </div>
  )
}

export default Suggestions
