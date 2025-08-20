import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import Home from "../pages/Home/Home";
import Register from "../pages/auth/Register.tsx";
import Login from "../pages/auth/Login.tsx";
import Dashboard from "../pages/Dashboard/Dashboard.tsx";
import Endpoints from "../pages/Dashboard/Endpoints.tsx";

export default function AppRouters() {


    return (

        <>
            <ProtectedRoutes />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Login" element={<Login />} />

                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Endpoints" element={<Endpoints />} />
            </Routes>
        </>
    )
};
