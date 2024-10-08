import RightArrow from './../../assets/icons/arrow-right.svg'
import Bank from './../../assets/icons/bank.svg'
import Card from './../../assets/icons/card.svg'

import Order from './Order'
import Discount from './Discount'
import Shipment from './Shipment'
 
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

       
          <div className='flex-col'>
                
                <label htmlFor="firstName" className='font-display text-lg '>First Name</label>
                <div>
                <input type="text" name="firstName" id="" placeholder='Enter your first name' className='font-display text-md border rounded-full border-b-black px-4 py-2 w-[250px]' />
                </div>
            </div>
            

          <div className='flex-col'>
                
                <label htmlFor="firstName" className='font-display text-lg '>Last Name</label>
                <div>
                <input type="text" name="firstName" id="" placeholder='Enter your last name' className='font-display text-md border rounded-full border-b-black px-4 py-2 w-[250px]' />
                </div>
          </div>
            

          <div className='flex-col'>
                
                <label htmlFor="firstName" className='font-display text-lg '>Email address</label>
                <div>
                <input type="text" name="firstName" id="" placeholder='Enter your email address' className='font-display text-md border rounded-full border-b-black px-4 py-2 w-[250px]' />
                </div>
            </div>
            

          <div className='flex-col'>
                
                <label htmlFor="firstName" className='font-display text-lg '>Phone Number</label>
                <div>
                <input type="text" name="firstName" id="" placeholder='Enter your phone number' className='font-display text-md border rounded-full border-b-black px-4 py-2 w-[250px]' />
                </div>
          </div>
            



       
          <div className='flex-col'>
                
                <label htmlFor="firstName" className='font-display text-lg '>Address Name</label>
                <div>
                <input type="text" name="firstName" id="" placeholder='Enter your address' className='font-display text-md border rounded-full border-b-black px-4 py-2 w-[250px]' />
                </div>
            </div>
            

          <div className='flex-col'>
                
                <label htmlFor="firstName" className='font-display text-lg '>City</label>
                <div>
                <input type="text" name="firstName" id="" placeholder='Enter your city' className='font-display text-md border rounded-full border-b-black px-4 py-2 w-[250px]' />
                </div>
          </div>
            

          <div className='flex-col'>
                
                <label htmlFor="firstName" className='font-display text-lg '>Region  </label>
                <div>
                <input type="text" name="firstName" id="" placeholder='Select region' className='font-display text-md border rounded-full border-b-black px-4 py-2 w-[250px]' />
                </div>
            </div>
            

          <div className='flex-col'>
                
                <label htmlFor="firstName" className='font-display text-lg '>Postal Code  </label>
                <div>
                <input type="text" name="firstName" id="" placeholder='Enter your postal code' className='font-display text-md border rounded-full border-b-black px-4 py-2 w-[250px]' />
                </div>
          </div>
            




          </div>



          <h2 className='font-display text-xl font-semibold mt-10 mb-3'>Select payment method</h2>
          <div className='flex flex-wrap gap-x-2 '>
          
          <div className='flex flex-col items-start gap-2 justify-center mb-4 border h-[80px] border-b-black rounded-2xl  px-4 w-2/5 ' >
              <img src={Card} alt="ee" />
               <p>Debit/Credit Card</p>
              
            </div>
          <div className='flex flex-col items-start gap-2 justify-center mb-4 border h-[80px] border-b-black rounded-2xl  px-4 w-1/2'>
              <img src={Bank} alt="ee" />
               <p>Virtual account</p>
              
            </div>
            

            <div className='flex-col flex-2   w-full mb-4'>
           
              
                <input type="text" name="firstName" id="" placeholder='Card number' className='font-display text-md border rounded-full border-b-black px-4 py-2 w-[100%]' />
                
            </div>
            <div className='flex-col w-2/5 mr-4'>
              
                <input type="text" name="firstName" id="" placeholder='Enter your postal code' className='font-display text-md border rounded-full border-b-black px-4 py-2 w-[100%]' />
                
            </div>
            
            <div className='flex-col w-2/5 '>
                         
                <input type="text" name="firstName" id="" placeholder='Security code  ' className='font-display text-md border rounded-full border-b-black px-4 py-2 w-[100%]' />
                 
          </div>

            
 
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
