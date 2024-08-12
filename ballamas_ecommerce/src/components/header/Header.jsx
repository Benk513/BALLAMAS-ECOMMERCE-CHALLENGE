 import Banner from './Banner'
import NavBar from './NavBar'

const Header = () => {
  return (
    <div>
          <Banner />
          <NavBar/>
    </div>
  )
}

export default Header












const request = await fetch('https://mock.shop/api?query={product(id:%20%22gid://shopify/Product/7982905098262%22){id%20title%20description%20featuredImage%20{id%20url}}}')
const response = await request.json();
console.log(response);
