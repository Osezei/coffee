"use client";
import React from "react";
import { useState } from "react";
import {
  SmallTitle,
  ParagraphBlack,
  Paragraph,
  TitleBlack,
} from "@/components/Typography/Typography";
import List from "./List";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";
import { Button } from "@/components/Typography/Typography";

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

// end of fonts

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
const coffeeTypes: FormTypes[] = [
  {
    id: 1,
    title: "Single Origin",
    desccription:
      "Distinct, high quality coffee from a specific family-owned farm",
  },
  {
    id: 2,
    title: "Decaf",
    desccription:
      "Just like regular coffee, except the caffeine has been removed",
  },
  {
    id: 3,
    title: "Blended",
    desccription:
      "Combination of two or three dark roasted beans of organic coffees",
  },
];
const likeTypes: FormTypes[] = [
  {
    id: 1,
    title: "250g",
    desccription:
      "Perfect for the solo drinker. Yields about 12 delicious cups.",
  },
  {
    id: 2,
    title: "500g",
    desccription:
      "Perfect option for a couple. Yields about 40 delectable cups.",
  },
  {
    id: 3,
    title: "1000g",
    desccription:
      "Perfect for offices and events. Yields about 90 delightful cups.",
  },
];
const grindTypes: FormTypes[] = [
  {
    id: 1,
    title: "Wholebean",
    desccription: "Best choice if you cherish the full sensory experience",
  },
  {
    id: 2,
    title: "Filter",
    desccription:
      "For drip or pour-over coffee methods such as V60 or Aeropress",
  },
  {
    id: 3,
    title: "Cafetiére",
    desccription:
      "Course ground beans specially suited for french press coffee",
  },
];
const deliveryTypes: FormTypes[] = [
  {
    id: 1,
    title: "Every week",
    desccription: "$7.20 per shipment. Includes free first-class shipping.",
  },
  {
    id: 2,
    title: "Every 2 weeks",
    desccription: "$9.60 per shipment. Includes free priority shipping.",
  },
  {
    id: 3,
    title: "Every month",
    desccription: "$12.00 per shipment. Includes free priority shipping.",
  },
];

