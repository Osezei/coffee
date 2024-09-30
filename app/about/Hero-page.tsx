import React from "react";
import { Paragraph, Title } from "@/components/Typography/Typography";

const HeroPage = () => {
  return (
    <div className="about-hero flex items-center text-center md:text-left rounded-lg lg:rounded-2xl overflow-hidden h-[400px]">
      <div className="w-[279px] md:w-[398px] md:ml-[58px] mx-auto">
        <Title>About Us</Title>
        <div className="mt-[24px]">
          <Paragraph>
            Coffeeroasters began its journey of exotic discovery in 1999,
            highlighting stories of coffee from around the world. We have since
            been dedicated to bring the perfect cup - from bean to brew - in
            every shipment.
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
