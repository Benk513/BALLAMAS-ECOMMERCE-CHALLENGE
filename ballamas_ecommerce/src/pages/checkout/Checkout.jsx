import RightArrow from './../../assets/icons/arrow-right.svg'

import Order from './Order'
import Discount from './Discount'
import Shipment from './Shipment'
import Input from '../../components/ui/Input'

const Checkout = () => {
  return (
    <div className='my-10'>
      <h1 className='font-display text-4xl font-semibold'>Checkout</h1>

      <div className=' flex gap-28'>
        
        {/* order */}
        <div className='w-full'>
          <h2 className='font-display text-2xl font-semibold mt-8'>Your Order</h2>
          <h3 className='text-b-dark-gray'>By placing your order, you agree to Ballamas Privacy and Policy</h3>

        <Order/>
          <h4 className='mt-6'>Discount Code</h4>

          <Discount/>

          <p className='mt-4 text-b-gray '> <span className='text-b-black '>New customer?</span>  SignUp to get better offer</p>



          <div className='flex justify-between mb-2 mt-5 text-b-dark-gray'>
            <h1>Subtotal</h1>
            <p>$147.00</p>
          </div>

          <div className='flex justify-between border-b pb-2 text-b-dark-gray '>
            <h1>Subtotal</h1>
            <p>$147.00</p>
          </div>

          <div className='flex justify-between mb-2 mt-2 text-b-black font-medium'>
            <h1>Order total</h1>
            <p>$524.00</p>
          </div>


          <h4 className='mt-6 text-b-black  font-medium text-2xl mb-4'>Shipment Method</h4>


        <Shipment/>
            
         
          </div>






        <div className='w-full '>
          <h2 className='font-display text-xl font-semibold mt-8'>Product Detail</h2>
          <h3 className='text-b-dark-gray'>Complete your purchase by providing your payment details.</h3>

          <h2 className='font-display text-xl font-semibold mt-4 mb-3'>Shipping Address</h2>

          
          <div className='grid grid-cols-2 gap-4 w-full'>

          <Input/>
          <Input/>
          <Input/>
          <Input/>
          <Input/>
          <Input/>
          <Input/>
          <Input/>
          </div>



          <h2 className='font-display text-xl font-semibold mt-10 mb-3'>Select payment method</h2>
          <div className='grid grid-cols-2 gap-4 w-full'>

<Input/>
<Input/>
<Input/>
            <Input />
            
 
          </div>
          
          <span className='flex gap-2 items-center my-4'>
             <input type="checkbox" name="" id="" /> <p>Use shipping address as billing address</p>
           </span>
            
            <button className='btn-primary px-20 flex items-center gap-4'> Pay $524.00 <img src= {RightArrow} alt="ff" /></button>
     
 


        
        </div>
        
      </div>


        
    </div>

   
  )
}

export default Checkout