const Form = () => {
  //usestate
  const [coffee, setCoffee] = useState(1);
  const [coffee2, setCoffee2] = useState(1);
  const [coffee3, setCoffee3] = useState(1);
  const [coffee4, setCoffee4] = useState(1);
  const [coffee5, setCoffee5] = useState(1);

  //toggle function
  const [toggle, setToggle] = useState(false);
  const [toggle2, setToggle2] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  const [toggle5, setToggle5] = useState(false);

  //handleToggle
  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleToggle2 = () => {
    setToggle2(!toggle2);
  };
  const handleToggle3 = () => {
    setToggle3(!toggle3);
  };
  const handleToggle4 = () => {
    setToggle4(!toggle4);
  };
  const handleToggle5 = () => {
    setToggle5(!toggle5);
  };

  return (
    <section>
      <div className="flex justify-center gap-[125px] my-[144px] lg:my-[168px]">
        {/* links */}
        <div className="hidden lg:block">
          <List />
        </div>
        {/* end of links */}
        <div className="w-[328px] md:w-[689px] lg:w-[730px]">
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
                  className="text-3xl transition duration-300 ease-in-out text-[#0E8784]"
                >
                  <RiArrowUpSLine />
                </button>
              ) : (
                <button
                  onClick={handleToggle}
                  className="text-3xl transition duration-300 ease-in-out text-[#0E8784]"
                >
                  {" "}
                  <RiArrowDownSLine />
                </button>
              )}
            </div>
            {/* end of title */}
            {/* options */}
            <div
              className={`${
                toggle
                  ? "flex flex-col md:flex-row justify-between mt-[32px] gap-[16px] md:gap-0 md:mt-[56px] transition duration-300 ease-in-out"
                  : "hidden transition duration-300 ease-in-out"
              }`}
            >
              {formInfo.map(({ id, title, desccription }) => {
                return (
                  <div
                    key={id}
                    onClick={() => setCoffee(id)}
                    className={`cursor-pointer w-[328px] md:w-[223px] lg:w-[228px] h-[140px] md:h-[250px]  rounded-2xl flex justify-center items-center  transition duration-300 ease-in-out ${
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
                        className={`w-[172px] mt-[8px] md:mt-[24px] font-normal text-[15px] ${barlow.className}`}
                      >
                        {desccription}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* end of options */}
          </div>
          {/* end of how to drink coffee */}
          {/* type of coffee */}
          {/* title */}
          <div className="flex justify-between mt-[100px]">
            <div>
              <TitleBlack>What type of coffee?</TitleBlack>
            </div>
            {toggle2 ? (
              <button
                onClick={handleToggle2}
                className="text-3xl transition duration-300 ease-in-out text-[#0E8784]"
              >
                <RiArrowUpSLine />
              </button>
            ) : (
              <button
                onClick={handleToggle2}
                className="text-3xl transition duration-300 ease-in-out text-[#0E8784]"
              >
                {" "}
                <RiArrowDownSLine />
              </button>
            )}
          </div>
          {/* end of title */}
          {/* options */}
          <div
            className={`${
              toggle2
                ? "flex flex-col md:flex-row justify-between mt-[32px] gap-[16px] md:gap-0 md:mt-[56px] transition duration-300 ease-in-out"
                : "hidden transition duration-300 ease-in-out"
            }`}
          >
            {coffeeTypes.map(({ id, title, desccription }) => {
              return (
                <div
                  key={id}
                  onClick={() => setCoffee2(id)}
                  className={`cursor-pointer w-[328px] md:w-[223px] lg:w-[228px] h-[140px] md:h-[250px]  rounded-2xl flex justify-center items-center  transition duration-300 ease-in-out ${
                    coffee2 === id
                      ? " bg-[#0E8784] text-white"
                      : "bg-[#F4F1EB] hover:bg-[#FDD6BA] text-[#333D4B]"
                  }`}
                >
                  <div>
                    <h1 className={`text-[24px]  ${fraunces.className}`}>
                      {title}
                    </h1>
                    <p
                      className={`w-[172px] mt-[8px] md:mt-[24px] font-normal text-[15px] ${barlow.className}`}
                    >
                      {desccription}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* end of options */}

          {/* end of type of coffee */}
          {/* what coffee you like */}
          {/* title */}
          <div className="flex justify-between mt-[100px]">
            <div>
              <TitleBlack>How much would you like?</TitleBlack>
            </div>
            {toggle2 ? (
              <button
                onClick={handleToggle3}
                className="text-3xl transition duration-300 ease-in-out text-[#0E8784]"
              >
                <RiArrowUpSLine />
              </button>
            ) : (
              <button
                onClick={handleToggle3}
                className="text-3xl transition duration-300 ease-in-out text-[#0E8784]"
              >
                {" "}
                <RiArrowDownSLine />
              </button>
            )}
          </div>
          {/* end of title */}
          {/* options */}
          <div
            className={`${
              toggle3
                ? "flex flex-col md:flex-row justify-between mt-[32px] gap-[16px] md:gap-0 md:mt-[56px] transition duration-300 ease-in-out"
                : "hidden transition duration-300 ease-in-out"
            }`}
          >
            {likeTypes.map(({ id, title, desccription }) => {
              return (
                <div
                  key={id}
                  onClick={() => setCoffee3(id)}
                  className={`cursor-pointer w-[328px] md:w-[223px] lg:w-[228px] h-[140px] md:h-[250px]  rounded-2xl flex justify-center items-center  transition duration-300 ease-in-out ${
                    coffee3 === id
                      ? " bg-[#0E8784] text-white"
                      : "bg-[#F4F1EB] hover:bg-[#FDD6BA] text-[#333D4B]"
                  }`}
                >
                  <div>
                    <h1 className={`text-[24px]  ${fraunces.className}`}>
                      {title}
                    </h1>
                    <p
                      className={`w-[172px] mt-[8px] md:mt-[24px] font-normal text-[15px] ${barlow.className}`}
                    >
                      {desccription}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* end of options */}

          {/* end of what coffee you like */}
          {/* grind */}
          {/* title */}
          <div className="flex justify-between mt-[100px]">
            <div>
              <TitleBlack>Want us to grind them?</TitleBlack>
            </div>
            {toggle4 ? (
              <button
                onClick={handleToggle4}
                className="text-3xl transition duration-300 ease-in-out text-[#0E8784]"
              >
                <RiArrowUpSLine />
              </button>
            ) : (
              <button
                onClick={handleToggle4}
                className="text-3xl transition duration-300 ease-in-out text-[#0E8784]"
              >
                {" "}
                <RiArrowDownSLine />
              </button>
            )}
          </div>
          {/* end of title */}
          {/* options */}
          <div
            className={`${
              toggle4
                ? "flex flex-col md:flex-row justify-between mt-[32px] gap-[16px] md:gap-0 md:mt-[56px] transition duration-300 ease-in-out"
                : "hidden transition duration-300 ease-in-out"
            }`}
          >
            {grindTypes.map(({ id, title, desccription }) => {
              return (
                <div
                  key={id}
                  onClick={() => setCoffee4(id)}
                  className={`cursor-pointer w-[328px] md:w-[223px] lg:w-[228px] h-[140px] md:h-[250px]  rounded-2xl flex justify-center items-center  transition duration-300 ease-in-out ${
                    coffee4 === id
                      ? " bg-[#0E8784] text-white"
                      : "bg-[#F4F1EB] hover:bg-[#FDD6BA] text-[#333D4B]"
                  }`}
                >
                  <div>
                    <h1 className={`text-[24px]  ${fraunces.className}`}>
                      {title}
                    </h1>
                    <p
                      className={`w-[172px] mt-[8px] md:mt-[24px] font-normal text-[15px] ${barlow.className}`}
                    >
                      {desccription}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* end of options */}

          {/* end of grind */}
          {/* delivery */}
          {/* title */}
          <div className="flex justify-between mt-[100px]">
            <div>
              <TitleBlack>How often should we deliver?</TitleBlack>
            </div>
            {toggle5 ? (
              <button
                onClick={handleToggle5}
                className="text-3xl transition duration-300 ease-in-out text-[#0E8784]"
              >
                <RiArrowUpSLine />
              </button>
            ) : (
              <button
                onClick={handleToggle5}
                className="text-3xl transition duration-300 ease-in-out text-[#0E8784]"
              >
                {" "}
                <RiArrowDownSLine />
              </button>
            )}
          </div>
          {/* end of title */}
          {/* options */}
          <div
            className={`${
              toggle5
                ? "flex flex-col md:flex-row justify-between mt-[32px] gap-[16px] md:gap-0 md:mt-[56px] transition duration-300 ease-in-out"
                : "hidden transition duration-300 ease-in-out"
            }`}
          >
            {deliveryTypes.map(({ id, title, desccription }) => {
              return (
                <div
                  key={id}
                  onClick={() => setCoffee5(id)}
                  className={`cursor-pointer w-[328px] md:w-[223px] lg:w-[228px] h-[140px] md:h-[250px]  rounded-2xl flex justify-center items-center  transition duration-300 ease-in-out ${
                    coffee5 === id
                      ? " bg-[#0E8784] text-white"
                      : "bg-[#F4F1EB] hover:bg-[#FDD6BA] text-[#333D4B]"
                  }`}
                >
                  <div>
                    <h1 className={`text-[24px]  ${fraunces.className}`}>
                      {title}
                    </h1>
                    <p
                      className={`w-[172px] mt-[8px] md:mt-[24px] font-normal text-[15px] ${barlow.className}`}
                    >
                      {desccription}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* end of options */}

          {/* end of delivery */}
          {/* order summary */}
          <section>
            <div className="summary-bg w-[328px] h-full md:w-[689px] lg:w-[730px] md:h-[208px] my-[88px] py-[24px] md:py-0 px-[24px] md:px-[44px] lg:px-[64px] rounded-2xl flex items-center">
              <div>
                <Paragraph>ORDER SUMMARY</Paragraph>
                <section
                  className={`text-[24px] flex flex-wrap text-white ${fraunces.className}`}
                >
                  <p className="">{`"I drink my coffee as`}</p>
                  <div className="">
                    {formInfo.map(({ id, title }) => {
                      return (
                        <article key={id} className="mx-2">
                          {coffee === id ? (
                            <p>
                              <span className="text-[#0E8784]">{title}</span>,
                            </p>
                          ) : null}
                        </article>
                      );
                    })}
                  </div>
                  <p className="">{`with a`}</p>
                  <div className="mx-2">
                    {coffeeTypes.map(({ id, title }) => {
                      return (
                        <article key={id} className="">
                          {coffee2 === id ? (
                            <p
                              className={`text-[#0E8784] ${fraunces.className}`}
                            >
                              {title}
                            </p>
                          ) : null}
                        </article>
                      );
                    })}
                  </div>
                  <p className="">type of bean.</p>
                  <div>
                    {likeTypes.map(({ id, title }) => {
                      return (
                        <article key={id} className="mx-2">
                          {coffee3 === id ? (
                            <p
                              className={`text-[#0E8784] ${fraunces.className}`}
                            >
                              {title}
                            </p>
                          ) : null}
                        </article>
                      );
                    })}
                  </div>
                  <p>{`ground ala`}</p>
                  <div className="mx-2">
                    {grindTypes.map(({ id, title, desccription }) => {
                      return (
                        <article key={id}>
                          {coffee4 === id ? (
                            <p className={` ${fraunces.className}`}>
                              <span className="text-[#0E8784]">{title}</span>,
                            </p>
                          ) : null}
                        </article>
                      );
                    })}
                  </div>
                  <p>{`sent to me`}</p>
                  <div className="mx-2">
                    {deliveryTypes.map(({ id, title }) => {
                      return (
                        <article key={id}>
                          {coffee5 === id ? (
                            <p className={` ${fraunces.className}`}>
                              <span className="text-[#0E8784]">{title}</span>
                              ."
                            </p>
                          ) : null}
                        </article>
                      );
                    })}
                  </div>
                </section>
              </div>
            </div>
            {/* button */}
            <div className="flex justify-center lg:justify-end">
              <Button>Create my plan!</Button>
            </div>
            {/* end of button */}
          </section>

          {/* end of order summary*/}
        </div>
      </div>
    </section>
  );
};

export default Form;
