import { NavLink } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa6";

const Broker = () => {
  return (
    <div className="py-24">
      <h2 className="text-2xl md:text-4xl font-bold text-center pb-10">Recommended Broker</h2>
      <div className="border-4 space-y-10 py-10 border-green-600">
        <div className="text-center ">
          <h2 className="text-3xl md:text-6xl font-bold mb-4">
            <span className="text-green-600">FOREX</span>
            <span>02</span>
            <span className="text-red-600">HERO</span>
          </h2>
          <p className="text-sm md:text-xl">
            Get a <span className="font-bold">20% trading bonus</span> when you
            open an account and deposit using my link!
          </p>
        </div>
        <div className="pl-2 md:pl-20 text-sm md:text-xl font-semibold">
          <p className="flex items-center gap-x-2">
            <span className="text-green-600">
              <FaLocationArrow />{" "}
            </span>{" "}
            Trade forex, crypto CFDs, commodities, metals, and indices
          </p>
          <p className="flex items-center gap-x-2">
          <span className="text-green-600"><FaLocationArrow /> </span> Up to 300x leverage
          </p>
        </div>
        <div className="text-center ">
          <NavLink to={"/register"}>
            <button className="transition ease-in-out px-2 py-1 md:px-4 md:py-2 bg-green-500 text-white rounded-md font-medium hover:bg-green-600 duration-500">
              Join Our Forex02Hero
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Broker;
