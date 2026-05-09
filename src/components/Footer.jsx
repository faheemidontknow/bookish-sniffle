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
   <footer className="bg-black/90 flex flex-col justify-center items-center text-white">
  <div className="px-5 lg:px-20 py-16 w-full">

    <section className="flex flex-col lg:flex-row gap-14">

      {/* LOGO + ABOUT */}
      <div>
        <div className="flex text-3xl items-center font-bold">
          <Armchair size={40} className="pr-1" />
          <a href="#">OLLYRAY</a>
        </div>

        <p className="pt-7 font-light text-gray-400 text-xl">
          It helps designers plan out where <br />
          the content will sit, the content <br />
          to be written and approved.
        </p>

        <span className="gap-4 pt-8 flex flex-wrap">
          {icons.map((icon) => (
            <button className="flex px-2 py-2 hover:bg-[#C79A63] hover:text-white bg-white rounded-full">
              <a href="#">{icon}</a>
            </button>
          ))}
        </span>
      </div>

      {/* SERVICES */}
      <div>
        <a className="text-2xl font-bold" href="#">Services</a>
        <div className="flex flex-col gap-5 text-xl pt-7 text-gray-400">
          {footerServices.map((fitem) => (
            <a className="hover:text-white hover:translate-x-1 duration-200" href="#">
              {fitem}
            </a>
          ))}
        </div>
      </div>

      {/* COMPANY */}
      <div>
        <a className="text-2xl font-bold" href="#">Company</a>
        <div className="flex flex-col gap-5 text-xl pt-7 text-gray-400">
          {footerCompany.map((citem) => (
            <a className="hover:text-white hover:translate-x-1 duration-200" href="#">
              {citem}
            </a>
          ))}
        </div>
      </div>

      {/* CONTACT */}
      <div>
        <a className="text-2xl font-bold" href="#">Contact</a>

        <div className="flex flex-col gap-5">
          <p className="text-gray-500 pt-7">{footerContactTop}</p>

          <span className="flex gap-5 items-center pt-8">
            <button className="px-3 py-3 bg-[#C79A63] rounded-full">
              <MapPin />
            </button>
            {footerContact.map((conitem) => (
              <p>{conitem.title}</p>
            ))}
          </span>

          <span className="flex gap-5 pt-8">
            <button className="px-3 py-3 flex items-center bg-[#C79A63] rounded-full">
              <Phone fill="white" />
            </button>
            {footerContact2.map((conitem2) => (
              <div>
                <p>{conitem2.title}</p>
                <p className="text-gray-500 text-sm">{conitem2.subtitle}</p>
              </div>
            ))}
          </span>
        </div>
      </div>

    </section>

    <hr className="text-gray-700 mt-20" />

    {/* BOTTOM SECTION */}
    <section className="font-semibold flex flex-col lg:flex-row gap-5 lg:gap-0 pt-8 justify-between items-center">

      <p>
        © All Copyright 2024 by{" "}
        <a className="hover:text-[#C79A63]" href="#">Addina</a>
      </p>

      <span className="flex gap-2.5">
        <img className="w-28 h-9" src="img22.png" alt="" />
        <img className="h-9" src="img23.png" alt="" />
        <img className="w-28 h-9" src="img24.png" alt="" />
      </span>

      <span className="flex gap-2">
        <a className="hover:text-[#C79A63]" href="#">Terms & Conditions</a>
        |
        <a className="hover:text-[#C79A63]" href="#">Privacy Policy</a>
      </span>

    </section>

  </div>
</footer>
  );
};

export default Footer;
