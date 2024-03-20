import { NavLink } from "react-router-dom";
import Container from "../../../Components/Container/Container";

const Navbar = () => {
  const NavNavLinks = (
    <>
      <li className="font-bold text-lg">
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isActive
              ? "border-green-500 border-b-2 px-1 py-1"
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
              ? "border-green-500 border-b-2 px-1 py-2"
              : isPending
              ? "pending "
              : ""
          }
        >
          BLOGS
        </NavLink>
      </li>
      <li className="font-bold text-lg">
        <NavLink
          to={"/aboutUs"}
          className={({ isActive, isPending }) =>
            isActive
              ? "border-green-500 border-b-2 px-1 py-2"
              : isPending
              ? "pending "
              : ""
          }
        >
          ABOUT US
        </NavLink>
      </li>
    </>
  );
  return (
    <Container>
      <div className="navbar bg-base-100 ">
        <div className="navbar-start">
          <div className="dropdown">
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
              className=" menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {NavNavLinks}
            </ul>
          </div>
          <NavLink to={"/"}>
            <p>Logo</p>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal px-1 space-x-4">{NavNavLinks}</ul>
        </div>
        <div className="navbar-end gap-x-2">
          <NavLink to={"/login"}>
            <button className="transition ease-in-out  px-4 py-2 text-black rounded-md font-medium hover:bg-black hover:text-white duration-500">
              Login
            </button>
          </NavLink>
          <NavLink to={"/register"}>
            <button className="transition ease-in-out px-4 py-2 bg-green-500 text-white rounded-md font-medium hover:bg-green-600 duration-500">
              Register Now
            </button>
          </NavLink>
   
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
