import axios from 'axios'

export const getProducts = async () => {
    await axios.get('https://mock.shop/api?query={products(first:%2020){edges%20{node%20{id%20title%20description%20featuredImage%20{id%20url}%20variants(first:%203){edges%20{node%20{price%20{amount%20currencyCode}}}}}}}}').then(res => {
        console.log(res.data)
    }).catch(err => {
        console.log(err)
    })
}


 getProducts()