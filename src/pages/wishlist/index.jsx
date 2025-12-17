import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Main from './component/main'

const WishLIst = () => {
  const cartItems = [
  {
    name: "Arm Chair",
    price: 24,
    image: "Arm Chair.png",
  },
  {
    name: "Brasslegged Chair",
    price: 12,
    image: "Brasslegged Chair.png",
  },
  {
    name: "Cotton Chair",
    price: 42,
    image: "Cotton Chair.png",
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
