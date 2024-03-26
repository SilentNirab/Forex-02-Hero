import Container from "../../../Components/Container/Container";
import Teams from "./Teams";

const Team = () => {
  return (
    <div className="pt-10 pb-20 bg-gray-200">
      <Container>
        <div className="text-center pb-8">
          <h2 className="text-3xl md:text-5xl inline border-b-2 border-green-600  font-semibold">
            Our Team
          </h2>
          <p className="md:max-w-[600px] mx-auto py-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            eligendi adipisci laudantium. Quo eveniet minima omnis quod
            consequuntur quis magni.
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
