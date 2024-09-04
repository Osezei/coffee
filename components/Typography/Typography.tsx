import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}
export const Paragraph: React.FC<Props> = ({ children }) => {
  return (
    <div className="font-normal text-[15px] text-[#FEFCF7]">{children}</div>
  );
};

export const Button: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-[#0E8784] hover:bg-[#66D2CF] ease-in-out duration-300 text-[18px] hover:text-[#FEFCF7] text-[#FEFCF7] text-center w-fit px-[31px] py-[15px] font-bold rounded-xl">
      {children}
    </div>
  );
};

export const SmallTitle: React.FC<Props> = ({ children }) => {
  return (
    <div className="text-[#333D4B] text-[24px] font-[32px]">{children}</div>
  );
};
export const ParagraphBlack: React.FC<Props> = ({ children }) => {
  return (
    <div className="font-normal text-[15px] text-[#333D4B]">{children}</div>
  );
};
