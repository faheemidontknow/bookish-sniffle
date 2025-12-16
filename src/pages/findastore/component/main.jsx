import React from "react";
import TopSection from "../../../components/TopSection";

const Main = () => {
  return (
    <main>
      <TopSection title={"Find A Store"} />
      <section className="px-20 pt-32 gap-12 flex">
        <div>
          <div className="bg-[#f7e9d8b4]  px-9 py-9 h-[300px] w-[85vh]">
            <span className="flex justify-between">
              <h3 className="font-semibold text-2xl">California</h3>
              <p className="font-semibold text-2xl text-[#C79A63]">01</p>
            </span>
            <div className="flex justify-between py-9">
              <span>
                <h4 className="text-xl text-[#C79A63]">Address</h4>
                <p className="pt-3 text-xl text-gray-700">
                  4517 Washington <br />
                  Ave. <br />
                  Manchester, <br /> Kentucky 39495
                </p>
              </span>
              <div className="border-r-2 border-r-[#C79A63] h-18 mt-12 ml-5"></div>
              <span className=" pt-10 text-[18px] text-gray-700">
                <p>
                  Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                  elit. <br /> Nulla tellus turpis.
                </p>
              </span>
            </div>
          </div>

          <span className="mt-16">
            <img className="h-[350px] w-[85vh] mt-16 " src="img64.jpg" alt="" />
          </span>
        </div>
        <div className="">
          <img className="h-[105vh] w-[500px]" src="img61.jpg" alt="" />
        </div>
      </section>
      <section className=" pb-28 px-20 pt-12 gap-12 flex">
        <div className="">
          <img className="h-[105vh] w-[500px]" src="img61.jpg" alt="" />
        </div>
        <div>
          <div className="bg-[#f7e9d8b4]  px-9 py-9 h-[300px] w-[85vh]">
            <span className="flex justify-between">
              <h3 className="font-semibold text-2xl">New York</h3>
              <p className="font-semibold text-2xl text-[#C79A63]">01</p>
            </span>
            <div className="flex justify-between py-9">
              <span>
                <h4 className="text-xl text-[#C79A63]">Address</h4>
                <p className="pt-3 text-xl text-gray-700">
                  4517 New York Ave. <br />
                  Ave. <br />
                  Manchester, <br /> Kentucky 39495
                </p>
              </span>
              <div className="border-r-2 border-r-[#C79A63] h-18 mt-12 ml-5"></div>
              <span className=" pt-10 text-[18px] text-gray-700">
                <p>
                  Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                  elit. <br /> Nulla tellus turpis.
                </p>
              </span>
            </div>
          </div>

          <span className="mt-16">
            <img className="h-[350px] w-[85vh] mt-16 " src="img64.jpg" alt="" />
          </span>
        </div>
      
      </section>
    </main>
  );
};

export default Main;
