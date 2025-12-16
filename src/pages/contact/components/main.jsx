import { Mail, MapPin, Phone, ChevronRight } from "lucide-react";
import React from "react";
import TopSection from "../../../components/TopSection";

const Main = () => {
  return (
    <main>
      <TopSection title={"Contact"}  />
      <section class="px-20 py-20 ">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-[#c58b5a] flex items-center justify-center text-white text-xl">
              <MapPin />
            </div>
            <h3 class="font-semibold text-lg mb-2">Our Location</h3>
            <p class="text-gray-600 hover:text-[#C79A63] cursor-pointer">
              <a href="#">House #5, Street Number #98,</a>
              <br />
              <a href="#">Brasília - 70000-000, Brazil</a>
            </p>
          </div>

          <div className="">
            <div class="w-16 h-16 mx-auto mb-4  rounded-full bg-[#c58b5a] flex items-center justify-center text-white text-xl">
              <Mail />
            </div>
            <h3 class="font-semibold text-lg mb-2">Our Email Address</h3>
            <p class="text-gray-600 hover:text-[#C79A63] cursor-pointer">
              <a href="dogri.com">contact@dogri.com</a>
              <br />
              <a href="dogri.com">support@dogri.com</a>
            </p>
          </div>

          <div>
            <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-[#c58b5a] flex items-center justify-center text-white text-xl">
              <Phone />
            </div>
            <h3 class="font-semibold text-lg mb-2">Contact Phone Number</h3>
            <p class="text-gray-600 hover:text-[#C79A63] cursor-pointer">
              +380961381876
              <br />
              +380961381877
            </p>
          </div>
        </div>
      </section>
      <section className="flex  px-20 pt-7 pb-28 gap-10">
        <div>
          <img className="h-[110vh] w-[98vh]" src="img70.jpg" alt="" />
        </div>

        <div className="bg-[#C79A63] h-[99vh] w-[95vh] px-20 py-16">
          <div className="flex gap-6  mb-6">
            <input
              type="text"
              placeholder="Full Name*"
              className="w-[40vh] p-4  outline-none bg-white"
            />
            <input
              type="email"
              placeholder="Email Address*"
              className="w-[40vh] p-4  outline-none bg-white"
            />
          </div>

          
          <div className="flex gap-6 mb-6">
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-[40vh] p-4  bg-white outline-none"
            />
            <input type="date" className="w-[40vh] bg-white p-4  outline-none" />
          </div>

          
          <div className="flex gap-6 w-full mb-6">
            <select className="w-[50vh] bg-white p-4  outline-none">
              <option>Pediatric Clinic</option>
              <option>Etihad Clinic</option>
              <option>Etihad Clinic</option>
              <option>Etihad Clinic</option>
              <option>Etihad Clinic</option>
              <option>Etihad Clinic</option>
            </select>
            <select className="w-[50vh] bg-white p-4  outline-none">
              <option>Choose Doctor</option>
              <option>Dr.Erling Haaland</option>
              <option>Dr.Erling Haaland</option>
              <option>Dr.Erling Haaland</option>
              <option>Dr.Erling Haaland</option>
              <option>Dr.Erling Haaland</option>
              <option>Dr.Erling Haaland</option>
            </select>
          </div>

          <textarea
            placeholder="Your Message"
            className="w-full p-4 h-40 bg-white outline-none mb-6"
          />

          <button className="flex items-center gap-2 font-semibold text-xl  text-white px-6 py-3 rounded-md">
            SEND NOW
            <ChevronRight size={18} />
          </button>
        </div>
      </section>
    </main>
  );
};

export default Main;
