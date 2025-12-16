import React from "react";
import { Play,ChevronRight } from "lucide-react";
import TopSection from "../../../components/TopSection";

const Main = () => {
  return (
    <main>
    <TopSection title={"About Us"}  />
      <section className="px-20 pt-32 gap-20 flex">
        <div>
          <h4 className="text-[#C79A63] text-xl">WE DESIGN FURNITURE</h4>
          <h2 className="font-semibold text-4xl">Our Core Divisions</h2>
          <p className="pt-7 text-gray-700 text-xl whitespace-nowrap overflow-hidden">
            Ut leo. Vivamus aliquet elit ac nisl. Aenean leo ligula, porttitor
            eu, <br /> consequat vitae, eleifend ac enim. Sed cursus turpis
            vitae tortor. <br /> Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices <br /> posuere cubilia Curae; Fusce id
          </p>
          <div className="max-w-md pt-9">
            <p className="text-xl font-semibold pb-2 ">
              Furniture <span className="float-right text-[#C79A63]">70%</span>
            </p>
            <div className="w-[98vh] h-2  bg-gray-200 rounded-full mb-5">
              <div
                className="h-2 bg-[#C79A63]  rounded-full"
                style={{ width: "70%" }}
              ></div>
            </div>

            <p className="text-xl font-semibold pb-2">
              Handmade <span className="float-right text-[#C79A63]">52%</span>
            </p>
            <div className="w-[98vh] h-2 bg-gray-200 rounded-full mb-5">
              <div
                className="h-2 bg-[#C79A63] rounded-full"
                style={{ width: "52%" }}
              ></div>
            </div>

            <p className="text-xl font-semibold pb-2">
              Crafts <span className="float-right text-[#C79A63]">80%</span>
            </p>
            <div className="w-[98vh] h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-[#C79A63] rounded-full"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
          <span className="mt-16">
            <img className="h-[350px] w-[98vh] mt-16 " src="img64.jpg" alt="" />
          </span>
        </div>
        <div className="">
          <img className="h-[120vh] w-[500px]" src="img61.jpg" alt="" />
        </div>
      </section>
      <section className="pt-20 justify-center items-center flex">
        <img className=" h-[80vh] w-full bg-cover" src=" img67.jpg" alt="" />
        <button className=" group px-10 py-10 absolute bg-white rounded-full fill-gray-700 hover:bg-[#C79A63] hover:text-white transition-colors duration-300">
          <a href="https://youtu.be/YkfPITD2C8Y?si=iTpsv0FbsvQpNjJ2">
            <Play className=" fill-gray-700 text-gray-700 group-hover:text-white transition-colors duration-300 group-hover:fill-white " />
          </a>
        </button>
      </section>

         <section className="px-20 py-30  flex justify-center items-center gap-8">
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
    </main>
  );
};

export default Main;
