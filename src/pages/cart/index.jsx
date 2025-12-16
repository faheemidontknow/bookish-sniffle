import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Main from "./component/main";
import getItems from "../../lib/getItems";
const CartPage = () => {
  const [cartItems, setCartItems] = useState(null);
  //     const cartItems = [
  //   {
  //     name: "Alexander Sofa",
  //     price: 24,
  //     image: "img3.png",
  //   },
  //   {
  //     name: "Curaskin Lipgel",
  //     price: 12,
  //     image: "img2.png",
  //   },
  //   {
  //     name: "Leather Chair",
  //     price: 42,
  //     image: "img6.png",
  //   },
  // ];
  useEffect(() => {
    (async function () {
      const cart = await getItems();
      console.log(cart);
      setCartItems(cart.items);
    })();

  }, []);


  return (
    <div>
      <Header />
      <Main cartItems={cartItems} />
      <Footer />
    </div>
  );
};

export default CartPage;
