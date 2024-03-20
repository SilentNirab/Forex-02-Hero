import Container from "../../Components/Container/Container";
import Cards from "../Card/Cards";
import Banner from "./Banner";
import Broker from "./Broker/Broker";
import Teams from "./Team/Teams";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Container>
        <Cards></Cards>
        <Teams></Teams>
        <Broker></Broker>
      </Container>
    </div>
  );
};

export default Home;
