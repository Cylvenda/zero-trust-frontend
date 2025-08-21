import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home/Home";
import Register from "../pages/auth/Register.tsx";
import Login from "../pages/auth/Login.tsx";
import Dashboard from "../pages/Dashboard/Dashboard.tsx";
import Endpoints from "../pages/Dashboard/Endpoints.tsx";
import Protected from "../components/Protected.tsx";
import ChangePassword from "../pages/auth/ChangePassword.tsx";

export default function AppRouters() {


    return (

        <>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Register" element={<Register/>}/>
                <Route path="/Login" element={<Login/>}/>
                <Route path="/ChangePassword" element={<ChangePassword />}/>

                <Route path="/Dashboard" element={
                    <Protected> <Dashboard/> </Protected>
                }/>
                <Route path="/Endpoints" element={
                    <Protected> <Endpoints/> </Protected>
                }/>
            </Routes>
        </>
    )
};
