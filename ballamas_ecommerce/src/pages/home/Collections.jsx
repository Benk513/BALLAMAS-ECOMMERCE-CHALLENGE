import Arrow from './../../assets/icons/arrow.svg'

const Collections = () => {
  return (
    <div className='text-center mt-20'>
          <h1 className='text-3xl font-semibold uppercase font-chillax'>Our Collection</h1>
          <p className='font-display text-b-dark-gray'>Our latest collection, where classic and contemporary styles converge in perfect harmony.</p>

          <div className='grid grid-cols-3 gap-4 mt-8'>
              
             
              
              <div className='bg-collection1 bg-cover bg-center rounded-[50px] h-[446px] relative flex justify-center items-end'>
    
                  <button className="mb-5 py-3 px-3 bg-b-white rounded-full flex gap-3  uppercase font-bold">Learn Mored<img src={Arrow} alt="" />
                  </button>
            </div>

              <div className='col-span-2 bg-collection2 bg-cover bg-center rounded-[50px] h-[446px] flex flex-col justify-center items-center gap-3'>
                  
                  <h1 className='logo-white font-chillax text-5xl font-bold'>CLASSIC MEN</h1>
                  <p className='text-b-white'>We’re changing the way things get made</p>
    
                   
            </div>


              
          </div>
    </div>
  )
}

export default Collections
