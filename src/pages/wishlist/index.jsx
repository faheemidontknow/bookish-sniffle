import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Main from './component/main'

const WishLIst = () => {
  const cartItems = [
  {
    name: "Alexander Sofa",
    price: 24,
    image: "img3.png",
  },
  {
    name: "Curaskin Lipgel",
    price: 12,
    image: "img2.png",
  },
  {
    name: "Leather Chair",
    price: 42,
    image: "img6.png",
  },
];

  return (
    <div>
      <Header/>
      <Main cartItems={cartItems}/>
      <Footer/>
    </div>
  )
}

export default WishLIst
