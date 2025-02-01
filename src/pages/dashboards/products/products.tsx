import { useState } from "react";
import Datepicker from "../../../components/datepicker";

const Products = () => {
  return (
    <div className="w-full min-h-screen bg-[#F7F9FC]">
      <div className="w-full p-8 bg-white min-h-screen">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-3xl font-playfair font-bold text-[#2C3E50]">
            Products Dashboard
          </h1>
          <Datepicker />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mb-10">
          <div className="p-6 bg-[#E6FFF5] rounded-2xl hover:shadow-lg transition-all">
            <p className="text-sm font-montserrat mb-2 text-[#34495E]">
              Products Sold
            </p>
            <h2 className="text-4xl font-playfair font-bold text-[#16A085]">
              1,234
            </h2>
            <p className="text-sm text-[#27AE60] mt-2 font-medium">
              +12.5% from last month
            </p>
          </div>

          <div className="p-6 bg-[#F5E6FF] rounded-2xl hover:shadow-lg transition-all">
            <p className="text-sm font-montserrat mb-2 text-[#34495E]">
              Revenue
            </p>
            <h2 className="text-4xl font-playfair font-bold text-[#8E44AD]">
              $45,678
            </h2>
            <p className="text-sm text-[#27AE60] mt-2 font-medium">
              +8.3% from last month
            </p>
          </div>

          <div className="p-6 bg-[#FFF4E5] rounded-2xl hover:shadow-lg transition-all">
            <p className="text-sm font-montserrat mb-2 text-[#34495E]">
              Orders
            </p>
            <h2 className="text-4xl font-playfair font-bold text-[#F39C12]">
              897
            </h2>
            <p className="text-sm text-[#27AE60] mt-2 font-medium">
              +15.2% from last month
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Trending Up", "Top Selling", "Not Selling"].map((title, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6  transition-all">
              <h3 className="font-playfair font-bold mb-4 text-2xl text-[#2C3E50]">
                {title}
              </h3>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#ECF0F1]">
                    <th className="py-3 text-left font-montserrat text-[#34495E] font-semibold">
                      Product
                    </th>
                    <th className="py-3 text-left font-montserrat text-[#34495E] font-semibold">
                      Price
                    </th>
                    <th className="py-3 text-center font-montserrat text-[#34495E] font-semibold">
                      {idx === 0 ? "Growth" : idx === 1 ? "Sold" : "Decline"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    idx === 0
                      ? {
                          name: "Product A",
                          price: "$299",
                          stat: "+45%",
                          color: "text-green-500",
                        }
                      : idx === 1
                      ? { name: "Product B", price: "$399", stat: "234" }
                      : {
                          name: "Product C",
                          price: "$499",
                          stat: "-12%",
                          color: "text-red-500",
                        },
                    idx === 0
                      ? {
                          name: "Product D",
                          price: "$199",
                          stat: "+32%",
                          color: "text-green-500",
                        }
                      : idx === 1
                      ? { name: "Product E", price: "$249", stat: "189" }
                      : {
                          name: "Product F",
                          price: "$349",
                          stat: "-8%",
                          color: "text-red-500",
                        },
                  ].map((product, i) => (
                    <tr
                      key={i}
                      className="border-b border-[#ECF0F1] hover:bg-black/5 transition-colors"
                    >
                      <td className="py-4 text-[#2C3E50] font-montserrat font-medium">
                        {product.name}
                      </td>
                      <td className="py-4 text-[#34495E] font-montserrat">
                        {product.price}
                      </td>
                      <td
                        className={`py-4 text-center font-montserrat font-medium ${
                          product.color || "text-[#34495E]"
                        }`}
                      >
                        {product.stat}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
