import React from 'react'
import Main from './component/Main'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {Facebook,Twitter,Linkedin,Instagram, Phone, MapPin } from 'lucide-react' 

const HomePage = () => {

  const images=[
    "Sofa.png",
    "Design Chair.png",
    "Cotton Chair.png",
  ]

  const product =[
    {
       name:"Sofa",
       price:120.99,
       image:"Sofa.png"
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
       name:"Wicker Hanging Chair",
       price:120.99,
       image:"Wicker Hanging Chair.png"
    },
    {
       name:"Design Chair",
       price:120.99,
       image:"Design Chair.png"
    },
    {
       name:"Twist Chair",
       price:120.99,
       image:"Twist Chair.png"
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



