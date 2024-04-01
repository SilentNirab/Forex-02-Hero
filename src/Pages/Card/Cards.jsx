import { Link } from "react-router-dom";
import Card from "./Card";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
const Cards = () => {
  const publicAxios = useAxios();
  const { data: posts = [] } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await publicAxios.get("/posts");
      return res.data;
    },
  });
  // Slice the posts array to get only the first 6 posts
  const limitedPosts = posts.slice(0, 6);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 gap-y-10 mt-20">
        {limitedPosts.map((data) => (
          <Card key={data.id} card={data}></Card>
        ))}
      </div>
      <div className="text-center my-10">
        <Link to={"/blogs"}>
          <button className="bg-[#0D1821] transition ease-in-out  text-xl font-bold px-4 py-2 my-2  hover:bg-green-500 text-white rounded-lg">
            {" "}
            Read More{" "}
          </button>
        </Link>
      </div>
    </>
  );
};

export default Cards;
