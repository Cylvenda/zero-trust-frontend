import {AppRoutes} from "./routes/AppRoutes.tsx";
import {BrowserRouter} from "react-router-dom";
import {ConfigProvider} from 'antd';

function App() {

    return (
        <>
            <BrowserRouter>
                <ConfigProvider direction="rtl"> {/* Configuring RTL globally */}
                    <AppRoutes/>
                </ConfigProvider>
            </BrowserRouter>
        </>
    )
}

export default App
