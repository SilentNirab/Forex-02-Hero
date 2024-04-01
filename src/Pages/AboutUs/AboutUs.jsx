/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet";
import Container from "../../Components/Container/Container";
import ourMission from "../../assets/images/our-mission.webp";
import ourStory from "../../assets/images/our-story.webp";
import Team from "../Home/Team/Team";

const AboutUs = () => {
  return (
    <div className=" min-h-[80vh]">
      {/* about section */}
      <div className="bg-white">
        <Container>
          <div>
            <Helmet>Forex 02 Hero | About Us</Helmet>
            <div className="py-16">
              <div className="container m-auto px-2 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:7/12 lg:w-6/12">
                    <h2 className="text-4xl  md:text-7xl text-gray-900 font-semibold ">
                      About Us
                    </h2>
                    <p className="mt:2 md:mt-6 md:text-2xl">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Dolorum, neque.
                    </p>
                  </div>
                  <div className="md:5/12 lg:w-5/12">
                    <img
                      className="shadow-xl"
                      src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* our story section */}
      <div className="bg-gray-100">
        <Container>
          <div>
            <Helmet>Forex 02 Hero | About Us</Helmet>
            <div className="py-16">
              <div className="container m-auto px-2 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className=" shadow-2xl rounded-lg border-8 border-white">
                    <img className="" src={ourMission} alt="" />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                    <h2 className="text-3xl text-gray-900 font-bold ">
                      Our Mission: Helping Millions of Pepoles Grow Better in
                      Trading
                    </h2>
                    <p className="mt-2 md:mt-6 md:text-xl">
                      We believe not just in growing bigger, but in growing
                      better. And growing better means aligning the success of
                      your own business with the success of your customers.
                      Win-win!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-white">
        <Container>
          <div>
            <Helmet>Forex 02 Hero | About Us</Helmet>
            <div className="py-16">
              <div className="container m-auto px-2 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:7/12 lg:w-6/12">
                    <h2 className="text-4xl text-gray-900 font-bold ">
                      Our Story
                    </h2>
                    <p className="mt-2 md:mt-6 md:text-xl">
                      "Forex 02 Hero" is here to make the way easier for you. We
                      are working as an organized team to create a successful
                      trading community within 2024. With this community you can
                      make yourself profitable by training up yourself and
                      analyzing the market. In this journey, 'Manas Dhali' sir
                      (14 year's experienced successful trader) will be with us
                      as a mentor Our respected sir is leading from the front
                      throughout this journey.
                    </p>
                    <p className="mt-2 md:mt-3 md:text-xl">
                      So, you can be a part of this journey with us Through our
                      "Forex 02 Hero" website you will be provided -- Dynamic
                      courses on various market strategies and analysis. Here we
                      provide a 'Treading Room' that the most surprising part
                      for you where our respected mentor Manas Dhali sir will
                      provide the regular updates of the market. So, you are
                      firmly welcomed here to be a successful part of this path.
                      So being a trader stay with us.
                    </p>
                  </div>
                  <div className=" shadow-2xl rounded-lg border-8 border-white">
                    <img className="" src={ourStory} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Team section */}
      <Team></Team>

      {/* Resourses section */}
    </div>
  );
};

export default AboutUs;
