import { Helmet } from "react-helmet";
import Container from "../../Components/Container/Container";
import ButtonComponent from "./ButtonComponent";

const Analysis = () => {
  return (

    <div className="bg-gray-100 ">
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

        <div>
          <ButtonComponent></ButtonComponent>
        </div>
      </Container>
    </div>
  );
};

export default Analysis;
