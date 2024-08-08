import React from 'react'

const Checkout = () => {
  return (
    <div className='my-10'>
      <h1 className='font-display text-4xl font-semibold'>Checkout</h1>

      <div className=' flex gap-28'>
        
        {/* order */}
        <div>
          <h2 className='font-display text-2xl font-semibold mt-8'>Your Order</h2>
          <h3 className='text-b-dark-gray'>By placing your order, you agree to Ballamas Privacy and Policy</h3>

          <div className='flex gap-4 w-full mt-8'>
            <img src="/product3.jpg" alt="" className='h-[80px] w-[80px] rounded-lg' />
            <div className='flex justify-between w-full'>
              <div>
              <h3 className='text-lg font-semibold'>Tatum 2 "Red Cement"</h3>
              <p className='text-b-dark-gray'>Color: Green - Size :Large</p>

              </div>
              <div><p className=' font-display text-2xl font-bold'>$147,00</p></div>
            </div>
          </div>


          <h4 className='mt-6'>Discount Code</h4>

          <div className='flex gap-3'>
            <input type="text" name="" id=""  placeholder="Add discount code " className='border rounded-full w-[200px] border-b-gray px-5 py-2 ' />
            <button className='btn-primary'>Apply</button>
          </div>

          <p className='mt-4 text-b-gray '> <span className='text-b-black '>New customer?</span>  SignUp to get better offer</p>



          <div className='flex justify-between mb-2 mt-5 text-b-dark-gray'>
            <h1>Subtotal</h1>
            <p>$147.00</p>
          </div>

          <div className='flex justify-between border-b pb-2 text-b-dark-gray '>
            <h1>Subtotal</h1>
            <p>$147.00</p>
          </div>





        </div>


        <div>e</div>
      </div>

    </div>
  )
}

export default Checkout
