import React from "react";
import { Armchair, MapPin, Phone } from "lucide-react";
import {
  footerCompany,
  footerContact,
  footerContact2,
  footerContactTop,
  footerServices,
  icons,
} from "../constants/footer.jsx";

const Footer = () => {
  return (
    <footer className="bg-black/90 flex flex-col justify-center items-center  h-[95vh] bottom-0 text-white">
      <div className="px-20 py-16 ">
        <section className="flex  gap-14">
          <div>
            <div className="flex text-3xl items-center font-bold">
              <Armchair size={40} className="items-center pr-1 flex " />
              <a href="#"> OLLYRAY</a>
            </div>
            <p className=" pt-7 font-light text-gray-400 text-xl">
              It helps designers plan out where <br /> the content will sit, the
              content <br /> to be written and approved.
            </p>
            <span className="gap-4 pt-8 flex">
              {icons.map((icon) => (
                <button className="gap-4 borde flex  px-2 py-2  hover:bg-[#C79A63] hover:text-white hover:fill-white bg-white rounded-full">
                  <a className="  flex gap-4" href="#">
                    {icon}
                  </a>
                </button>
              ))}
            </span>
          </div>

          <div>
            <a className="text-2xl font-bold" href="#">
              Services
            </a>
            <div className="flex flex-col gap-5 text-xl pt-7 text-gray-400">
              {footerServices.map((fitem) => (
                <a
                  className=" hover:text-white hover:translate-x-1 duration-200"
                  href="#"
                >
                  {fitem}
                </a>
              ))}
            </div>
          </div>

          <div className="pl-12">
            <a className="text-2xl font-bold" href="#">
              Company
            </a>
            <div className="flex flex-col gap-5 text-xl pt-7 text-gray-400">
              {footerCompany.map((citem) => (
                <a
                  className=" hover:text-white hover:translate-x-1 duration-200"
                  href="#"
                >
                  {citem}
                </a>
              ))}
            </div>
          </div>
          <div className="pl-32">
            <a className="text-2xl font-bold" href="#">
              Contact
            </a>
            <div className="flex flex-col gap 5">
              <p className="text-gray-500 pt-7">{footerContactTop}</p>
              <span className="flex gap-5 items-center pt-8">
                <button className="px-3 py-3 bg-[#C79A63] rounded-full ">
                  <MapPin />
                </button>
                {footerContact.map((conitem) => (
                  <p>{conitem.title}</p>
                ))}
              </span>
              <span className="flex gap-5 pt-8">
                <button className="px-3 py-3 flex items-center bg-[#C79A63] rounded-full ">
                  <Phone fill="white" />
                </button>
                {footerContact2.map((conitem2) => (
                  <div className="">
                    <p>{conitem2.title}</p>
                    <p className="text-gray-500 text-sm">{conitem2.subtitle}</p>
                  </div>
                ))}
              </span>
            </div>
          </div>
        </section>
        <hr className="text-gray-700  px-16  mt-20" />
        <section className="font-semibold flex pt-8 justify-between">
          <p className=" font-semibold">
            © All Copyright 2024 by{" "}
            <a className="hover:text-[#C79A63] " href="#">
              {" "}
              Addina
            </a>
          </p>
          <span className="flex gap-2.5">
            <img className="w-28 h-9" src="img22.png" alt="" />
            <img className=" h-9" src="img23.png" alt="" />
            <img className="w-28 h-9" src="img24.png" alt="" />
          </span>
          <span className="flex gap-2">
            <p>
              <a className="hover:text-[#C79A63] " href="#">
                Terms & Conditions
              </a>
            </p>
            |
            <p>
              <a className="hover:text-[#C79A63] " href="#">
                privacy policy
              </a>
            </p>
          </span>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
