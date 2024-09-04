import React, { useEffect, useState } from "react";
import "animate.css";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return isLoading ? (
    <div className="bg-[#83888F] fixed top-0 left-0 w-full h-screen text-[#333D4B] z-50 flex justify-center items-center overflow-hidden">
      {[
        "C",
        "O",
        "F",
        "F",
        "E",
        "E",
        "R",
        "O",
        "A",
        "S",
        "T",
        "E",
        "R",
        "S",
      ].map((letter, index) => (
        <span
          key={index}
          className="animate__animated animate__bounce text-xl md:text-4xl leading-normal"
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          {letter}
        </span>
      ))}
    </div>
  ) : null;
};

export default Loader;
