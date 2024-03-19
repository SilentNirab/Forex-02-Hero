import Container from "../../Components/Container/Container";
import banner from "../../assets/images/banner.png";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <Container>
          <div className="flex-col lg:flex  lg:flex-row lg:justify-between">
            <div className="flex-col mt-72 align-center lg:text-left">
              <div>
                <p className="">We are Trader</p>
              <h1 className="text-7xl font-bold">
                Lorem ipsum dolor sit amet.
              </h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              </div>
            </div>
            <div className="card shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
              <img src={banner} alt="" />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
