import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavigationTypes from "../interfaces/NavTypes";
import MenuTypes from "../interfaces/MenuTypes";
import Logo from "../../public/assets/shared/desktop/logo.svg";
import Burger from "../../public/assets/shared/mobile/icon-hamburger.svg";
import Close from "../../public/assets/shared/mobile/icon-close.svg";
import Container from "../Container";
import "animate.css";
//font
import { Barlow } from "next/font/google";

const barlow = Barlow({
  weight: "400",
  subsets: ["latin"],
});

export const navLinks: NavigationTypes[] = [
  {
    id: 1,
    title: "home",
    link: "/",
  },
  {
    id: 2,
    title: "about us",
    link: "/about",
  },
  {
    id: 3,
    title: "create your plan",
    link: "/plan",
  },
];

const Navigation = ({ active }: MenuTypes) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <Container>
      <nav
        className={`flex justify-between items-center my-[32px] md:my-[40px] ${barlow.className}`}
      >
        <div className="lg:w-[203px] lg:h-[24px] w-[163px] h-[18px]  relative object-contain">
          <Image
            src={Logo}
            priority
            alt="logo"
            sizes="203px"
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

        <div className="hidden md:flex w-[283px] justify-between font-bold text-[12px] leading-[0.92px]">
          {navLinks.map(({ id, title, link }) => {
            return (
              <Link
                key={id}
                href={link}
                className={` ${
                  active?.toLocaleLowerCase() === title.toLowerCase()
                    ? "text-[#333D4B] cursor-pointer"
                    : "text-[#83888F]"
                }`}
              >
                {title.toUpperCase()}
              </Link>
            );
          })}
        </div>
        <div className="md:hidden">
          {toggle ? (
            <Image
              src={Close}
              alt="close"
              width={14}
              height={13}
              onClick={handleToggle}
            />
          ) : (
            <Image
              src={Burger}
              alt="burger"
              width={16}
              height={15}
              onClick={handleToggle}
            />
          )}
        </div>
      </nav>
      <div
        className={`md:hidden ${
          toggle
            ? "fixed z-30 h-screen top-[80px] left-0 w-full mx-auto bg-[#fefcf7]"
            : "hidden"
        }`}
      >
        <div className="text-[24px] leading-[32px] flex flex-col text-center">
          {navLinks.map(({ id, title, link }) => {
            return (
              <Link
                key={id}
                href={link}
                style={{ animationDelay: `${id * 0.2}s` }}
                className={`mt-8 font-extrabold animate__animated animate__fadeIn ${
                  active?.toLocaleLowerCase() === title.toLowerCase()
                    ? "text-[#333D4B] cursor-pointer "
                    : "text-[#83888F]"
                }`}
              >
                {title.toUpperCase()}
              </Link>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Navigation;
