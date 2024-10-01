import React from "react";
import { Title, Paragraph } from "@/components/Typography/Typography";

const HeroPlan = () => {
  return (
    <div className="about-hero flex items-center text-center md:text-left rounded-lg lg:rounded-2xl overflow-hidden h-[400px]">
      <div className="w-[279px] md:w-[398px] md:ml-[58px] mx-auto">
        <Title>Create a plan</Title>
        <div className="mt-[24px]">
          <Paragraph>
            Build a subscription plan that best fits your needs. We offer an
            assortment of the best artisan coffees from around the globe
            delivered fresh to your door.
          </Paragraph>
        </div>
      </div>
    </div>
  );
};

export default HeroPlan;
