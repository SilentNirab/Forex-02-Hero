/* eslint-disable react/no-unescaped-entities */
import Container from "../../../Components/Container/Container";
import Teams from "./Teams";

const Team = () => {
  return (
    <div className="pt-10 pb-20 bg-gray-100">
      <Container>
        <div className="text-center pb-8">
          <h2 className="text-3xl md:text-6xl inline border-b-2 border-green-600  font-semibold">
            Our Team
          </h2>
          <p className="text-sm md:text-xl md:max-w-[600px]  mx-auto py-5">
            Wellcome to "<span className="text-red-600 font-bold">Forex</span ><span className="font-bold">02</span><span className="text-green-500 font-bold">Hero</span>" We an organised team, working for
            creating a successful trading community.
          </p>
        </div>
        <div className="">
          <Teams></Teams>
        </div>
      </Container>
    </div>
  );
};

export default Team;
