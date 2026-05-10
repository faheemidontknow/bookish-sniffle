import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Main from "./components/main";

const ShopPage = () => {
  const shopImages = [
    {
      image: "Arm Chair.png",
      brand: "ACCESSORIES",
      name: "Alexander Sofa",
      price: "$34.00",
      tag: "10% off",
    },
    {
      image: "Arm Chair.png",

      brand: "ACCESSORIES",
      name: "Alexander Sofa",
      price: "$34.00",
      tag: "10% off",
    },
    {
      image: "Arm Chair.png",

      brand: "ACCESSORIES",
      name: "Alexander Sofa",
      price: "$34.00",
      tag: "10% off",
    },
    {
      image: "Arm Chair.png",

      brand: "ACCESSORIES",
      name: "Alexander Sofa",
      price: "$34.00",
      tag: "10% off",
    },
    {
      image: "Arm Chair.png",

      brand: "ACCESSORIES",
      name: "Alexander Sofa",
      price: "$34.00",
      tag: "10% off",
    },
    {
      image: "Arm Chair.png",

      brand: "ACCESSORIES",
      name: "Alexander Sofa",
      price: "$34.00",
      tag: "10% off",
    },
    {
      image: "Arm Chair.png",

      brand: "ACCESSORIES",
      name: "Alexander Sofa",
      price: "$34.00",
      tag: "10% off",
    },
    {
      image: "Arm Chair.png",

      brand: "ACCESSORIES",
      name: "Alexander Sofa",
      price: "$34.00",
      tag: "10% off",
    },
  ];
  return (
    <div>
      <Header />
      <Main shopImages={shopImages} />
      <Footer />
    </div>
  );
};

export default ShopPage;
