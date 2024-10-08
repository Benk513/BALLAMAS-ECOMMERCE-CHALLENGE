import { Link } from "react-router-dom"
 import Cart from "./../../assets/icons/cart.svg"
const Product = ({ item }) => {

  //object destructuring
  const urlImage = item.node.featuredImage.url
  const title = item.node.title
  let amount = (item.node.variants.edges[0].node.price.amount) *1
  
  console.log(amount)
  return (
    <div className="text-start  relative overflow-hidden ">
      <a href="#" className="group relative mb-2 block h-100 overflow-hidden  bg-gray-100 lg:mb-3 ">
        <img src={urlImage} alt="product image" className="rounded-2xl   object-cover transition duration-300 group-hover:scale-110 h-full w-full hover:bg-black/80 hover:brightness-75" loading="lazy" /></a>
      
          <h2 className="font-display mt-4 text-xl lg:text-2xl">{title} </h2>
      <p className="text-b-dark-gray text-xl lg:text-xl font-display">CAD {amount}</p>

        
      <div className="absolute  lg:text-base grid grid-cols-2 gap-1 opacity-0 left-0 w-full bottom-1/4 hover:opacity-100 transition-all p-5 text-xs   ">
        <button className={"px-5 py-3 gap-1.5 bg-b-white rounded-full flex items-center "}> 
          <img src={Cart} alt="" />
              ADD TO CART 
            </button>
      
          <button className="px-5 py-3 bg-transparent border rounded-full  border-b-white text-b-white  "
          >
            BUY NOW
          </button>
        </div>


    {/* get 20% reduction for every product over 100 cad */}
      {amount > 100 ?
        <div className="absolute top-5 left-5 ">
              <p className="bg-b-white rounded-full px-2 py-2  lg:px-4 lg:py-2 text-xs lg:text-base font-display font-bold">
              
              Get OFF 20%
          </p>
      </div> :''}

    </div>
  )
}

export default Product



{/* <div>
<a href="#" className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
  <img src="https://images.unsplash.com/photo-1619066045029-5c7e8537bd8c?auto=format&q=75&fit=crop&w=600" loading="lazy"  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
</a>

<div>
  <a href="#" className="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg">Lazy Bottle</a>

  <div className="flex items-end gap-2">
    <span className="font-bold text-gray-800 lg:text-lg">$9.00</span>
  </div>
</div>
</div> */}