import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
import useClient from "../hooks/useClient";



// eslint-disable-next-line react/prop-types
const ClientRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const [isClient, isClientLoading] = useClient()
    const location = useLocation();

    if (loading || isAdminLoading || isClientLoading) {
        return  <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-bars loading-lg text-green-400 mx-auto"></span>
    </div>
    }

    if (user && isAdmin || user && isClient) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>

};

export default ClientRoute;