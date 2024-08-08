import React from 'react'

const FooterMenu = () => {
  return (
   
    <div className="flex gap-10">

    <div >
      <h2 className="text-b-white font-semibold">Product</h2>
      <ul className='text-b-gray text-xs'>
        <li>Jacket</li>
        <li>T-shirt</li>
        <li>Jacket</li>
        <li>Shoe</li>
        <li>Sunglasses</li>
      
      </ul>
    </div>

    <div  >
      <h2 className="text-b-white font-semibold">Categories</h2>
      <ul className='text-b-gray text-xs'>
        <li>Man</li>
        <li>Woman</li>
        <li>Kids</li>
        <li>Gift</li>
        <li>New Arrival</li>
      
      </ul>
    </div>

    <div >
      <h2 className="text-b-white font-semibold">Our Social Media</h2>
      <ul className='text-b-gray text-xs'>
        <li>Instagram</li>
        <li>Facebook</li>
        <li>Youtube</li>
        <li>X</li>
      </ul>
    </div>



  </div>
  )
}

export default FooterMenu
