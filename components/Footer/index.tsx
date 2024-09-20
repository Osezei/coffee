import React from "react";
//import Logo from "../../public/assets/shared/desktop/logo.svg";
import Logo from "@/public/assets/logo-white.png";
import Link from "next/link";
import { navLinks } from "../Navigation";
import Image from "next/image";
import Container from "../Container";

//icons
import { ImFacebook2 } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";

interface Types {
  id: number;
  title: string;
  icon: any;
  url: string;
}

const socials: Types[] = [
  {
    id: 1,
    title: "facebook",
    icon: <ImFacebook2 />,
    url: "#",
  },
  {
    id: 2,
    title: "twitter",
    icon: <FaTwitter />,
    url: "#",
  },
  {
    id: 3,
    title: "instagram",
    icon: <LuInstagram />,
    url: "#",
  },
];

const Footer = () => {
  return (
    <Container>
      <div className="py-[54px] lg:py-[47px] lg:px-[85px] mb-[72px] lg:mb-[88px] w-full bg-[#2C343E] text-center">
        <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-[65px] lg:gap-0">
          <section className="flex flex-col lg:flex-row gap-[33px] lg:gap-[103px] items-center ">
            <div className="lg:w-[236px] lg:h-[26px] w-[203px] h-[24px] relative object-contain">
              <Image
                src={Logo}
                priority
                alt="logo"
                sizes="236px"
                className="hidden md:block"
              />
              <Image
                src={Logo}
                priority
                alt="logo"
                sizes="163px"
                className="md:hidden"
              />
            </div>
            <div className="flex flex-col md:flex-row md:w-[283px gap-[33px] lg:justify-between font-bold text-[12px] lg:leading-[0.92px]">
              {navLinks.map(({ id, title, link }) => {
                return (
                  <Link
                    key={id}
                    href={link}
                    className={`text-[#83888F] cursor-pointer hover:text-white ease-in-out duration-300`}
                  >
                    {title.toUpperCase()}
                  </Link>
                );
              })}
            </div>
          </section>
          <section className="flex gap-[24px] items-center text-[#83888F] ">
            {socials.map(({ id, title, icon, url }) => {
              return (
                <Link
                  key={id}
                  href={url}
                  className="hover:text-white ease-in-out duration-300"
                >
                  <p>{icon}</p>
                </Link>
              );
            })}
          </section>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
