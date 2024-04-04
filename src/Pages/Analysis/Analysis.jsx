import { Helmet } from "react-helmet";
import Container from "../../Components/Container/Container";
import ButtonComponent from "./ButtonComponent";
import { useLoaderData } from "react-router-dom";

const Analysis = () => {
  const category = useLoaderData();
  console.log(category);
  return (
    <div className="min-h-[80vh] bg-gray-100 ">
      <Helmet>
        <title>Forex 02 Hero | Analysis</title>
      </Helmet>
      <Container>
        <iframe
          className="w-full h-full my-10 rounded-lg md:min-h-[700px]"
          src="https://www.youtube.com/embed/L6Jwa7al8os"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div className="text-center">
          <h2 className="text-3xl md:text-6xl inline border-b-2 border-green-600  font-semibold">
            Our Daily Analysis
          </h2>
          <p className="md:max-w-[600px] mx-auto py-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            eligendi adipisci laudantium. Quo eveniet minima omnis quod
            consequuntur quis magni.
          </p>
        </div>{" "}
        <div className="grid  md:grid-cols-2 gap-4 py-5">
          {category.map((categorys) => (
            <ButtonComponent
              key={categorys.id}
              categorys={categorys}
            ></ButtonComponent>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Analysis;
