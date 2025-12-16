import { ChevronRight } from "lucide-react";
import React from "react";
import TopSection from "../../../components/TopSection";

const Main = () => {
  return (
    <main>
      <TopSection title={"Page Not Found"}  />
      <section className="items-center py-36  w-full justify-center flex flex-col">
        <img c className="h-[40vh] w-[40vh]" src="img90.png" alt="" />
        <p className="text-5xl font-bold pt-7">
          Whoops! This Page got <br />
          Lost in converstion
        </p>
         <button className="border bg-[#C79A63] mt-7 px-2 py-4 font-semibold  items-center flex  text-white rounded-full w-[38vh]">
              <a className=" px-5 items-center text-xl flex" href="./home">Go Back Home <ChevronRight className="mt-1"/></a>
            </button>
      </section>
    </main>
  );
};

export default Main;
