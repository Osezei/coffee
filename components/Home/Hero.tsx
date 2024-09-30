import React from "react";
import Link from "next/link";
import { Paragraph } from "../Typography/Typography";
import { Button } from "../Typography/Typography";
import { motion } from "framer-motion";

//font
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  weight: "800",
  subsets: ["latin"],
});

const Hero = () => {
  return (
    <div>
      <div className="hero-mobile w-full h-[500px] lg:h-[600px] object-contain rounded-lg lg:rounded-2xl overflow-hidden">
        <div className="text-center md:text-left lg:mt-[117px] lg:ml-[85px] md:ml-[58px] md:mt-[104px] mt-[100px] lg:w-[493px]  md:w-[398px] w-[279px] mx-auto md:mx-0">
          <div className="">
            <h1
              className={`text-[#FEFCF7] font-extrabold text-[40px] md:text-[48px] lg:leading-[72px] lg:text-[72px] lg:mb-[32px] mb-[24px] ${fraunces.className}`}
            >
              {" "}
              Great coffee made simple.{" "}
            </h1>
            <Paragraph>
              {" "}
              Start your mornings with the world’s best coffees. Try our
              expertly curated artisan coffees from our best roasters delivered
              directly to your door, at your schedule.
            </Paragraph>
            <div className="mt-[40px] flex justify-center md:justify-start">
              <Link href={"/plan"}>
                <Button>Create your plan</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
