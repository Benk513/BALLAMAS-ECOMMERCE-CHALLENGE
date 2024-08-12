import React from 'react'
import TrashIcon from './../../assets/icons/trash.svg'
 import Plus from "./../../assets/icons/plus.svg"
 import Remove from "./../../assets/icons/remove.svg"
const ProductRow = () => {
  return (
    <div className=' flex justify-between font-display text-base text-b-dark-gray font-semibold border-t-2  py-2 lx:py-4 border-b-2 '>
                
    {/* product row */}
    <div className='flex gap-x-4' >
      <div>
      <a href="#" className="w-20 shrink-0 md:order-1">
     <img src="/product3.jpg" alt="" className="w-[60px] h-[60px] lg:w-[100px] lg:h-[100px] object-cover rounded-xl" /> 
    </a>
      </div>
      {/* product description */}
      <div className='font-display lg:gap-2 flex flex-col'>
        <h2 className='lg:text-xl text-[12px] font-bold text-b-black'>T-shirt</h2>
        <h2 className='text-[10px] lg:text-base'>Green-Large</h2>
        <h2 className='text-b-black text-base lg:text-xl font-bold'>$87</h2>
      </div>


    </div>

    {/* operations buttons */}
    <div className='flex items-center justify-center'>
    <div className="flex items-center bg-gray-100 rounded-full px-2 py-2  ">
        <button type="button"    className= " ">
        <img src={Remove} alt="" />
        </button>
        <input type="text" id="counter-input-5"  className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 focus:outline-none focus:ring-0  " placeholder="" value="3" required />
        <button type="button" className=" ">
         <img src={Plus} alt="" />
        </button>
    
      </div>

      <span className=' ml-2 p-2 rounded-full bg-gray-100'><img src={TrashIcon} alt="" /></span>

    
    </div>

    {/* price */}
    <div className='flex items-center' >
      <p className="text-base font-bold text-gray-900  ">$2,997</p>
    </div>
</div>
  )
}

export default ProductRow
