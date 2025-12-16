import React from "react";

export default function TopSection({title}) {
  return (
    <section
      style={{ backgroundImage: `url('/img60.jpg') `}}
      className="h-82 gap-6 flex mt-3  flex-col justify-center items-center bg-cover text-white w-full relative"
    >
        <div className="absolute inset-0 bg-black/20"/>
      <h1 className=" font-semibold text-6xl z-10">{title}</h1>
      <p className="font-semibold gap-3 flex z-10">
        <a href="./home" className="hover:text-[#C79A63]">
          Home
        </a>
        <p>|</p>
        {title}
      </p>
    </section>
  );
}
