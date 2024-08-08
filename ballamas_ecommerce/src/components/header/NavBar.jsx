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
      <nav className="container hidden lg:flex border-b-light-gray border-b justify-between py-5">
        <ul className="flex gap-5 relative">
          {nav1.map((el) => {
              return (
                 
                <li key={el.id}><a href={el.url} >{el.name} </a></li>
                 
              )
                  
          })}
           </ul>
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
            
            
            <div className="container  bg-white flex justify-between lg:hidden border-b-light-gray border-b-4">
                
                <img src= {HamburgerIcon}  alt=""  onClick={() => setToggle(!toggle)} className="cursor-pointer" size={20}/>
                      
                <Logo />
                <span className="flex justify-between gap-1">
                
          
                <img src={SearchIcon} alt="" />
                
              
                <img src= {CartIcon} alt="" />
          
                </span>
                  

                
       
        
        
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
   <div className={toggle ? "fixed top-0 right-0 w-[330px] h-screen  z-10 duration-300" : "fixed top-0 right-[-100%] w-[300px] h-screen bg-white z-999 duration-300"}>
     <span className="inline-block bg-nft-50 p-2 rounded-lg absolute right-5  top-5">

     <img src= {HamburgerClose} onClick={() => setToggle(!toggle)} className="cursor-pointer" size={20} />
     </span>

     {/* Side Drawer Navigation */}
  

     {/* Side Navigation drawer buttons */}

     <div className="lg:hidden   gap-5 items-start mt-[40px] ml-[26px] ">        
               
                <span className="flex justify-between gap-1">
                
                <Logo />          
                <img src={SearchIcon} alt="" />               
              
                <img src= {CartIcon} alt="" />
          
                </span>

                <ul className="text-center gap-5 mb-5">
          {nav1.map((el) => {
              return (
                 
                <li key={el.id}><a href={el.url} >{el.name} </a></li>
                 
              )    
          })}
                </ul>
              
                           
            <ul className=" text-center gap-5">
          {nav2.map((el) => {
              return (
                 
                      <li key={el.id}><a href={el.url} >{el.name} </a></li>
                 
              )
                  
          })}
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



 