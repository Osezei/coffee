import React from "react";
import Image from "next/image";
import Cup from "@/public/assets/about/desktop/image-quality.jpg";
import CupTablet from "@/public/assets/about/tablet/image-quality.jpg";
import {
  SmallTitleWhite,
  Paragraph,
  Title,
} from "@/components/Typography/Typography";

const Quality = () => {
  return (
    <>
      <section className="">
        {/* laptop screen */}
        <div className="overflow-visible max-w-[1280px] h-[474px] rounded-2xl bg-[#2C343E] hidden lg:flex justify-around items-center">
          <div className="">
            <Title>Uncompromising quality</Title>
            <div className="mt-[32px] max-w-[540px]">
              <Paragraph>
                Although we work with growers who pay close attention to all
                stages of harvest and processing, we employ, on our end, a
                rigorous quality control program to avoid over-roasting or
                baking the coffee dry. Every bag of coffee is tagged with a
                roast date and batch number. Our goal is to roast consistent,
                user-friendly coffee, so that brewing is easy and enjoyable.
              </Paragraph>
            </div>
          </div>
          <div className="pb-[88px]">
            <Image
              src={Cup}
              alt="cup"
              width={445}
              height={474}
              className="rounded-2xl"
            />
          </div>
        </div>
        {/* end of laptop screen */}
        {/* {tablet and mobile view} */}
        <div className="overflow-visible relative mx-auto h-[509px] min-w-[327px] md:max-w-[688px] md:h-[488px] mt-[198px] mb-[120px] md:mt-[304px] md:mb-[144px] rounded-2xl bg-[#2C343E] flex flex-col lg:hidden justify-center items-center">
          <div className="absolute top-[-78px] md:top-[-160px] flex justify-center">
            <Image
              src={CupTablet}
              alt="cup"
              width={573}
              height={320}
              className="rounded-2xl md:block hidden lg:hidden"
            />
            <Image
              src={CupTablet}
              alt="cup"
              width={279}
              height={156}
              className="rounded-2xl md:hidden"
            />
          </div>
          <div className="mt-[64px] mx-6 md:mx-[74px] text-center">
            <Title>Uncompromising quality</Title>
            <div className="mt-6">
              <Paragraph>
                Although we work with growers who pay close attention to all
                stages of harvest and processing, we employ, on our end, a
                rigorous quality control program to avoid over-roasting or
                baking the coffee dry. Every bag of coffee is tagged with a
                roast date and batch number. Our goal is to roast consistent,
                user-friendly coffee, so that brewing is easy and enjoyable.
              </Paragraph>
            </div>
          </div>
        </div>
        {/* end of tablet and mobile view */}
      </section>
    </>
  );
};

export default Quality;
