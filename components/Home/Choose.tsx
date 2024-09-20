import React from "react";
import { SmallTitleWhite, Title } from "../Typography/Typography";
import { Paragraph } from "../Typography/Typography";
import Bean from "../../public/assets/home/desktop/icon-coffee-bean.svg";
import Gift from "../../public/assets/home/desktop/icon-gift.svg";
import Truck from "../../public/assets/home/desktop/icon-truck.svg";
import ChooseTypes from "../interfaces/ChooseTypes";
import Image from "next/image";

const items: ChooseTypes[] = [
  {
    id: 1,
    image: Bean,
    title: "Best quality",
    description:
      "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
  },
  {
    id: 2,
    image: Gift,
    title: "Exclusive benefits",
    description:
      "Special offers and swag when you subscribe, including 30% off your first shipment.",
  },
  {
    id: 3,
    image: Truck,
    title: "Free shipping",
    description:
      "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
  },
];

const Choose = () => {
  return (
    <div className="min-h-[1510px] md:min-h-[863px] lg:min-h-[728px]">
      <section className="mx-auto max-h-[902px] md:max-h-[573px] md:max-w-[688px] lg:max-w-[1280px] lg:max-h-[577px] overflow-visible bg-[#2C343E] rounded-[8px] lg:rounded-2xl">
        <div className="lg:max-w-[540px] mx-auto text-center">
          <div className="pt-[64px] md:pt-[56px] lg:pt-[100px] mb-[24px] lg:mb-[32px]">
            <Title>Why choose us?</Title>
          </div>
          <div className="mb-[64px] md:mb-[70px] lg:mb-[86px] mx-[74px] lg:mx-0">
            <Paragraph>
              A large part of our role is choosing which particular coffees will
              be featured in our range. This means working closely with the best
              coffee growers to give you a more impactful experience on every
              level.
            </Paragraph>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row place-items-center justify-center gap-[24px] lg:gap-[30px]">
          {items.map(({ id, image, title, description }) => {
            return (
              <article
                key={id}
                className="bg-[#0E8784] w-[279px] h-[382px] md:w-[573px] md:h-[180px] lg:w-[350px] lg:h-[380px] rounded-[8px] lg:rounded-xl flex justify-center items-center text-center"
              >
                <div className="md:flex md:flex-row lg:flex-col items-center  md:gap-[55px] lg:gap-0">
                  <div className="relative w-[72px] h-[72px] md:w-[56px] md:h-[56px] lg:w-[72px] lg:h-[72px] mx-auto mb-[56px] md:mb-0 lg:mb-[56px]">
                    <Image src={image} alt={title} sizes="72px" />
                  </div>
                  <div className="w-[255px] md:w-[344px] lg:w-fit lg:mx-[48px] text-center md:text-left lg:text-center">
                    <div className="mb-[24px] md:mb-[16px] lg:mb-[24px]">
                      <SmallTitleWhite>{title}</SmallTitleWhite>
                    </div>
                    <Paragraph>{description}</Paragraph>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Choose;
