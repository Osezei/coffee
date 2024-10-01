import React from "react";
import Image from "next/image";
import Australia from "@/public/assets/about/desktop/illustration-australia.svg";
import Canada from "@/public/assets/about/desktop/illustration-canada.svg";
import UK from "@/public/assets/about/desktop/illustration-uk.svg";
import {
  SmallTitle,
  TitleGrey,
  ParagraphBlack,
} from "@/components/Typography/Typography";

interface CountryTypes {
  id: number;
  title: string;
  address: string;
  phoneNumber: number;
  image: any;
  state: string;
  add: string;
}

const countryInfo: CountryTypes[] = [
  {
    id: 1,
    title: "United Kingdom",
    address: "68  Asfordby Rd",
    state: "Alcaston",
    add: "SY6 1YA",
    phoneNumber: +441241918425,
    image: UK,
  },
  {
    id: 2,
    title: "Canada",
    address: "1528  Eglinton Avenue ",
    state: "Toronto",
    add: " Ontario M4P 1A6",
    phoneNumber: +14164852997,
    image: Canada,
  },
  {
    id: 3,
    title: "Australia",
    address: "36 Swanston Street ",
    state: "Kewell",
    add: "Victoria",
    phoneNumber: +61499283629,
    image: Australia,
  },
];

const Countries = () => {
  return (
    <section className="min-w-[327px] max-w-[1045px] mx-auto my-[120px] md:my-[168px] text-center md:text-left">
      <div className="mb-[72px]">
        <TitleGrey>Our headquarters</TitleGrey>
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        {countryInfo.map(
          ({ id, title, address, phoneNumber, state, add, image }) => {
            return (
              <article
                key={id}
                className="min-w-[327px] md:max-w-[222px] lg:max-w-[285px]"
              >
                <div className="relative w-[51.1px] h-[50px] mb-[45px] mx-auto md:mx-0">
                  <Image src={image} alt={title} sizes="52px" />
                </div>
                <div className="mb-6">
                  <SmallTitle>{title}</SmallTitle>
                  <div>
                    <ParagraphBlack>{address}</ParagraphBlack>
                    <ParagraphBlack>{state}</ParagraphBlack>
                    <ParagraphBlack>{add}</ParagraphBlack>

                    <ParagraphBlack>+{phoneNumber}</ParagraphBlack>
                  </div>
                </div>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Countries;
