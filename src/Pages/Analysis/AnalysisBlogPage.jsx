import Container from "../../Components/Container/Container";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import { useParams } from "react-router-dom";

const AnalysisBlogPage = () => {
  const publicAxios = useAxios();
  const { category } = useParams();
  const { data: analysis = [], isLoading } = useQuery({
    queryKey: ['analysis'],
    queryFn: async () => {
      const res = await publicAxios.get(`/analysis/${category}`);
      return res.data;
    }
  });


  return (
    <div>
      <Container>
        {isLoading ? (
          <div className="flex items-center justify-center min-h-screen">
            <span className="loading loading-bars loading-lg text-green-400 mx-auto"></span>
          </div>
        ) : (
          analysis.map((analysisItem) => (
            <div key={analysisItem._id} className="mx-auto py-10">
              {/* Image Banner */}
              <img
                src={analysisItem.image}
                alt="Banner"
                className="max-h-[500px] rounded-lg w-full"
              />

              {/* Blog Content */}
              <div className="mt-8">
                {/* Heading */}
                <h1 className="text-2xl md:text-4xl font-bold">
                  {analysisItem.post_title}
                </h1>

                {/* Blog Paragraph */}
                <p className="text-sm md:text-xl mt-4">
                  {analysisItem.post_content}
                </p>
              </div>
            </div>
          ))
        )}
      </Container>
    </div>
  );
};

export default AnalysisBlogPage;
