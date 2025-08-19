import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import Home from "../pages/Home/Home";

export default function AppRouters() {


    return (

        <>
            <ProtectedRoutes />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    )
};
