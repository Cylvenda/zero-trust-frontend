import {User2Icon} from "lucide-react";
import {useNavigate} from "react-router-dom";


export default function Nav() {

    const navigate = useNavigate();
    const navListStyle: string = "bg-white text-center rounded-[5px] p-1 cursor-pointer"


    return (
        <nav className="bg-[#133366] p-3 h-[94vh] rounded-2xl w-[15rem] text-black ">

            <ul className=" flex flex-col gap-3 ">
                <li onClick={() => navigate("/Dashboard")} className={`${navListStyle}`}>API Token</li>
                <li onClick={() => navigate("/Endpoints")} className={`${navListStyle}`}>API Endpoints</li>

                <div className="absolute bottom-[5%] ">
                    <li className={`flex flex-row justify-center gap-3 w-[11rem]  ${navListStyle}`}><span><User2Icon/></span> User</li>
                </div>
            </ul>

        </nav>
    )
}