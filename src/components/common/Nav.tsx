import {User2Icon} from "lucide-react";
import {useNavigate} from "react-router-dom";
import { useUserStore } from "../../store/userStore";


export default function Nav() {

    const navigate = useNavigate();
    const navListStyle: string = "bg-white text-center rounded-[5px] p-1 cursor-pointer"
    const { clearUser } = useUserStore();

    const handleLogout = () => {
        clearUser();
        navigate("/");
    }

    return (
        <nav className="bg-[#133366] p-3 h-[3.5rem] md:h-[94vh] rounded-[5px] md:rounded-2xl w-full md:w-[15rem] text-black ">

            <ul className=" flex flex-row md:flex-col justify-evenly md:gap-3 ">
                <li onClick={() => navigate("/Dashboard")} className={`${navListStyle}`}>API Token</li>
                <li onClick={() => navigate("/Endpoints")} className={`${navListStyle}`}>API Endpoints</li>

                <div className=" md:absolute bottom-[10%] ">
                    <li onClick={handleLogout} className={`flex flex-row justify-center gap-3 md:w-[11rem] ${navListStyle}`}> Logout</li>
                </div>

                <div className=" md:absolute bottom-[5%] ">
                    <li className={`flex flex-row justify-center gap-3 md:w-[11rem]  ${navListStyle}`}><span><User2Icon/></span> User</li>
                </div>
            </ul>

        </nav>
    )
}