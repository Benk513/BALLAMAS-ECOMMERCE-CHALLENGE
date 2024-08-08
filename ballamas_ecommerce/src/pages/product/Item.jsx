import React from 'react'

const Item = () => {
  return (
    <div>
       <div className='flex justify-between gap-12 mt-20'>
        <img src="/product1.jpg" alt="ded" className='h-[500px] rounded-3xl' />


        <div className=''>
          <h1 className='font-chillax text-4xl font-semibold'>Badacore Tshirt</h1>
          <h2 className='font-display text-2xl mt-4 font-medium'>CAD $80</h2>

          <h3 className='font-display text-2xl mt-4'>Color:Green</h3>
          
          <div className='flex gap-3'>
            <span className='rounded-full bg-b-green p-4'></span>
            <span className='rounded-full bg-b-purple p-4'></span>
            <span className='rounded-full bg-b-ocean p-4'></span>
            <span className='rounded-full bg-b-olive p-4'></span>
     
          </div>

          <h3 className='font-display text-2xl mt-4' >Size:</h3>
          <div className='gap-4 flex items-center'>
            <span className=' btn-primary py-'>XS</span>
            <span className='btn-secondary'>S</span>
            <span className='btn-secondary'>M</span>
            <span className='btn-secondary'>L</span>
            <span className='btn-secondary'>XL</span>
          </div>

          <div className='mt-5 flex gap-3'>
            <button className='btn-primary px-10'>BUY NOW</button>
            <button className='btn-secondary px-10'>Add to Cart</button>
            
          </div>

          <h3 className=' font-chillax text-2xl mt-5'>Description</h3>
          <p className=' text-b-dark-gray font-display mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>

        </div>

      </div>
    </div>
  )
}

export default Item
