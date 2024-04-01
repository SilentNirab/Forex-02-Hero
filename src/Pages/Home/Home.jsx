import { Helmet } from "react-helmet";
import Container from "../../Components/Container/Container";
import Cards from "../Card/Cards";
import Banner from "./Banner";
import Broker from "./Broker/Broker";
import CallToAction from "./CallToAction/CallToAction";
import Marquees from "./Marquees/Marquees";

import Team from "./Team/Team";

const Home = () => {
  return (
    <div className="min-h-[80vh]">
      <Helmet>
        <title>Forex 02 Hero | Home</title>
      </Helmet>
      <Banner></Banner>
      <Marquees></Marquees>
      <Container>
        <Cards></Cards>
      </Container>
      <Team></Team>
      <CallToAction></CallToAction>
      <Container>
        <Broker></Broker>
      </Container>
    </div>
  );
};

export default Home;
