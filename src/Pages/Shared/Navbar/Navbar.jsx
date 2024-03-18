import { NavLink } from "react-router-dom";

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
          to={"/about"}
          className={({ isActive, isPending }) =>
            isActive
              ? "border-green-500 border-b-2 px-1 py-2"
              : isPending
              ? "pending "
              : ""
          }
        >
          About Us
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="">
      <div className="navbar bg-base-100 max-w-7xl mx-auto">
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
              className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
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
        <div className="navbar-end">
          <NavLink to={"/login"}>
            <button className="px-4 py-2 bg-black text-white rounded-md font-medium">
              Login
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
