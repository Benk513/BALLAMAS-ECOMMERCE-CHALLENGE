import React from 'react'

const Input = () => {
  return (
    <div className='flex-col'>
            
    <label htmlFor="firstName" className='font-display text-lg '>First Name</label>
    <div>
    <input type="text" name="firstName" id="" placeholder='Enter your first name' className='font-display text-md border rounded-full border-b-black px-4 py-2 w-[250px]' />
    </div>
  </div>
  )
}

export default Input
