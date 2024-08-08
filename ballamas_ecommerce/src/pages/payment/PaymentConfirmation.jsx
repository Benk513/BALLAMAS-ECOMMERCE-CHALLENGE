import React from 'react'
import Check from "./../../assets/icons/check.svg"
const PaymentConfirmation = () => {
  return (
    
    
  
    <div className='flex justify-center items-center h-[60vh]  gap-4'>
         
      <div className='justify-center items-center gap-4'>  
      <div className=' '>
        <img src={Check} alt="" width={50} className='border-b-black rounded-full border-2 p-2 place-content-center' />
        </div>
        

      <h1 className=' font-display font-semibold text-2xl mb-3'>Thanks for your order !</h1>
      <p className=' font-display font-normal text-md text-b-dark-gray'>The order confirmation has been sent to johndoe@gmail.com</p>
    </div>
    </div>
  )
}

export default PaymentConfirmation
