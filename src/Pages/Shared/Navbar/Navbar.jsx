import { NavLink } from "react-router-dom";
import Container from "../../../Components/Container/Container";
import logo from "../../../assets/images/logo-transparent-CROP.png";
import useAuth from "../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";

const Navbar = () => {
  const { logOut, user } = useAuth();
  const [isAdmin] = useAdmin();
  const handelDelete = () => {
    logOut().then(console.log("logout done"));
  };
  const NavNavLinks = (
    <>
      <li className="font-bold text-lg">
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isActive
              ? "border-green-500 border-b-2  py-1"
              : isPending
              ? "pending "
              : ""
          }
        >
          HOME
        </NavLink>
      </li>
      <li className="font-bold text-lg">
        <NavLink
          to={"/blogs"}
          className={({ isActive, isPending }) =>
            isActive
              ? "border-green-500 border-b-2  py-1"
              : isPending
              ? "pending "
              : ""
          }
        >
          BLOGS
        </NavLink>
      </li>
      <li className="font-bold uppercase text-lg">
        <NavLink
          to={"/analysis"}
          className={({ isActive, isPending }) =>
            isActive
              ? "border-green-500 border-b-2  py-1"
              : isPending
              ? "pending "
              : ""
          }
        >
          Analysis
        </NavLink>
      </li>
      <li className="font-bold text-lg">
        <NavLink
          to={"/aboutUs"}
          className={({ isActive, isPending }) =>
            isActive
              ? "border-green-500 border-b-2  py-1"
              : isPending
              ? "pending "
              : ""
          }
        >
          ABOUT US
        </NavLink>
      </li>
      {isAdmin ? (
        <li className="font-bold text-lg">
          <NavLink
            to={"/dashboard"}
            className={({ isActive, isPending }) =>
              isActive
                ? "border-green-500 border-b-2  py-1"
                : isPending
                ? "pending "
                : ""
            }
          >
            DASHBOARD
          </NavLink>
        </li>
      ) : (
        ""
      )}
    </>
  );
  return (
    <div className="sticky top-0 z-10  bg-gray-100 border-b border-gray">
      <Container>
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown ">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-100 rounded-box w-52"
              >
                {NavNavLinks}
                <li className=" ">
                  {user ? (
                    <button
                      onClick={handelDelete}
                      className="inline-block sm:hidden transition ease-in-out  px-4 py-2 text-black rounded-md font-medium hover:bg-black hover:text-white duration-500"
                    >
                      Logout
                    </button>
                  ) : (
                    <NavLink to={"/login"}>
                      <button className=" inline-block sm:hidden px-4 py-2  rounded-md font-medium duration-500 bg-[#0D1821] transition ease-in-out  my-2 hover:bg-green-500 text-white  col-span-2">
                        Login
                      </button>
                    </NavLink>
                  )}
                </li>
                <li>
                  {" "}
                  <NavLink to={"/register"}>
                    <button className="transition ease-in-out px-4 py-2 bg-green-500 text-white rounded-md font-medium hover:bg-green-600 duration-500">
                      Register Now
                    </button>
                  </NavLink>
                </li>
              </ul>
            </div>
            <NavLink to={"/"}>
              <img className="max-h-8 md:max-h-16" src={logo} alt="" />
            </NavLink>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className=" menu-horizontal px-1 space-x-4">{NavNavLinks}</ul>
          </div>
          <div className="navbar-end gap-x-2">
            <div className=" ">
              {user ? (
                <button
                  onClick={handelDelete}
                  className="hidden sm:inline-block transition ease-in-out  px-4 py-2 rounded-md font-medium  bg-[#0D1821] hover:bg-green-500 text-white  hover:text-white duration-500"
                >
                  Logout
                </button>
              ) : (
                <NavLink to={"/login"}>
                  <button className="hidden sm:inline-block  px-4 py-2  rounded-md font-medium duration-500 transition ease-in-out  my-2 bg-[#0D1821]  hover:bg-green-500 text-white  col-span-2">
                    Login
                  </button>
                </NavLink>
              )}
            </div>
            <NavLink to={"/register"}>
              <button className="transition ease-in-out px-4 py-2 bg-green-500 text-white rounded-md font-medium hover:bg-green-600 duration-500">
                Register Now
              </button>
            </NavLink>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
