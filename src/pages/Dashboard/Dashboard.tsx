import Nav from "../../components/common/Nav.tsx";
import {useState} from "react";
import {Copy, CopyCheck} from "lucide-react";
import { getToken } from "../../services/apiService.ts";
import { getSession } from "../../utils/storage.ts";

export default function Dashboard() {

    const [copied, setCopied] = useState(false);
    // const apiTokenL  = "fdghekifalesryhhhhfyrrrrrrrrrrghsdelgh";
    const [apiToken, setApiToken] = useState<string>("");

    const handleCopy = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    const handleGenerateToken = async () => {
        try {
            const response = await getToken(getSession("token"));
            
            setApiToken(response.data.accessToken);
        } catch (error) {
            console.error("Error fetching API endpoints:", error);
        }
    };

    return (
        <>

            <div className="body w-screen h-screen bg-fixed bg-center bg-cover ">
                <div className=" p-5 md:p-8 flex flex-col md:flex-row gap-5 ">
                    <Nav/>

                    <div className="bg-[#133366]  w-full rounded-[7px] h-[94vh] ">
                        <button
                            className="bg-white text-black w-fit font-bold rounded p-1.5 cursor-pointer mt-2.5 ml-4"
                            onClick={handleGenerateToken}
                        >Generate Token </button>

                        <div className="mt-50 flex justify-center">
                            <div className="flex relative">
                                <input
                                    type="text"
                                    value={apiToken}
                                    name="createToken"
                                    readOnly
                                    className="border border-gray-300 w-full md:w-[30rem] p-2 rounded-l-md bg-white text-[blue] outline-none"
                                />
                                <button
                                    onClick={() => handleCopy(apiToken)}
                                    className="bg-white border border-l-[1px] border-black p-3 rounded-r-md hover:bg-gray-100 flex items-center justify-center"
                                >
                                    {copied ? (
                                        <CopyCheck size={20} color="green"/>
                                    ) : (
                                        <Copy size={20} color="black"/>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
