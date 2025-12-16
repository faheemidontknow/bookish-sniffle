import React from "react";
import { useState } from "react";
import TopSection from "../../../components/TopSection";


const Main = ({ cartItems }) => {
  const [number, setNumber] = useState(1);
  const add = () => setNumber(number + 1);
  return (
    <main>
      <TopSection title={"Wishlist"}  />
      <section className="px-20 py-24">
        <div className="p-10">
          <table className="w-full border  h-[115vh] border-gray-300">
            <thead>
              <tr className="border-b  border-gray-300 ">
                <th className="p-4 text-left border-r border-gray-300">
                  Images
                </th>
                <th className="p-4 text-left border-r  border-gray-300">
                  Product
                </th>
                <th className="p-4 text-left border-r  border-gray-300">
                  Unit Price
                </th>
                <th className="p-4 text-left border-r  border-gray-300">
                  Quantity
                </th>
                <th className="p-4 text-left border-r  border-gray-300">
                  Total
                </th>
                <th className="p-4 text-left border-r  border-gray-300">
                  Remove
                </th>
              </tr>
            </thead>

            <tbody>
              {cartItems.map((item) => (
                <tr className="border-b border-gray-300">
                  <td className="p-4 border-r border-gray-300">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-35 h-35 object-contain"
                    />
                  </td>

                  <td className="p-4 text-xl border-r font-semibold border-gray-300">
                    {item.name}
                  </td>

                  <td className="p-4 border-r  font-semibold text-xl border-gray-300">
                    ${item.price}.00
                  </td>

                  <td className=" p-4 border-r  border-gray-300">
                    <div className="flex items-center border  py-3 px-2 w-fit">
                      <button
                        onClick={() => setNumber(add - 1)}
                        className="px-3 py-1"
                      >
                        −
                      </button>
                      <span className="px-4">{number}</span>
                      <button onClick={add} className="px-3 py-1">
                        +
                      </button>
                    </div>
                  </td>

                  <td className="p-4 border-r text-xl font-semibold border-gray-300">
                    ${item.price}.00
                  </td>

                  <td className="p-4 text-xl cursor-pointer">
                    <a href="#">×</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default Main;
