import Logo from "./Logo"
import { nav1, nav2 } from "./../../data/index"
import SearchIcon from "./../../assets/icons/searchIcon.svg"
import CartIcon from "./../../assets/icons/cartIcon.svg"
import HamburgerIcon from "./../../assets/icons/hambuger-menu.svg"

 
const NavBar = () => {
    return (
      
        <>       
      <div className="container hidden lg:flex border-b-light-gray border-b-4">
           <ul>
          {nav1.map((el) => {
              return (
                 
                      <li key={el.id}>{el.name}</li>
                 
              )
                  
          })}
           </ul>
          <Logo />
          
          <ul>
          {nav2.map((el) => {
              return (
                 
                      <li key={el.id}>{el.name}</li>
                 
              )
                  
          })}
          </ul>

          <img src={SearchIcon} alt="" />
          


     
      </div>
      
            
            {/* Mobile Menu */}
            
            
            <div className="container  bg-white flex justify-between lg:hidden border-b-light-gray border-b-4">
                
                <img src= {HamburgerIcon} alt="" />
                      
                <Logo />


                <span className="flex justify-between gap-1">
                
                    
                <img src={SearchIcon} alt="" />
                
                    
          
                <img src= {CartIcon} alt="" />
          
                </span>
                  

                
    </div>
      
        </>
  )
}

export default NavBar
