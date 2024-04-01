import Card from "../Card/Card";
import Container from "../../Components/Container/Container";
// import BlogDetails from "./BlogDetailsPage";
import { Helmet } from "react-helmet";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const Blogs = () => {
  const publicAxios = useAxios();
  const { data: posts = [] } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const res = await publicAxios.get('/posts');
      return res.data;
    }
  });

  return (
    <div className="min-h-[80vh] pb-10 md:pb-20 lg:pb-24">
      <Helmet>
        <title>Forex 02 Hero | Blog</title>
      </Helmet>
      <Container>
        <div>
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl inline border-b-2 border-green-600  font-semibold">
              Our Blog
            </h2>
            <p className="md:max-w-[600px] mx-auto py-5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Excepturi eligendi adipisci laudantium. Quo eveniet minima omnis
              quod consequuntur quis magni.
            </p>
          </div>{" "}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 gap-y-10 mt-20">
            {posts.map((data) => (
              <Card key={data.id} card={data}></Card>
            ))}
          </div>
        </div>

        <div>
          {/* <BlogDetails></BlogDetails> */}
        </div>
      </Container>
    </div>
  );
};

export default Blogs;
