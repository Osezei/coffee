import React from "react";
import Image from "next/image";
import Group from "@/public/Group 13.png";
import Gran from "@/public/assets/home/desktop/image-gran-espresso.png";
import Planalto from "@/public/assets/home/desktop/image-planalto.png";
import Piccollo from "@/public/assets/home/desktop/image-piccollo.png";
import Danche from "/Users/user/Desktop/coffee/public/assets/home/desktop/image-danche.png";
import CollectionTypes from "../interfaces/collectionTypes";
import { SmallTitle } from "../Typography/Typography";
import { ParagraphBlack } from "../Typography/Typography";

//font
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: "800",
});

const collectionSpan: CollectionTypes[] = [
  {
    id: 1,
    image: Gran,
    name: " Gran Espresso",
    note: " Light and flavorful blend with cocoa and black pepper for an intense experience ",
  },
  {
    id: 2,
    image: Planalto,
    name: "Planalto",
    note: "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts ",
  },
  {
    id: 3,
    image: Piccollo,
    name: "Piccollo",
    note: "Mild and smooth blend featuring notes of toasted almond and dried cherry ",
  },
  {
    id: 4,
    image: Danche,
    name: "Danche ",
    note: "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
  },
];

const Collection = () => {
  return (
    <section className="">
      <div className="mt-[120px] md:mt-[136px]">
        <h1 className="bg-gradient-to-b from-[#83888F]/70 text-[40px] md:text-[70px] text-center rounded-xl md:rounded-2xl text-white/35 font-bold">
          <span className={`${fraunces.className}`}> our collection</span>
        </h1>
      </div>

      <div className="">
        {/* tablet and laptop screen */}
        <div className="hidden mb-[200px] md:flex flex-col lg:flex-row justify-center place-items-center gap-[32px] lg:gap-7">
          {collectionSpan.map(({ id, image, name, note }) => {
            return (
              <article
                key={id}
                className="md:flex md:justify-start lg:justify-center items-center  gap-[35px] lg:block"
              >
                <div className="relative w-[256px] h-[193px] object-contain">
                  <Image src={image} alt={name} sizes="256px" />
                </div>
                <section className="md:max-w-[282px] lg:w-[255px] text-left lg:text-center lg:mt-[71px]">
                  <div className="mb-[24px]">
                    <SmallTitle>{name}</SmallTitle>
                  </div>
                  <ParagraphBlack>{note}</ParagraphBlack>
                </section>
              </article>
            );
          })}
        </div>
        {/* end of tablet and laptop screen */}
        <div className="md:hidden mb-[140px] flex flex-col gap-[48px] justify-center items-center">
          {collectionSpan.map(({ id, image, name, note }) => {
            return (
              <article key={id} className="">
                <div className="relative w-[200px] h-[151px] mx-auto object-contain">
                  <Image src={image} alt={name} sizes="200px" />
                </div>
                <section className="md:max-w-[282px] text-center mt-6">
                  <div className="mb-[24px]">
                    <SmallTitle>{name}</SmallTitle>
                  </div>
                  <ParagraphBlack>{note}</ParagraphBlack>
                </section>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Collection;
