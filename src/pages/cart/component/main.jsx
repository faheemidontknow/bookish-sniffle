import React from "react";
import { useState } from "react";
import TopSection from "../../../components/TopSection";
import removeItem from "../../../lib/removeItem";
import { X } from "lucide-react";
import updateCart from "../../../lib/updateCart";

const Main = ({ cartItems }) => {
  const [number, setNumber] = useState(1);
  const add = () => setNumber(number + 1);
  return (
    <main>
      <TopSection title={"Cart"} />
      {!cartItems ? (
        <div className="h-screen w-screen flex flex-col items-center justify-center gap-4">
          <img
            src="sapa.png"
            alt=""
            className="h-[60vh] w-[90vh]  animate-spin"
            style={{ filter: "drop-shadow(0 0 0 #C79A63)" }}
          />

          <p className="text-2xl   text-[#C79A63]">Getting carts ...</p>
        </div>
      ) : (
        <section className="px-12 pt-24 ">
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
                        src={`/${item.name}.png`}
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
                          onClick={() =>
                            updateCart(item.name, item.quantity - 1)
                          }
                          className="px-3 py-1"
                        >
                          −
                        </button>
                        <span className="px-4">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateCart(item.name, item.quantity + 1)
                          }
                          className="px-3 py-1"
                        >
                          +
                        </button>
                      </div>
                    </td>

                    <td className="p-4 border-r text-xl font-semibold border-gray-300">
                      ${item.price}.00
                    </td>

                    <td className="p-4 text-xl ">
                      <p
                        className="cursor-pointer"
                        onClick={() => removeItem(item.name)}
                      >
                        <X />
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
      <section className="px-12 pt-5 pb-28">
        <div className="flex justify-between">
          <span className="px-10 flex flex-col gap-4 ">
            <input
              className="border px-4 py-4 border-gray-300 w-[65vh] placeholder:text-xl"
              type="text"
              placeholder=" Coupon code"
            />
            <button className="border bg-[#C79A63] px-2 py-5 font-semibold  text-white rounded-full w-[35vh]">
              APPLY COUPON
            </button>
          </span>
          <span className="px-8">
            <button className="border bg-[#C79A63] px-2 py-5 font-semibold  text-white rounded-full w-[35vh]">
              UPDATE CART
            </button>
          </span>
        </div>
        <div className=" px-10 pt-12 gap-5 flex flex-col">
          <h1 className="text-xl font-bold">Cart Totals</h1>
          <span>
            <span className=" flex   justify-between border w-[90vh] px-4 py-4 border-gray-300">
              <p>Subtotal</p>
              <p>$78.00</p>
            </span>
            <span className=" flex   justify-between border w-[90vh] px-4 py-4 border-gray-300">
              <p>Total</p>
              <p>$78.00</p>
            </span>
          </span>
          <button className="border bg-[#C79A63] px-2 py-5 font-semibold  text-white rounded-full w-[50vh]">
            PROCEED TO CHECKOUT
          </button>
        </div>
      </section>
    </main>
  );
};

export default Main;
