import React, { useState } from "react";
import {
  ChevronDown,
  PhoneCall,
  Armchair,
  Heart,
  ShoppingBagIcon,
  AlignLeft,
  X,
  Search,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
} from "lucide-react";
import { links, nav1, nav12, nav13, pages } from "../constants/home";
import { Link } from "react-router";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = (i) => {
    if (i === 3) {
      setIsHover(true);
    }
  };

  return (
    <header className="relative">
      <div className="flex bg-[#C79A63] h-11 justify-between  items-center text-white px-20">
        <span className="gap-2 flex items-center cursor-pointer">
          <PhoneCall size={15} />
          {nav1.map((item) => (
            <p>{item}</p>
          ))}
        </span>

        <span className="font-bold">
          {nav12.map((item2) => (
            <p>{item2}</p>
          ))}
        </span>

        <span className="flex gap-3 items-center ml-18 cursor-pointer">
          {nav13.map((item3) => (
            <>
              <p>{item3}</p>
              <ChevronDown size={20} />
            </>
          ))}
        </span>
      </div>

      <div className="bg-white gap-3 flex h-19 px-20 justify-between">
        <div className="flex gap-7">
          <div className="flex text-3xl items-center font-bold">
            <Armchair size={40} className="items-center pr-1 flex" />
            ADDINA
          </div>

          <span className="flex">
            {links.map((linkitem, index) => (
              <div className="flex relative">
                <Link
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseOut={() => setIsHover(false)}
                  className="items-center font-semibold flex gap-1 hover:text-[#C79A63] transition-colors duration-700 pl-5"
                  to={`/${linkitem.toLowerCase()}`}
                >
                  {linkitem}
                </Link>
                {index === 3 && isHover && (
                  <div
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseOut={() => setIsHover(false)}
                    className=""
                  >
                    <span className=" flex  flex-col absolute z-50 -bottom-36 left-2.5  bg-white">
                      {pages.map((pageitem) => (
                        <Link
                          onMouseEnter={() => handleMouseEnter(index)}
                          onMouseOut={() => setIsHover(false)}
                          className="hover:bg-[#C79A63] font-semibold py-3 pl-3  pr-24 text-nowrap  border-b  border-b-gray-300 hover:text-white"
                          to={"/findastore"}
                        >
                          {pageitem}
                        </Link>
                      ))}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </span>
        </div>

        <span className="flex gap-4 items-center cursor-pointer">
            <Link to="/wishlist"><Heart size={25} /></Link>
            <Link to="/cart"> <ShoppingBagIcon size={25} /></Link>

          <AlignLeft size={35} onClick={() => setOpen(true)} />
        </span>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black/80 bg-opacity-50  z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-[400px] bg-[#111] border-l-[#C79A63] border-l-2 text-white z-50 p-6 
        transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* <div className="flex justify-end">
          <button
            className="bg-[#C79A63] p-2 rounded-full"
            onClick={() => setOpen(false)}
          >
            <X size={22} />
          </button>
        </div> */}

        <span className="flex text-2xl font-bold mt-6 mb-6 gap-2">
          <Armchair className="mt-1" />
          <h1 className="">ADDINA</h1>
        </span>
        <hr className="text-gray-600" />

        <div className="flex items-center justify-between pt-10 border-b border-gray-600 pb-3 mb-6">
          <input
            type="text"
            placeholder="What are you searching for?"
            className=" w-full  text-sm text-white font-semibold"
          />
          <Search size={18} />
        </div>

        <h2 className="text-xl pt-8 font-bold mb-4">Contact Info</h2>

        <div className="flex items-center  gap-3 mb-4">
          <MapPin
            size={35}
            className=" border px-2  py-2 rounded-full hover:bg-[#C79A63] hover:border-0 duration-300"
          />
          <p className=" hover:text-[#C79A63] duration-300 font-bold pl-2">
            {" "}
            12/A, Mirnada City Tower, NYC
          </p>
        </div>

        <div className="flex items-center gap-3 mb-4">
          <Phone
            size={35}
            className=" border px-2  py-2 rounded-full hover:bg-[#C79A63] hover:border-0 duration-300"
          />
          <p className=" hover:text-[#C79A63] duration-300 font-bold pl-2">
            +088889797697
          </p>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <Mail
            size={35}
            className=" border px-2  py-2 rounded-full hover:bg-[#C79A63] hover:border-0 duration-300"
          />
          <p className=" hover:text-[#C79A63] duration-300 font-bold pl-2">
            support@mail.com
          </p>
        </div>

        <div className="flex gap-2 mt-6">
          <Facebook className="p-2 border border-gray-700 rounded-full w-10 h-10 text-[#C79A63] fill-[#C79A63]  hover:bg-[#C79A63] duration-300 hover:text-white hover:fill-white" />
          <Twitter className="p-2 border border-gray-700 rounded-full w-10 h-10 text-[#C79A63] fill-[#C79A63]  hover:bg-[#C79A63] duration-300 hover:text-white hover:fill-white" />
          <Youtube className="p-2 border border-gray-700 rounded-full w-10 h-10 text-[#C79A63]  hover:bg-[#C79A63] duration-300 hover:text-white" />
          <Linkedin className="p-2 border border-gray-700 rounded-full w-10 h-10 text-[#C79A63] fill-[#C79A63]  hover:bg-[#C79A63] duration-300 hover:text-white hover:fill-white" />
        </div>
      </div>
    </header>
  );
};

export default Header;
