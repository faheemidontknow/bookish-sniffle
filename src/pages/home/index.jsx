import React from 'react'
import Main from './component/Main'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {Facebook,Twitter,Linkedin,Instagram, Phone, MapPin } from 'lucide-react' 

const HomePage = () => {

  const images=[
    "img1.png",
    "img2.png",
    "img3.png",
  ]

  const product =[
    {
       name:"Trendy Chair",
       price:120.99,
       image:"Trendy Chair.png"
    },
 
    {
       name:"Brasslegged Chair",
       price:120.99,
       image:"Brasslegged Chair.png"
    },
    {
       name:"Arm Chair",
       price:120.99,
       image:"Arm Chair.png"
    },
    {
       name:"Sofa Chair",
       price:120.99,
       image:"Sofa Chair.png"
    },
    {
       name:"Wooden Chair",
       price:120.99,
       image:"Wooden Chair.png"
    },
    {
       name:"Design Chair",
       price:120.99,
       image:"Design Chair.png"
    },
    {
       name:"Vercel Chair",
       price:120.99,
       image:"vercel Chair.png"
    },
    {
       name:"Cotton Chair",
       price:120.99,
       image:"Cotton Chair.png"
    },
 
  ]
  const testimonials = [
  {
    name: "Annette Black",
    role: "Dog Trainer",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vestibulum vitae egestas lectus interdum fusce odio lacus.",
  },
  {
    name: "Ralph Edwards",
    role: "UI/UX Designer",
    rating: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vestibulum vitae egestas lectus interdum fusce odio lacus.",
  },
  {
    name: "Jerome Bell",
    role: "Web Designer",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vestibulum vitae egestas lectus interdum fusce odio lacus.",
  },
  {
    name: "Annette Black",
    role: "Dog Trainer",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vestibulum vitae egestas lectus interdum fusce odio lacus.",
  },
  {
    name: "Ralph Edwards",
    role: "UI/UX Designer",
    rating: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vestibulum vitae egestas lectus interdum fusce odio lacus.",
  },
  {
    name: "Jerome Bell",
    role: "Web Designer",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vestibulum vitae egestas lectus interdum fusce odio lacus.",
  },
  {
    name: "Annette Black",
    role: "Dog Trainer",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vestibulum vitae egestas lectus interdum fusce odio lacus.",
  },
  {
    name: "Ralph Edwards",
    role: "UI/UX Designer",
    rating: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vestibulum vitae egestas lectus interdum fusce odio lacus.",
  },
  {
    name: "Jerome Bell",
    role: "Web Designer",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vestibulum vitae egestas lectus interdum fusce odio lacus.",
  },
  {
    name: "Annette Black",
    role: "Dog Trainer",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vestibulum vitae egestas lectus interdum fusce odio lacus.",
  },
  {
    name: "Ralph Edwards",
    role: "UI/UX Designer",
    rating: 4,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vestibulum vitae egestas lectus interdum fusce odio lacus.",
  },
  {
    name: "Jerome Bell",
    role: "Web Designer",
    rating: 5,
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vestibulum vitae egestas lectus interdum fusce odio lacus.",
  },
];

  const sec =[
    "img15.png",
    "img16.png",
    "img17.png",
    "img18.png",
    "img19.png",
  ]


  // footerData.js




  
  return (
    <>
    <Header />
    <Main images={images}  product={product} testimonials={testimonials}  sec={sec}/>
    <Footer /></>
  )
}

export default HomePage



