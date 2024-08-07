 
const Product = () => {
  return (
    <div className="text-start relative">
          <img src="/summerShirt.jpg" alt="product image" className="rounded-[32px]" />
          <h2 className="font-display mt-4 text-3xl">SUMMER SHIRT </h2>
          <p className="text-b-dark-gray font-display">$99</p>



          <div className="absolute top-5 left-5 ">
              <p className="bg-b-white rounded-full px-4 py-2 text-base font-display font-bold">
              
              Get OFF 20%
          </p>
          </div>
    </div>
  )
}

export default Product
