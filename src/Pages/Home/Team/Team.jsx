import Teams from "./Teams";

const Team = () => {
  return (
    <div className="pt-20">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl inline border-b-2 border-green-600  font-semibold">Our Team</h2>
        <p className="md:max-w-[600px] mx-auto py-5">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
          eligendi adipisci laudantium. Quo eveniet minima omnis quod
          consequuntur quis magni.
        </p>
      </div>
      <div className="bg-gradient-to-r from-gray-900 to-green-800 rounded-2xl">
        <Teams></Teams>
      </div>
    </div>
  );
};

export default Team;
