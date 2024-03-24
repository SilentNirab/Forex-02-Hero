import { Link } from "react-router-dom";
import Container from "../../Components/Container/Container";

const AboutUs = () => {
  return (

      <Container>
        <div className=" min-h-[80vh] bg-white">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-10">
            <div className=" min-h-[550px] md:h-screen hidden md:flex items-center px-20 md:w-2/4"></div>
            <div></div>
            <div className="md:w-2/4 px-10 lg:px-20 lg:pr-40">
              <div className="border border-gray-200 rounded-lg p-10 space-y-6 mb-10 md:mb-0">
                <h3 className="text-2xl font-bold text-center text-[#333]">
                  Login
                </h3>
                <form
                  className="w-full flex flex-col gap-2"
                
                >
                  <label className="font-bold text-[#333]">Email</label>
                  <input
                    className="bg-green-100 focus-visible:border-green-700 text-black rounded-md p-4 F3F3F3 placeholder:#9D9C9C"
         
                    placeholder="Enter your email"
                  
                  />

                  <div className=" flex justify-between">
                    <label className="font-bold text-[#333]">Password</label>
                  </div>

                  <div className=" form-control relative">
                 
                 
                    { (
                      <p className="text-[#F7A582]">Password is required</p>
                    )}
                    <span
                      className="absolute top-5 right-4"
                      
                    >
                      
                    </span>
                  </div>
                  <input
                    className="bg-[#0D1821] transition ease-in-out text-xl font-bold py-2 my-2 hover:bg-green-500 text-white rounded-lg col-span-2"
                    type="submit"
                    value="Login"
                  />
                  <p className="text-center text-[#6C6B6B]">
                    Please register at first. Go to{" "}
                    <Link to={"/register"} className="text-green-500 font-bold">
                      Registation
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
   
  );
};

export default AboutUs;
