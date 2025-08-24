import Nav from "../../components/common/Nav.tsx";
import {useState} from "react";
import {Copy, CopyCheck} from "lucide-react";

export default function Dashboard() {

    const [copied, setCopied] = useState(false);
    const apiToken  = "fdghekifalesryhhhhfyrrrrrrrrrrghsdelgh";

    const handleCopy = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };

    return (
        <>

            <div className="body w-screen h-screen bg-fixed bg-center bg-cover ">
                <div className=" p-5 md:p-8 flex flex-col md:flex-row gap-5 ">
                    <Nav/>

                    <div className="bg-[#133366]  w-full rounded-[7px] h-[94vh] ">
                        <button
                            className="bg-white text-black w-fit font-bold rounded p-1.5 cursor-pointer mt-2.5 ml-4">Generate Token </button>

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
