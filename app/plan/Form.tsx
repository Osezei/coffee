"use client";
import React from "react";
import { useState } from "react";

interface FormTypes {
  id: number;
  title: string;
  desccription: string;
}
const formInfo: FormTypes[] = [
  {
    id: 1,
    title: "Capsule",
    desccription: "Compatible with Nespresso systems and similar brewers",
  },
  {
    id: 2,
    title: "Filter",
    desccription:
      "For pour over or drip methods like Aeropress, Chemex, and V60",
  },
  {
    id: 3,
    title: "Espresso",
    desccription:
      "Dense and finely ground beans for an intense, flavorful experience",
  },
];
const Form = () => {
  const [coffee, setCoffee] = useState(1);

  return (
    <section>
      {formInfo.map(({ id, title, desccription }) => {
        return (
          <article key={id}>
            {coffee === id ? <div>{title}</div> : null}
          </article>
        );
      })}
    </section>
  );
};

export default Form;

// "use client";
// import React from "react";
// import { useState } from "react";

// const Form = () => {
//   const [coffee, setCoffee] = useState({
//     name: "coffee",
//     model: "indo",
//   });

//   const updateCoffee = () => {
//     setCoffee((previousState) => {
//       return { ...previousState, name: "espresso" };
//     });
//   };
//   return (
//     <section>
//       <h1>
//         {coffee.name} AND {coffee.model}
//       </h1>
//       <button onClick={updateCoffee}>click</button>
//     </section>
//   );
// };

// export default Form;
