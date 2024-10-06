import React from "react";
import { useState } from "react";

//fonts
import { Fraunces } from "next/font/google";
import { Barlow } from "next/font/google";

const barlow = Barlow({
  weight: "400",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  weight: "800",
  subsets: ["latin"],
});

const Items = (
  { title, desccription, id }: any,
  { coffee, setCoffee }: any
) => {
  //const [coffee, setCoffee] = useState();
  return (
    <div
      key={id}
      onClick={() => setCoffee(id)}
      className={`cursor-pointer w-[228px] h-[250px]  rounded-2xl flex justify-center items-center  transition duration-300 ease-in-out ${
        coffee === id
          ? " bg-[#0E8784] text-white"
          : "bg-[#F4F1EB] hover:bg-[#FDD6BA] text-[#333D4B]"
      }`}
    >
      <div>
        <h1 className={`text-[24px]  ${fraunces.className}`}>{title}</h1>
        <p
          className={`w-[172px] mt-[24px] font-normal text-[15px] ${barlow.className}`}
        >
          {desccription}
        </p>
      </div>
    </div>
  );
};

export default Items;
