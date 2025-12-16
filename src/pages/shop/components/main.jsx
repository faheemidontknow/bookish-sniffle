import React from "react";
import {
  List,
  ChevronDown,
  LayoutGrid,
  Menu,
  ShoppingBag,
  Eye,
  Heart,
  ChevronRight
} from "lucide-react";
import TopSection from "../../../components/TopSection";

const Main = ({ ShopImages }) => {
  return (
    <main>
      <TopSection title={"Product"}/>
      <section className="px-20 pt-24">
        <div className="flex justify-between">
          <span>
            <h4 className="text-xl font-semibold">20 item on the List</h4>
          </span>
          <span className="flex gap-6 ">
            <p className="flex font-bold text-gray-700">
              <List size={20} className="mt-0.5" /> FILTER
            </p>
            <p className="font-bold text-gray-300">|</p>
            <span className="border flex justify-between items-center py-3 w-38 pl-3 h-6">
              <select className="">
                <option>Show 20</option>
                <option>This Past Week</option>
                <option>This Past Month</option>
                <option>This Past Year</option>
                <option>All Time</option>
              </select>
            </span>
            <span className="flex gap-4">
              <LayoutGrid className=" text-[#C79A63] fill-[#C79A63]" />
              <Menu className="font-bold text-gray-700" />
            </span>
          </span>
        </div>

        <div
          className="
          pt-10
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        gap-8
      "
        >
          {ShopImages.map((item, index) => (
            <div
              key={index}
              className="flex flex-col border items-center   h-[78vh] border-black/10"
            >
              <div className="relative group bg-white group    p-6 flex flex-col items-center justify-center overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-50 h-50 object-contain mt-15  duration-500 hover:scale-115"
                />
                <button className="bg-[#C79A63] rounded-full px-2  absolute  top-6 left-3 text-white">
                  {item.tag}
                </button>

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

              <div className=" text-semibold border-t  border-t-black/10 w-full pl-5 py-5 mt-2 flex flex-col ">
                <p className="text-[#C79A63]   font-light">{item.brand}</p>
                <h3 className="text-xl font-semibold  hover:text-[#c79a63] ">
                  {item.name}
                </h3>
                <p className="text-[#c79a63] text-xl font-semibold">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
        <span className="py-12 pb-28    flex  gap-3 items-center justify-center">
            <button className="border border-black/10 px-5  text-xl font-bold bg-[#C79A63] text-white py-3 transistion-all duration-300 rounded-full">
                1
            </button>
            <button className="border border-black/10 px-5 text-xl font-bold hover:bg-[#C79A63] hover:text-white py-3 transistion-all duration-300 rounded-full">
                <a href="#">2</a>
            </button>
            <button className="border border-black/10 px-5 text-xl font-bold   hover:bg-[#C79A63] hover:text-white py-3 transistion-all duration-300 rounded-full">
                <a href="#">3</a>
            </button>
            <button className="border border-black/10 px-4  text-xl font-bold hover:bg-[#C79A63] hover:text-white py-4 transistion-all duration-300 rounded-full">
                <a href="#"><ChevronRight/></a>
            </button>
        </span>
      </section>
    </main>
  );
};

export default Main;
