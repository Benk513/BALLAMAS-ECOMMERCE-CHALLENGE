 import Arrow from './../../assets/icons/arrow.svg'
const Hero = () => {
  return (
    <section className="w-full h-[372px] lg:h-[500px] bg-cover bg-center rounded-[52px] flex flex-col justify-center items-center text-center gap-4 relative z-0 mt-10">
      
      {/* ---- text lines decorations---- */}
      <div className='flex items-center gap-4'>
        <span className={"border-b border-b-white w-[66px]"} />
        <p className='text-baseline font-display text-b-white  '>We bring new fashion to the world    </p>
        <span className={"border-b border-b-white w-[66px]"} />
      </div>


       
      
      {/* main title */}
      <h1 className=" text-2xl lg:text-5xl font-chillax font-bold text-b-white w-4/5 ">DISCOVER THE LATEST FASHION TRENDS HERE</h1>

      {/* second title */}
      <p className="text-xs px-4 lg:text-base font-display text-b-white ">Discover a world of fashion with our meticulously curated outfits. Shop now to update your wardrobe with chic and stylish outfits.</p>

      
      {/* call to action buttons */}
      <div className="flex items-center z-0 mt-6" >
        <button className="bg-my-button rounded-full text-b-black font-display py-3 px-5 bg-b-white text-[18px]">Start shopping</button>

        <button className="py-3 px-3 bg-b-white rounded-full"><img src={Arrow} alt="" /></button>
      </div>

          {/* overlay at 25 */}
      {/* <div className='absolute inset-0 opacity-25 bg-black -z-10 rounded-[52px]'></div> */}
      
      <img src="/heroBackground.jpg" className='absolute object-cover h-full brightness-75 -z-10 w-full rounded-[52px]' alt="" />
      {/* bg-my-image  */}

    </section>
  )
}

export default Hero
