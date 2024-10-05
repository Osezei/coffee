import React from "react";

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

const Items = ({ title, desccription, id, setCoffee, coffee }: any) => {
  console.log(setCoffee);
  return <p>hello</p>;
};

export default Items;
