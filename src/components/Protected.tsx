import { isLoggedIn } from "../utils/checkAuth";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
    children: React.ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    if (!isLoggedIn()) {
        return <Navigate to="/Login" />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
