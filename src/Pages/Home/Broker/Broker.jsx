import { Link } from "react-router-dom";
import logo from "../../../assets/images/dbinvesing.png";

const Broker = () => {
  return (
    <div className="py-24">
      <h2 className="text-2xl px-3 md:px-8 md:text-4xl font-bold text-center pb-10">
        Trade With Our Recommended Broker and Unlock Free VIP Access!
      </h2>
      <div className="border-4 space-y-10 py-10 border-green-600">
        <div className="text-center ">
          <div>
            <img
              className="max-w-sm md:max-w-lg mx-auto pb-4"
              src={logo}
              alt=""
            />
          </div>
          <p className="text-sm px-4 md:px-8 md:text-xl">
            Get a <span className="font-bold">30% trade credit</span> and{" "}
            <span className="font-bold">free VIP access</span> when you join
            dbInvesing using my link and trade a minimum of 1 lot!
          </p>
        </div>

        <div className="text-center ">
          <Link
            to={"https://my.dbinvesting.com/register/?lid=392&pid=69745"}
            target="blank"
          >
            <button className="transition ease-in-out px-2 py-1 md:px-4 md:py-2 bg-green-500 text-white rounded-md font-medium hover:bg-green-600 duration-500">
              Join Our Recommeded Broker
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Broker;
