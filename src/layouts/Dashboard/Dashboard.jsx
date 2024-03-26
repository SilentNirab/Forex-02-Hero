import { FcMenu } from "react-icons/fc";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";


const Dashboard = () => {
    const [isAdmin] = useAdmin();
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="drawer md:drawer-open first-line:">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <div className=" flex justify-between p-4">
                        <label htmlFor="my-drawer-2" className="btn bg-green-500 hover:bg-green-600 drawer-button md:hidden"><FcMenu className="text-xl text-white"></FcMenu></label>
                        <img htmlFor="my-drawer-2" className="md:hidden w-32 h-12" src="" />
                    </div>
                    {/* dashboard content */}
                    <div className="flex-1 p-8">
                        <Outlet></Outlet>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu text-md pt-10 space-y-4 w-80 min-h-full bg-green-700 text-white">
                        {/* Sidebar content here */}
                        {
                            isAdmin ?
                                <>
                                    <li className="w-full">
                                        <NavLink to="/dashboard/allusers">
                                            Users</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/addpost">
                                            Add Post</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/allposts">
                                            All Posts</NavLink>
                                    </li>
                                    {/* shared nav links */}
                                    <div className="divider"></div>
                                    <li>
                                        <NavLink to="/">
                                            Home</NavLink>
                                    </li>
                                </>
                                :
                                <>

                                </>

                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;