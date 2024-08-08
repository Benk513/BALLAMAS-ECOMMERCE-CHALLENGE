 import TrashIcon from './../../assets/icons/trash.svg'
const Cart = () => {
  return (
    <section className="bg-white py-8 antialiased md:py-16">
    <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl font-chillax">Cart (3)</h2>
  
      <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
        <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
          <div className="space-y-6">
            
            
            
           
            <div className=" border-b border-t border-b-light-gray bg-white p-4     md:p-6">
              <div className="space-y-1 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0  xl:justify-start">
                <a href="#" className="w-20 shrink-0 md:order-1">
                 <img src="/product3.jpg" alt="" className="w-full h-[80px] bg-cover rounded-xl" />
                  
                </a>
  
                  
                  
                <div className="flex items-center justify-between md:order-3 md:justify-end">
                  <div className="flex items-center bg-gray-100 rounded-full px-2 py-2 ">
                    <button type="button" id="decrement-button-5"   className= "cart-add-button">
                     -
                    </button>
                    <input type="text" id="counter-input-5"  className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0  " placeholder="" value="3" required />
                    <button type="button" className="cart-add-button">
                      +
                    </button>
                    </div>
                    
                    <span className=' ml-2 p-2  rounded-full bg-gray-100'><img src={TrashIcon} alt="" /></span>
                  <div className="text-end md:order-4 md:w-32">
                    <p className="text-base font-bold text-gray-900  ">$2,997</p>
                  </div>
                </div>
  
                <div className="w-full min-w-0 flex-1 flex-col space-y-6 md:order-2 md:max-w-md ">
                  <a href="#" className="text-base font-medium text-gray-900 hover:underline  ">Tatum 2 Red Cement</a>
                  <a href="#" className="text-base font-medium text-gray-900 hover:underline  ">Size: 15</a>
      
  
                  <div className="flex items-center gap-4">
                   
  
                    <button type="button" className="inline-flex items-center text-2xl font-display font-semibold text-b-black hover:underline  ">
                     
                      $100
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          </div>
          

  
        <div className="mt-6 max-w-4xl flex-1 border rounded-lg space-y-6 lg:mt-0 lg:w-full">
          <div className="space-y-4 rounded-lg border border-gray-200 p-4 shadow-sm  sm:p-6">
            <p className="text-xl font-semibold text-gray-900  ">Order summary</p>
  
            <div className="space-y-4">
              <div className="space-y-2">
                <dl className="flex items-center justify-between gap-4">
                  <dt className="text-base font-normal text-gray-500  ">Subtotal</dt>
                  <dd className="text-base font-medium text-gray-900  ">$7,592.00</dd>
                </dl>
  
                <dl className="flex items-center justify-between gap-4">
                  <dt className="text-base font-normal text-gray-500  ">Discount</dt>
                  <dd className="text-base font-medium text-green-600">-$299.00</dd>
                </dl>
               
              </div>
  
              <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2  ">
                <dt className="text-base font-bold text-gray-900 ">Total</dt>
                <dd className="text-base font-bold text-gray-900 ">$8,191.00</dd>
              </dl>
            </div>
  
            <a href="#" className="w-full text-sm font-medium hover:bg-b-dark-gray transition space-y-2 focus:outline-none focus:ring-4 focus:ring-primary-300   focus:ring-primary-800 btn-primary">Checkout now</a>
   
          </div>
  
         
          </div>
        </div>
      </div>
 
  </section>
  )
}

export default Cart
