import { Link, NavLink } from "react-router-dom";
import Container from "../../Components/Container/Container";
import banner from "../../assets/images/banner-original.webp";
import { MdOutlinePlayCircleOutline } from "react-icons/md";

const Banner = () => {
  return (
    <div>
      <div className=" md:py-20   bg-gradient-to-r from-green-800 to-gray-900">
        <Container>
          <div className="flex flex-col-reverse  md:relative justify-center w-full md:flex md:items-center md:space-y-9 md:flex-row md:justify-between">
            <div className="flex justify-center md:justify-start w-full  md:w-6/12  ">
              <img src={banner} className="max-w-sm md:max-w-xl " alt="" />
            </div>
            <div className="text-center pt-4 md:pt-0 md:text-left w-full md:w-6/12">
              <div className="space-y-2 md:space-y-8">
                <h1 className="text-3xl md:text-5xl lg:text-7xl text-white font-bold">
                  Your trading is going to pay you sooner than you expect.
                </h1>
                <p className="text-xl md:text-2xl lg:text-4xl text-green-400">
                  Stay connected
                </p>

                {/* button secton */}
                <div className="flex items-center justify-center md:justify-normal space-x-3 md:space-x-7">
                  <NavLink to={"/register"}>
                    <button className="transition ease-in-out my-5 text-md px-4 py-2 md:px-5 md:py-4 bg-green-500 border-2 border-green-500 md:border-0 text-white rounded-md font-normal hover:bg-green-600 duration-500">
                      Register Now
                    </button>
                  </NavLink>

                  {/* watch video button */}
                  <div className="">
                    <Link
                      to={"https://www.youtube.com/@manasdhali1"}
                      target="_blank"
                    >
                      <button className="flex items-center  transition ease-in-out px-2 py-2 md:px-5 md:py-3 space-x-2 border-2 border-white text-white rounded-md  hover:bg-green-600 duration-500">
                        <span className=" text-md md:text-3xl">
                          <MdOutlinePlayCircleOutline />
                        </span>
                        <span className="">Watch Video</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
