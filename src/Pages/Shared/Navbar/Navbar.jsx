import { Link, NavLink } from "react-router-dom";
import Container from "../../../Components/Container/Container";

const Navbar = () => {
  const NavLinks = (
    <>
      <li className="text-lg font-bold mx-2">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? " text-[#F36F21]" : " ")}
        >
          Home
        </NavLink>
      </li>
      <li className="text-lg font-bold mx-2">
        <NavLink
          to={"/products"}
          className={({ isActive }) => (isActive ? " text-[#F36F21]" : " ")}
        >
          Products
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-100">
            <Container>
                <div className="navbar">
                    <div className=" navbar-start ">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {NavLinks}
                            </ul>
                        </div>
                        <Link className="content-end">Logo</Link>
                    </div>


                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu-horizontal px-1 text-white text-base space-x-5">
                            {NavLinks}
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
  );
};

export default Navbar;
