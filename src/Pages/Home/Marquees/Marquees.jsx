import Marquee from "react-fast-marquee";
import Marque from "./Marque";

const Marquees = () => {
  const headlines = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, modi.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, modi.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, modi.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, modi.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, modi.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, modi.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, modi.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, modi.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, modi.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, modi.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, modi.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, modi.",
  ];

  return (
    <div className="bg-gradient-to-r from-green-800 to-gray-900 mt-10 py-5 md:py-10 text-white  flex flex-col justify-center items-center">
      <Marquee>
        {headlines.map((headline, index) => (
          <Marque key={index} text={headline}></Marque>
        ))}
      </Marquee>
    </div>
  );
};

export default Marquees;
