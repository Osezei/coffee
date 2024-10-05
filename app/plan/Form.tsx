"use client";
import React from "react";
import { useState } from "react";
import {
  SmallTitle,
  ParagraphBlack,
  TitleBlack,
} from "@/components/Typography/Typography";
import List from "./List";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";
import Items from "./Items";

//fonts
import { Barlow } from "next/font/google";
import { Fraunces } from "next/font/google";

const barlow = Barlow({
  weight: "400",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  weight: "800",
  subsets: ["latin"],
});

interface FormTypes {
  id: any;
  title: string;
  desccription: string;
}
const formInfo: FormTypes[] = [
  {
    id: 1,
    title: "Capsule",
    desccription: "Compatible with Nespresso systems and similar brewers",
  },
  {
    id: 2,
    title: "Filter",
    desccription:
      "For pour over or drip methods like Aeropress, Chemex, and V60",
  },
  {
    id: 3,
    title: "Espresso",
    desccription:
      "Dense and finely ground beans for an intense, flavorful experience",
  },
];
const Form = () => {
  const [coffee, setCoffee] = useState(1);
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <section>
      <div className="flex justify-center gap-[125px] my-[168px]">
        {/* links */}
        <div className="hidden lg:block">
          <List />
        </div>
        {/* end of links */}
        <div className="w-[730px]">
          {/* how to drink coffee */}
          <div>
            {/* title */}
            <div className="flex justify-between">
              <div>
                <TitleBlack>How do you drink your coffee?</TitleBlack>
              </div>
              {toggle ? (
                <button
                  onClick={handleToggle}
                  className="text-3xl transition duration-300 ease-in-out"
                >
                  <RiArrowUpSLine />
                </button>
              ) : (
                <button
                  onClick={handleToggle}
                  className="text-3xl transition duration-300 ease-in-out"
                >
                  {" "}
                  <RiArrowDownSLine />
                </button>
              )}
            </div>
            {/* end of title */}
            {/* options */}
            {/* <div
              className={`${
                toggle
                  ? "flex justify-between mt-[56px] transition duration-300 ease-in-out"
                  : "hidden transition duration-300 ease-in-out"
              }`}
            >
              {formInfo.map(({ id, title, desccription }) => {
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
                      <h1 className={`text-[24px]  ${fraunces.className}`}>
                        {title}
                      </h1>
                      <p
                        className={`w-[172px] mt-[24px] font-normal text-[15px] ${barlow.className}`}
                      >
                        {desccription}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div> */}
            {formInfo.map(({ id, title, desccription }) => {
              return (
                <Items
                  coffee
                  setCoffee
                  key={id}
                  title={title}
                  desccription={desccription}
                  onClick={() => setCoffee(id)}
                />
              );
            })}

            {/* end of options */}
          </div>
          {/* end of how to drink coffee */}
          {/* order summary */}
          <div>
            <ParagraphBlack>ORDER SUMMARY</ParagraphBlack>
            {formInfo.map(({ id, title, desccription }) => {
              return (
                <article key={id}>
                  {coffee === id ? (
                    <p className={` ${fraunces.className}`}>{title}</p>
                  ) : null}
                </article>
              );
            })}
          </div>
          {/* end of order summary*/}
        </div>
      </div>
    </section>
  );
};

export default Form;

// "use client";
// import React from "react";
// import { useState } from "react";

// const Form = () => {
//   const [coffee, setCoffee] = useState({
//     name: "coffee",
//     model: "indo",
//   });

//   const updateCoffee = () => {
//     setCoffee((previousState) => {
//       return { ...previousState, name: "espresso" };
//     });
//   };
//   return (
//     <section>
//       <h1>
//         {coffee.name} AND {coffee.model}
//       </h1>
//       <button onClick={updateCoffee}>click</button>
//     </section>
//   );
// };

// export default Form;
