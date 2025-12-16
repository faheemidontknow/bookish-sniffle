import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Main from "./components/main";

const ShopPage = () => {
  const ShopImages = [
    {
      image: "img1.png",
      brand: "ACCESSORIES",
      name: "Alexander Sofa",
      price: "$34.00",
      tag: "10% off",
    },
    {
      image: "img2.png",
      brand: "ACCESSORIES",
      name: "Alexander Sofa",
      price: "$34.00",
      tag: "10% off",
    },
    {
      image: "img3.png",
      brand: "ACCESSORIES",
      name: "Alexander Sofa",
      price: "$34.00",
      tag: "10% off",
    },
    {
      image: "img4.png",
      brand: "ACCESSORIES",
      name: "Alexander Sofa",
      price: "$34.00",
      tag: "10% off",
    },
    {
      image: "img5.png",
      brand: "ACCESSORIES",
      name: "Alexander Sofa",
      price: "$34.00",
      tag: "10% off",
    },
    {
      image: "img6.png",
      brand: "ACCESSORIES",
      name: "Alexander Sofa",
      price: "$34.00",
      tag: "10% off",
    },
    {
      image: "img7.png",
      brand: "ACCESSORIES",
      name: "Alexander Sofa",
      price: "$34.00",
      tag: "10% off",
    },
    {
      image: "img8.png",
      brand: "ACCESSORIES",
      name: "Alexander Sofa",
      price: "$34.00",
      tag: "10% off",
    },
  ];
  return (
    <div>
      <Header />
      <Main ShopImages={ShopImages} />
      <Footer />
    </div>
  );
};

export default ShopPage;
