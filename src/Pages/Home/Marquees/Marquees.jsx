import Marquee from "react-fast-marquee";
import Marque from "./Marque";
import useAxios from "../../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const Marquees = () => {
  const publicAxios = useAxios();
  const { data: news = [] } = useQuery({
    queryKey: ["news"],
    queryFn: async () => {
      const res = await publicAxios.get("/news");
      return res.data;
    },
  });
  return (
    <div className="bg-gradient-to-r from-green-800 to-gray-900 mt-10 py-4 md:py-8 text-white   flex flex-col justify-center items-center">
      <Marquee>
        {news.map((headline, index) => (
          <Marque key={index} text={headline}></Marque>
        ))}
      </Marquee>
    </div>
  );
};

export default Marquees;
