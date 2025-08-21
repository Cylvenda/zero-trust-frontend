import { BrowserRouter } from "react-router-dom";
import AppRouters from "./routes/AppRouters";
import {ToastContainer} from "react-toastify";

export default function App() {


    return (
        <BrowserRouter>
            <ToastContainer />
            <AppRouters />
        </BrowserRouter>
    )
};
