import Logo from "./Logo"
import { nav1, nav2 } from "./../../data/index"
import SearchIcon from "./../../assets/icons/searchIcon.svg"
import CartIcon from "./../../assets/icons/cartIcon.svg"
import HamburgerIcon from "./../../assets/icons/hambuger-menu.svg"
import HamburgerClose from "./../../assets/icons/hambuger-close.svg"
 import { useState } from "react"

 
const NavBar = () => {

  const [toggle, setToggle]= useState(false)
    return (
      
        <>       
        <nav className=" overflow-hidden w-[375px] lg:w-[1440px] mx-auto  hidden lg:flex border-b-light-gray border-b justify-between py-5">
         
        
          {/* First Navigation */}
          
        <ul className="flex gap-5 relative">
          {nav1.map((el) => {
              return (                 
                <li key={el.id}><a href={el.url} >{el.name} </a></li>
              )    
          })}
            
          </ul>
          {/* Logo in the middle */}

          <Logo />


          <div className="flex items-center gap-4">
                    
            <ul className=" flex gap-5">
            {nav2.map((el) => {
                return (
          <li key={el.id}><a href={el.url} >{el.name} </a></li>
                  )
                    
            })}
            
            </ul>
            
              <img src={SearchIcon} alt="" />
        
            </div>
  
      </nav>
      
            
            {/* Mobile Menu */}
            
            
            <div className=" w-[375px]  mx-auto  bg-white flex justify-between   lg:hidden border-b-light-gray border-b-2 py-4">
                
                <img src= {toggle ? HamburgerClose :HamburgerIcon}  alt=""  onClick={() => setToggle(!toggle)} className="cursor-pointer" size={20}/>
                      
                <Logo />
                <div className="flex items-center justify-end gap-  ">               
          
                <img src={SearchIcon} alt="" width={20}/>               
              
               <a href="/cart"><img src= {CartIcon} alt="" width={20} />   </a>        
                </div>
                
        
        
   {/* Navigation Sidebar */}

   <div className="  lg:hidden">
   <span className="inline-block bg-nft-50 p-2 rounded-lg"
   onClick={() =>setToggle((prev) => !prev)}>
     
   </span>

   {/* menu */}
   {/* <div className="absolute top-0 right-0 w h-screen bg-white p-5 lg:hidden" style={{ display: toggle ? 'block' : 'none' }}>
     hey click me 


   </div> */}

     {/* Side drawer box */}
   <div className={toggle ? "fixed left-0 bottom-[0%] w-full   z-10 duration-500 ease-in-out" : "fixed left-0 w-full bottom-[100%]  bg-white z-999 duration-500 ease-in-out"}>
     <span className="inline-block bg-nft-50 p-2 rounded-lg absolute right-5  top-5">

    
     </span>

     {/* Side Drawer Navigation */}
  

     {/* Side Navigation drawer buttons */}

     <div className="lg:hidden flex flex-col justify-center text-center gap-4 items-center text-xl mt-[20px] ml-[26px] ">        
                

                <ul className="flex flex-col gap-4  ">
          {nav1.map((el) => {
              return (
                 
                <li key={el.id}><a href={el.url} >{el.name} </a></li>
                 
              )    
          })}
                </ul>
              
                           
            <ul className="  flex flex-col gap-4    ">
          {nav2.map((el) => {
              return (
                 
                      <li key={el.id}><a href={el.url} >{el.name} </a></li>
                 
              )
                  
          })}
                </ul>
                
                <ul className="flex flex-col gap-4  " >
                  <li>FAQs</li>
                  <li>Contact Us</li>
                </ul>


                  
     </div>
     

     {/* overlay */}
     {toggle && <div className="bg-white absolute w-full h-screen -z-10 top-0 left-0"></div>}

 
 </div> </div>


 </div>

      
        </>
  )
}

export default NavBar



 