import React from "react";
import Link from "next/link";

//fonts
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  weight: "800",
  subsets: ["latin"],
});

interface ListTypes {
  id: number;
  title: string;
}

const ListInfo: ListTypes[] = [
  {
    id: 1,
    title: "Preferences",
  },
  {
    id: 2,
    title: "Bean Type",
  },
  {
    id: 3,
    title: "Quantity",
  },
  {
    id: 4,
    title: "Grind Option",
  },
  {
    id: 5,
    title: "Deliveries",
  },
];

const List = () => {
  return (
    <div className="flex flex-col w-[255px]">
      {ListInfo.map(({ id, title }) => {
        return (
          <Link
            key={id}
            href="#"
            className={`border-b-[#83888F] border-b-[1px] mb-[50px] text-[24px] text-black/40 hover:text-black transition duration-300 ease-in-out ${fraunces.className}`}
          >
            <span className="mr-3"> 0{id}</span> {title}
          </Link>
        );
      })}
    </div>
  );
};

export default List;
