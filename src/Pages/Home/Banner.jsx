import { Link, NavLink } from "react-router-dom";
import Container from "../../Components/Container/Container";
import banner from "../../assets/images/banner-original.png";
import { MdOutlinePlayCircleOutline } from "react-icons/md";

const Banner = () => {
  return (
    <div>
      <div className="hero  bg-gradient-to-r from-gray-900 to-green-800">
        <Container>
          <div className="flex-col lg:flex lg:items-center  lg:space-y-9 lg:flex-row-reverse lg:justify-between">
            <div className="flex items-center lg:text-left">
              <div className="space-y-8">
                <p className="text-4xl text-green-400">We are Trader</p>
                <h1 className="text-7xl text-white font-bold">
                  Lorem ipsum dolor sit amet.
                </h1>
                <div className="md:flex md:items-center space-x-7">
                  <NavLink to={"/register"}>
                    <button className="transition ease-in-out px-5 py-4 bg-green-500 text-white rounded-md font-medium hover:bg-green-600 duration-500">
                      Register Now
                    </button>
                  </NavLink>

                  <Link to={"https://www.youtube.com/@manasdhali1"} target="_blank">
                    <button className="flex justify-center items-center transition ease-in-out px-5 py-3 space-x-2 font- border-2 border-white text-white rounded-md font-medium hover:bg-green-600 duration-500">
                      <span className="text-3xl">
                        <MdOutlinePlayCircleOutline />
                      </span>
                      <span>Watch Video</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card w-full max-w-md  ">
              <img src={banner} alt="" />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
