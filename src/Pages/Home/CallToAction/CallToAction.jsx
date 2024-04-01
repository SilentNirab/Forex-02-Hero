import { Link } from "react-router-dom";
import Container from "../../../Components/Container/Container";

const CallToAction = () => {
  return (
    <div>
      <div className="px-3 md:lg:xl:px-40 bg-[url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png')]   border-t border-b py-20 bg-opacity-10">
        <Container>
          <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 group bg-white shadow-xl shadow-neutral-100 border ">
            <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
              <span className="p-5 rounded-full bg-red-500 text-white shadow-lg shadow-red-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </span>
              <p className="text-xl font-medium text-slate-700 mt-3">
                Most Experienced Team
              </p>
              <p className="mt-2 text-sm text-slate-500">
                The main difficulties of forex market is there are thousands of
                strategies her and we confused what should I follow. We an
                experienced team are working for that. We are going to provide
                something different
              </p>
            </div>

            <div className="p-10 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
              <span className="p-5 rounded-full bg-orange-500 text-white shadow-lg shadow-orange-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </span>
              <p className="text-xl font-medium text-slate-700 mt-3">
                Mentorship{" "}
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Trading is a journey. To be a professional trader a Mentorship
                is very much important. Our mentor Manas Dhali sir 14 years
                experienced Trader will quide us throughout the journey{" "}
              </p>
            </div>

            <div className="p-10 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
              <span className="p-5 rounded-full bg-yellow-500 text-white shadow-lg shadow-yellow-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </span>
              <p className="text-xl font-medium text-slate-700 mt-3">
                Proper Guidelines{" "}
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Sometimes you are the problem.So Try to find out your obstacles
                first and solve it. We are here to guide you
              </p>
            </div>
          </div>

          <div className="w-full text-center  bg-green-400 shadow-xl space-y-4 shadow-indigo-200 py-10 px-4 md:px-20 flex flex-col md:flex-row justify-between items-center">
            <p className=" text-white">
              {" "}
              <span className="text-2xl md:text-4xl font-medium">
                Still Confused
              </span>{" "}
              <br />{" "}
              <span className="text-md md:text-lg">
                Book For Free Career Consultation Today !{" "}
              </span>
            </p>
            <Link to={"/register"}>
              {" "}
              <button className="px-5 py-3  font-medium text-slate-700 shadow-xl rounded-lg hover:bg-white duration-150  bg-white ">
                REGISTER NOW{" "}
              </button>
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CallToAction;
