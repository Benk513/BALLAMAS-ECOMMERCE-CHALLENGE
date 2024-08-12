 import TrashIcon from './../../assets/icons/trash.svg'
 import Plus from "./../../assets/icons/plus.svg"
 import Remove from "./../../assets/icons/remove.svg"

import OrderSummary from './OrderSummary'
import ProductRow from './ProductRow'


const Cart = () => {
  return (
    <section className="bg-white py-8 antialiased md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
      
  
      <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
        <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
            <div className="space-y-6">
              
          {/* Cart title and clear cart button */}
          <div className='flex justify-between'>
          
                <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl font-chillax">Cart (3)</h2>
                <span className=' ml-2 p-2 flex gap-x-2 rounded-full bg-gray-100 text-b-gray group-hover:cursor-pointer'><img src={TrashIcon}className='opacity-40' alt="" />Clear Cart</span>

          </div>
          
           {/* product , quantity  and price*/}    
          <div className='flex justify-between font-display text-base text-b-dark-gray font-semibold'>
                <h2 >Product</h2>
                <h2 >Quantity</h2>
                <h2 >Price</h2>
              </div>
              
              <ProductRow/>
              <ProductRow/>
              <ProductRow/>
          
              
        
            
          </div>
          
          </div>          
  
        <OrderSummary/>
        </div>
      </div>
 
  </section>
  )
}

export default Cart
