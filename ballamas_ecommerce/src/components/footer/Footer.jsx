import FooterMenu from "./FooterMenu"

 
const Footer = () => {
  return (
    <footer className=" bg-b-black  py-14 mt-20">

      <div className="container flex-col lg:flex justify-between ">
        <div className="flex-col gap-3">
          <h2 className="logo-white text-4xl font-chillax">BALLAMAS</h2>
          <p className="text-b-gray mt-4 w-4/5">Subscribe to our newsletter  for upcoming products and best discount for all items</p>


          <div className="flex gap-2 mt-3">
            
            <input type="text" name="" id="" placeholder="Your email" className="rounded-full px-4 py-2 bg-b-black border border-b-white text-b-white font-display w-[316px] focus:ring-2" />

            <button className="btn-secondary font-display">Subscribe</button>
          </div>

        </div> 

        <FooterMenu/>




      </div>
      <div className="container mt-6"><p className="text-b-dark-gray text-center">© BALLAMAS 2024 by waris</p></div>
    </footer>
      
    
  )
}

export default Footer
