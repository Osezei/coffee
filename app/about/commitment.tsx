import React from "react";
import Image from "next/image";
import Man from "@/public/assets/about/desktop/image-commitment.jpg";
import { TitleBlack, ParagraphBlack } from "@/components/Typography/Typography";

const Commitment = () => {
  return (
    <section className="flex flex-col md:flex-row my-[120px] md:my-[152px] items-center text-center md:text-left justify-center gap-[48px] md:gap-[69px] lg:gap-[125px]">
      <div className="">
        <Image
          src={Man}
          width={327}
          height={400}
          alt="man"
          className="object-cover rounded-2xl md:hidden"
        />
        <Image
          src={Man}
          width={281}
          height={470}
          alt="man"
          className="object-cover rounded-2xl hidden md:block lg:hidden"
        />
        <Image
          src={Man}
          width={445}
          height={520}
          alt="man"
          className="object-cover rounded-2xl hidden lg:block"
        />
      </div>
      <div className=" md:max-w-[339px md:w-[50%]">
        <div className="mb-[30px]">
          <TitleBlack>Our commitment</TitleBlack>
        </div>
        <ParagraphBlack>
          We’re built on a simple mission and a commitment to doing good along
          the way. We want to make it easy for you to discover and brew the
          world’s best coffee at home. It all starts at the source. To locate
          the specific lots we want to purchase, we travel nearly 60 days a year
          trying to understand the challenges and opportunities in each of these
          places. We collaborate with exceptional coffee growers and empower a
          global community of farmers through with well above fair-trade
          benchmarks. We also offer training, support farm community
          initiatives, and invest in coffee plant science. Curating only the
          finest blends, we roast each lot to highlight tasting profiles
          distinctive to their native growing region.
        </ParagraphBlack>
      </div>
    </section>
  );
};

export default Commitment;
