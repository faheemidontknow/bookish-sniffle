import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import addToCart from "../../../lib/addToCart";
import {
  ChevronRight,
  Truck,
  CreditCard,
  Clock,
  ShieldCheck,
  Search,
  ShoppingCart,
  Eye,
  Heart,
  ShoppingBag,
  Star,
  Quote,
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
} from "lucide-react";

const Main = ({ images, product, testimonials, sec }) => {
  const [index, setIndex] = useState(0);
  const [SwiperRef3, setSwiperRef3] = useState(null);
  return (
    <main>
      <section className="bg-[#ece5dc8a] h-[140vh] px-20 pt-20   justify-between flex items-center">
        <span>
          <p className="  w-37 py-1.5 px-3 bg-[#ede1d1a5] font-semibold text-[#C79A63] ">
            NEW ARRIVAL...
          </p>
          <h1 className="font-bold text-8xl pt-1.5">
            Elevate <br />
            Your Home <br />
            Aesthetics
          </h1>
          <p className="pt-6 font-light  text-xl">
            A furniture e-commerce company operate in the digital space, <br />
            offering a wide range of furniture products for sale <br /> through
            an online platform.
          </p>
          <span className="flex mt-7 gap-7">
            <button className="border border-[#C79A63]  text-white px-8 duration-500 bg-[#C79A63] py-4 items-center flex cursor-pointer hover:text-[#C79A63] hover:bg-white">
              <a href="#">BUY NOW</a>{" "}
              <ChevronRight size={22} className=" ml-2 " />
            </button>
            <button className="border border-[#C79A63]  cursor-pointer  px-8 duration-500 bg-white text-[#C79A63]  py-4 items-center flex hover:bg-[#C79A63] hover:text-white ">
              <a href="#">VIEW DETAILS</a>
              <ChevronRight size={22} className=" ml-2 " />
            </button>
          </span>
        </span>
        <span className="bg-[#c79a63a1] h-120 w-120  flex items-center justify-center rounded-full">
          <div className="absolute h-96 w-[80vh]  flex  items-center justify-center pl-8  ">
            <img
              className="absolute flex items-center justify-center "
              src={images[index]}
              alt=""
            />
          </div>
        </span>
        <span className="flex flex-col gap-3 mb-35 ml-3 cursor-pointer">
          <span
            onClick={() => setIndex(0)}
            className={` rounded-full  px-1 py-1 ${
              index === 0 ? "bg-[#C79A63]" : "bg-gray-300"
            }`}
          ></span>
          <span
            onClick={() => setIndex(1)}
            className={` rounded-full  px-1 py-1 ${
              index === 1 ? "bg-[#C79A63]" : "bg-gray-300"
            }`}
          ></span>
          <span
            onClick={() => setIndex(2)}
            className={` rounded-full  px-1 py-1 ${
              index === 2 ? "bg-[#C79A63]" : "bg-gray-300"
            }`}
          ></span>
        </span>
      </section>
      <section className="flex flex-row gap-12 px-20 text-xm py-20 justify-center items-center">
        <span className="flex items-center">
          <Truck size={90} className="pr-3 text-[#C79A63]" />
          <p>
            <strong>Free Delivery</strong>
            <br />
            Free shipping on all order
          </p>
        </span>
        <span className="flex items-center">
          <CreditCard size={90} className="pr-3 text-[#C79A63]" />
          <p>
            <strong>Money Return</strong>
            <br />
            Back guarantee under 7 days
          </p>
        </span>
        <span className="flex items-center">
          <Clock size={90} className="pr-3 text-[#C79A63]" />
          <p>
            <strong>online support 24/7</strong>
            <br />
            support online 24hours a day
          </p>
        </span>
        <span className="flex items-center">
          <ShieldCheck size={90} className="pr-3 text-[#C79A63]" />
          <p>
            <strong>Reliable</strong>
            <br />
            Trusted by 1000+ brands
          </p>
        </span>
      </section>
      <section className="px-20 gap-7 flex">
        <div className="bg-blue-100 h-[50vh] w-[90vh]  text-xl flex items-center justify-between">
          <span className=" flex flex-col text-xl  pl-10">
            <p className="  flex text-[#c79a63]">Get 30% off</p>
            <p className="text-3xl font-bold  pt-2.5">
              Wicker Hanging <br />
              Chairs
            </p>
            <button className="border border-[#C79A63] w-45 py-4 px-5 mt-7 text-white bg-[#C79A63]  items-center flex cursor-pointer hover:bg-[#c79a63c3]">
              <a href="#">BUY NOW</a>{" "}
              <ChevronRight size={22} className=" ml-2 " />
            </button>
          </span>
          <span className="">
            <img className="" src="Wicker Hanging Chair.png" alt="" />
          </span>
        </div>
        <div className="bg-blue-100 h-[50vh] w-[90vh]  text-xl flex items-center">
          <span className=" flex flex-col text-xl  pl-10">
            <p className="  flex text-[#c79a63]">Get 15% off</p>
            <p className="text-3xl font-bold  pt-2.5">
              Brasslegged <br />
              Armhair
            </p>
            <button className="border border-[#C79A63] w-45 py-4 px-5 mt-7 text-white bg-[#C79A63]  items-center flex cursor-pointer hover:bg-[#c79a63c3]">
              <a href="#">BUY NOW</a>{" "}
              <ChevronRight size={22} className=" ml-2 " />
            </button>
          </span>
          <span className="">
            <img className=" " src="Sofa Chair.png" alt="" />
          </span>
        </div>
      </section>
      <section className="py-18 px-20 pt-40">
        <span className="text-center flex flex-col gap-4">
          <button className="bg-[#f6e8d9] text-sm h-9 ml-115 w-28   text-center px-6  py-2 text-[#92560c]  font-bold ">
            Top Sale
          </button>
          <h2 className="text-5xl font-semibold mb-6  text-center">
            Featured Products
          </h2>
        </span>

        <Swiper
          spaceBetween={25}
          slidesPerView={4}
          modules={[Autoplay]}
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => setSwiperRef3(swiper)}

          // breakpoints={{
          //   640: { slidesPerView: 2 },
          //   1024: { slidesPerView: 3 },
          // }}
        >
          {product.map((item) => (
            <SwiperSlide key={item.img}>
              <div className="relative group bg-[#f6e8d9] h-84 w-64   p-4 cursor-pointer">
                <img
                  src={item.image}
                  alt=""
                  className="rounded-xl w-full h-[200px] object-contain mt-8.5 hover:scale-115 duration-500"
                />

                <div
                  className="
                opacity-0 
                group-hover:opacity-100 
                transition-all  
                duration-500 
                flex 
                items-center 
                gap-2
                pl-9
                pt-2
                
              "
                >
                  <button onClick={() =>addToCart(item.name, item.price)}  className=" p-3 rounded-full shadow bg-[#c79a63] hover:scale-105 cursor-pointer  text-white transition duration-1000">
                    <ShoppingBag size={18} />
                  </button>

                  <button className="bg-[#c79a63] p-3  text-white rounded-full shadow hover:scale-105 transition duration-1000">
                    <Eye size={18} />
                  </button>

                  <button className="bg-[#c79a63] p-3 text-white rounded-full shadow hover:scale-105 transition duration-1000">
                    <Heart size={18} />
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xl font-bold hover:text-[#c79a63] pt-3 ">
                  {item.name}
                </p>
                <span className="flex text-[#624017] ">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </span>
                <p className="text-[#c79a63] text-xl ">${item.price}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div>
               <div
            className="cursor-pointer px-2 py-2 rounded-full hover:bg-[#c79a63]"
            onClick={() => SwiperRef3.slidePrev()}
          >
            <ChevronLeft />
          </div>
        <div className="cursor-pointer" onClick={() => SwiperRef3.slideNext()}>
          <ChevronRight />
        </div>
         </div> */}
      </section>
      <section className="py-10 px-10 bg-[#d2a26b1e]">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="relative bg-[#D2A26B] text-white  p-10 h-[350px] flex items-center">
            <div className="border-2 border-white pl-16 w-full h-full flex flex-col justify-center">
              <p className="text-sm tracking-widest">HOT DEAL FURNITURE</p>
              <h2 className="text-5xl font-bold leading-tight mt-2">
                Live Furniture
                <br />
                Your Love
              </h2>
              <button className="mt-6 w-max bg-white text-black px-6 py-2 rounded-md font-semibold">
                BUY NOW
              </button>
            </div>
          </div>

          <div className="relative">
            <img
              src="img10.jpg"
              alt=""
              className=" object-cover w-full h-[400px]"
            />

            <div className="absolute top-6 left-6 bg-white rounded-xl shadow-lg p-3 w-[130px]">
              <p className="font-semibold text-sm">Chair Pillow</p>
              <p className="text-[12px]">USD 190.00</p>
              <div className="flex text-yellow-500 text-xs">⭐⭐⭐⭐⭐</div>
            </div>

            <div className="absolute bottom-68 right-38 bg-white rounded-xl shadow-lg p-3 w-[130px]">
              <p className="font-semibold text-sm">Dining Table</p>
              <p className="text-[12px]">USD 190.00</p>
              <div className="flex text-yellow-500 text-xs">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full px-20 py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <div className="flex flex-col  items-center gap-4">
            <button className="bg-[#f6e8d9] text-sm px-6 font-semibold py-2 text-[#c79a63] mr-60 rounded-md">
              This Month
            </button>
            <h2 className="text-5xl font-bold">Trendy Collection</h2>
          </div>

          <div className="flex items-center gap-6 mt-15 text-xl font-semibold">
            {["All Collection", "New In", "Top Rated", "Trending Items"].map(
              (tab, index) => (
                <button
                  key={index}
                  className="pb-1 border-b-2 border-transparent hover:border-gray-300 transition"
                >
                  {tab}
                </button>
              )
            )}
          </div>
        </div>

        <div
          className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        gap-8
      "
        >
          {product.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative group bg-[#f7f3ee]  p-6 flex flex-col items-center justify-center overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-40 h-40 object-contain mb-4 duration-500 hover:scale-115"
                />

                <div
                  className="
                opacity-0 
                group-hover:opacity-100 
                transition-all 
                duration-500 
                flex 
                items-center 
                gap-4
              "
                >
                  <button className=" p-3 rounded-full shadow bg-[#c79a63] hover:scale-105 text-white transition duration-1000">
                    <ShoppingBag size={18} />
                  </button>

                  <button className="bg-[#c79a63] p-3  text-white rounded-full shadow hover:scale-105 transition duration-1000">
                    <Eye size={18} />
                  </button>

                  <button className="bg-[#c79a63] p-3 text-white rounded-full shadow hover:scale-105 transition duration-1000">
                    <Heart size={18} />
                  </button>
                </div>
              </div>

              <div className="mt-3">
                <h3 className="text-xl font-bold  hover:text-[#c79a63]">
                  {item.name}
                </h3>
                ⭐⭐⭐⭐⭐
                <p className="text-[#c79a63] text-xl">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full grid md:grid-cols-2 gap-8 px-4 md:px-20 py-10">
        <div
          className="relative   text-white w-full h-[550px] flex bg-center items-center  px-8 py-8 "
          style={{ backgroundImage: "url('img51.jpg')" }}
        >
          <div className="border px-28 py-15 flex flex-col items-center    pt-24  h-[480px]">
            <div className=" space-y-3">
              <p className=" text-sm opacity-70 font-semibold space-y-3">
                HOT DEAL FURNITURE
              </p>
              <h1 className="text-4xl md:text-4xl font-bold">
                Furniture Limit
              </h1>
              <p className="text-4xl font-bold">
                Offer <br /> <span className="font-bold">30% Off</span>
              </p>

              <button className="mt-4   border flex gap-3 px-5 py-3  hover:bg-[#c79a63] hover:border-0  transition">
                BUY NOW
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>

        <div
          className="relative bg-center text-white w-full h-[550px] flex items-center justify-center px-8 py-8 "
          style={{ backgroundImage: "url('img50.jpg')" }}
        >
          <div className="border px-28 py-15   h-[480px]">
            <div className="text-center space-y-4">
              <p className="tracking-widest text-sm opacity-70">
                HOT DEAL FURNITURE
              </p>
              <h1 className="text-3xl  font-extrabold">Deals Of The Week</h1>

              <div className="flex justify-center gap-4 mt-4">
                <div className="text-center">
                  <p className="text-2xl font-bold">21</p>
                  <span className="text-sm opacity-70">DAYS</span>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">14</p>
                  <span className="text-sm opacity-70">HRS</span>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">50</p>
                  <span className="text-sm opacity-70">MINS</span>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">02</p>
                  <span className="text-sm opacity-70">SECS</span>
                </div>
              </div>

              <button className="mt-4  ml-17 border flex gap-3 px-5 py-3  hover:bg-[#c79a63] hover:border-0  transition">
                BUY NOW
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <section className="relative w-full py-10  flex mb-20">
          <div
            className="absolute inset-0 bg-no-repeat bg-cover "
            style={{ backgroundImage: "url('img52.jpg')" }}
          ></div>

          <div className="absolute inset-0 bg-black/80"></div>

          <div className="relative z-10 text-white">
            <p className="flex justify-center">TESTIMONIALS</p>
            <p className="flex justify-center text-6xl mb-20">
              Client Feedback
            </p>
            <div>
              <div className="px-20 w-[99vw]">
                <Swiper
                  spaceBetween={12}
                  slidesPerView={3}
                  slidesPerGroup={1}
                  modules={[Autoplay]}
                  loop
                  autoplay={{ delay: 2400, disableOnInteraction: false }}
                  onSwiper={(swiper) => setSwiperRef3(swiper)}
                >
                  {testimonials.map((quote) => (
                    <SwiperSlide>
                      <div className="bg-white text-black px-5 py-5">
                        <div>
                          <p className="flex mb-2.5 text-[gold]">
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                          </p>

                          <section className="flex justify-between mb-10">
                            <div>
                              <p className="text-xl font-semibold">
                                {quote.name}
                              </p>
                              <p>{quote.role}</p>
                            </div>
                            <Quote size={40} className="text-[#ac7b3b]" />
                          </section>

                          <p>{quote.text}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>

            <div className="flex justify-center mt-10 gap-5">
              <button
                className="px-5 py-5 rounded-full bg-transparent text-[#ac7b3b] border border-[#ac7b3b] hover:bg-[#ac7b3b] hover:border-[#ac7b3b] hover:text-white transition-all duration-700"
                onClick={() => SwiperRef3.slidePrev()}
              >
                <ArrowLeft />
              </button>

              <button
                className="px-5 py-5 rounded-full bg-transparent text-[#ac7b3b] border border-[#ac7b3b] hover:bg-[#ac7b3b] hover:border-[#ac7b3b] hover:text-white transition-all duration-700"
                onClick={() => SwiperRef3.slideNext()}
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        </section>
      </section>
      <section className="">
        <div className="px-20 pt-22">
          <button className="border   bg-[#f6cfa07f] px-3 py-1  text-[#c79a63] ">
            This Week
          </button>
          <h1 className="text-5xl pt-4 font-bold">Best Sellers</h1>
        </div>
        <div className="grid grid-cols-3  gap-8 px-17 py-10">
          {product.slice(0,6).map((things) => (
            <div className="flex">
              <span className=" bg-[#f5f1ed] flex items-center justify-center">
                <img
                  src={things.image}
                  alt=""
                  className="h-[150px] object-contain w-[150px]"
                />
              </span>
              <span>
                <h2 className="text-2xl font-bold pl-5 hover:text-[#c79a63]">
                  {things.name}
                </h2>
                <p className="pl-5 pt-2 text-xl text-[#c79a63]">
                  ${things.price}
                </p>
                <p className="pl-5 pt-2 text-xl gap-1.5 text-[#955e1c] flex">
                  <Star size={18} />
                  <Star size={18} />
                  <Star size={18} />
                  <Star size={18} />
                  <Star size={18} />
                </p>
              </span>
            </div>
          ))}
        </div>
      </section>
      <section className="h-[120vh] bg-[#ffefdba7] px-20 flex flex-col justify-center items-center">
        <span className="text-center">
          <button className="bg-[#fadebb] px-4 py-1 font-bold text-[#c79a63] ">
            READ BLOG
          </button>
          <h1 className="text-5xl font-bold pt-3">Recent Blog</h1>
        </span>
        <div className="flex gap-10  pt-14">
          <div className=" flex bg-white  h-[350px] w-[550px]">
            <div className="pt-7 ml-7">
              <button className="rounded-3xl bg-[#ffefdba7] px-2 py-1 text-[#c79a63] hover:text-black/20">
                Chair Design
              </button>
              <p className="pt-2">By Alex Manie 07 Aug, 2023</p>
              <p className="text-3xl font-bold pt-2">
                Arrangement <br /> Thats Nearly <br /> perfect.
              </p>
              <button className="px-5 py-5 rounded-full text-[#c79a63] bg-[#ffefdba7]  hover:text-white hover:bg-[#422605ab] items-center mt-9">
                <a href="#">
                  {" "}
                  <ChevronRight size={25} />
                </a>
              </button>
            </div>
            <div>
              <img
                className="h-[300px] w-[250px] pt-8 ml-16"
                src="img11.jpg"
                alt=""
              />
            </div>
          </div>
          <div className=" flex bg-white  h-[350px] w-[550px]">
            <div className="pt-7 ml-7">
              <button className="rounded-3xl bg-[#ffefdba7] px-2 py-1 text-[#c79a63] hover:text-black/20">
                Sofa Design
              </button>
              <p className="pt-2">By Alex Manie 07 Aug, 2023</p>
              <p className="text-3xl font-bold pt-2">
                Eworkstation <br /> Arrangement <br /> That's
              </p>
              <button className="px-5 py-5 rounded-full text-[#c79a63] bg-[#ffefdba7]  hover:text-white hover:bg-[#422605ab] items-center mt-9">
                <a href="#">
                  {" "}
                  <ChevronRight size={25} />
                </a>
              </button>
            </div>
            <div>
              <img
                className="h-[300px] w-[250px] pt-8 ml-16"
                src="img12.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="px-20 pt-30  flex justify-center items-center gap-8">
        <div className="bg-blue-400/20 h-[280px] w-[390px] pl-7 justify-center flex flex-col">
          <p className="text-3xl font-semibold">
            Exclusive offers for <br /> you
          </p>
          <p className="pt-5 text-xm">
            Get weekly deals, valuable health <br /> information and more.
          </p>
          <button className="border flex px-7  py-4 mt-7 hover:bg-[#c79a63] hover:text-white transistion-all duration-500 w-[150px]">
            <a href="#">SIGN UP</a>
            <ChevronRight />
          </button>
        </div>
        <div className="bg-yellow-300/30 h-[280px] w-[390px] pl-7 justify-center flex flex-col">
          <p className="text-3xl font-semibold">
            Join our
            <br /> community
          </p>
          <p className="pt-5 text-xm">
            Get weekly deals, valuable health <br /> information and more.
          </p>
          <button className="border flex px-4  py-4 mt-7 hover:bg-[#c79a63] hover:text-white transistion-all duration-500 w-[200px]">
            <a href="#">JOIN FREE NOW</a>
            <ChevronRight />
          </button>
        </div>
        <div className="bg-pink-400/30 h-[280px] w-[390px] pl-7 justify-center flex flex-col">
          <p className="text-3xl font-semibold">
            Get our <span>FREE</span> app
            <br />
            now!
          </p>
          <p className="pt-5 text-xm">
            Get weekly deals, valuable health <br /> information and more.
          </p>
          <span className="pt-4 flex gap-6">
            <a href="#">
              <img
                className="h-14  hover:-translate-y-1 duration-700"
                src="img13.png"
                alt=""
              />
            </a>
            <a href="#">
              <img
                className="h-14   hover:-translate-y-1 duration-700"
                src="img14.png"
                alt=""
              />
            </a>
          </span>
        </div>
      </section>
      <section className="flex flex-row px-25 gap-24 py-28">
        {sec.map((sec2) => (
          <img className="h-20" src={sec2} alt="" />
        ))}
      </section>
    </main>
  );
};

export default Main;
