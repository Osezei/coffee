import {
  ParagraphBlack,
  TitleBlack,
  TitleWork,
  TitleGrey,
} from "../Typography/Typography";
import React from "react";
import { Button } from "../Typography/Typography";

interface workTypes {
  id: number;
  title: string;
  description: string;
}

const worksInfo: workTypes[] = [
  {
    id: 1,
    title: "Pick your coffee",
    description:
      "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every monthfor you to try out.",
  },
  {
    id: 2,
    title: "Choose the frequency",
    description:
      " Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
  },
  {
    id: 3,
    title: "Receive and enjoy!",
    description:
      "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience. ",
  },
];

const Works = () => {
  return (
    <section className="lg:max-w-[1045px] text-center md:text-left my-[120px] md:my-[144px] lg:my-[200px] mx-auto">
      <TitleGrey>How it works</TitleGrey>
      {/* design */}
      <div className="hidden lg:flex items-center mt-[80px]">
        <div className="w-[31px] h-[31px] rounded-full border-2 border-[#0E8784]"></div>
        <div className="w-[385px] h-[1px] bg-[#FDD6BA]"></div>
        <div className="w-[31px] h-[31px] rounded-full border-2 border-[#0E8784]"></div>
        <div className="w-[385px] h-[1px] bg-[#FDD6BA]"></div>
        <div className="w-[31px] h-[31px] rounded-full border-2 border-[#0E8784]"></div>
      </div>

      {/* end of design */}
      <div className="flex flex-col place-items-center md:flex-row justify-between mb-[79px] md:mb-[44px] lg:mb-[64px]">
        {worksInfo.map(({ id, title, description }) => {
          return (
            <article
              key={id}
              className="text-wrap md:max-w-[223px] text-center md:text-left"
            >
              <TitleWork>{`0${id}`}</TitleWork>
              <div className="mb-6 mt-6 md:mb-[38px] md:mt-[42px]">
                <TitleBlack> {title}</TitleBlack>
              </div>

              <ParagraphBlack>{description}</ParagraphBlack>
            </article>
          );
        })}
      </div>
      <div className="flex justify-center md:justify-start">
        <Button>create your plan</Button>
      </div>
    </section>
  );
};

export default Works;
