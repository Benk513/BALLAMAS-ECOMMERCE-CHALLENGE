 import Arrow from './../../assets/icons/arrow.svg'
const Hero = () => {
  return (
    <div className=" bg-my-image w-full h-[500px] bg-cover bg-center rounded-[52px] flex flex-col justify-center items-center text-center gap-4 relative z-20 mt-10">
        <p className='text-baseline font-display text-b-white'>We bring new fashion to the world</p>
          <h1 className=" text-5xl font-chillax text-b-white w-4/5 ">DISCOVER THE LATEST FASHION TRENDS HERE</h1>

          <p className="text-baseline font-display text-b-white">Discover a world of fashion with our meticulously curated outfits. Shop now to update your wardrobe with chic and stylish outfits.</p>

          <div className="flex items-center z-10 mt-6" >
              <button className="bg-my-button rounded-full text-b-black font-display py-3 px-5 bg-b-white text-[18px]">Start shopping</button>

              <button className="py-3 px-3 bg-b-white rounded-full"><img src={Arrow} alt="" /></button>
          </div>

          {/* overlay at 25 */}
          <div className='absolute inset-0 opacity-25 bg-black -z-10 rounded-[52px]'></div>

    </div>
  )
}

export default Hero
