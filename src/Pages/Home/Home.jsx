import Container from "../../Components/Container/Container";
import Cards from "../Card/Cards";
import Banner from "./Banner";
import Broker from "./Broker/Broker";
import Members from "./Team/Members";
import Team from "./Team/Team";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Container>
        <Cards></Cards>
        <Team></Team>
        <Members></Members>
        <Broker></Broker>
      </Container>
    </div>
  );
};

export default Home;
