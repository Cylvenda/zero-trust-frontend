import Nav from "../../components/common/Nav.tsx";
import {useState} from "react";
import {Copy, CopyCheck} from "lucide-react";

type EndPointsData = {
    label: string;
    value: string;
}

export default function Endpoints() {

    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const apiEndPoints:EndPointsData[] = [
        { label: "http POST Request:", value: "zerotrust/api/developingmode" },
        { label: "http GET Request:", value: "zerotrust/api/developingmode" },
        { label: "http UPDATE Request:", value: "zerotrust/api/developingmode" },
    ];

    const handleCopy = async (text: string, index: number) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedIndex(index);
            setTimeout(() => setCopiedIndex(null), 2000); // reset after 2s when clicked
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    return (
        <>

            <div className=" w-screen h-screen bg-fixed bg-center bg-cover " >
                <div className="  p-5 md:p-8 flex flex-col md:flex-row gap-5  ">
                    <Nav/>

                    <div className="bg-[#133366]  w-full rounded-[7px] h-[94vh] ">
                                <div className="m-4">
                                    <h2 className="text-4xl mb-4">Quickstarts</h2>
                                    <span>Get started with ZeroTrust</span>

                                    <p className="w-full md:w-[70%] mt-10 text-justify">
                                        ZeroTrust provides a unified API that gives you access to hundreds through a
                                        single endpoint, while automatically handling fallbacks
                                        and selecting the most cost-effective options. Get started with just a few lines
                                        of code using your preferred SDK or framework.
                                    </p>
                                </div>

                                <button
                                    className="bg-white text-black w-fit font-bold rounded p-1.5 cursor-pointer mt-2.5 ml-4"
                                    // onClick={() => getApiEndPoints()}
                                > Generate API Endpoints
                                </button>

                                <div className="flex flex-col gap-10 mt-8 ml-7">
                                    {apiEndPoints.map((item, index) => (
                                        <div key={index} className="font-bold m-6">
                                            <span>{item.label}</span>
                                            <label className="flex flex-row absolute">
                                                <input
                                                    type="text"
                                                    value={item.value}
                                                    readOnly
                                                    className="border-[1px] border-r-0 border-l-0 border-t-0 border-b-[1px]  font-light border-[#FFFFFF] w-full sm:w-[15rem] md:w-[30rem] p-2  text-[white] outline-none  bg-text-[#006F9E]"
                                                />
                                                <div
                                                    onClick={() => handleCopy(item.value, index)}
                                                    className="border-[1px] border-r-0 border-b-[1px] border-t-0 border-l-[1px]  border-[#FFFFFF] p-3 left-[94%] w-fit top-12  cursor-pointer"
                                                >
                                                    {copiedIndex === index ? (
                                                        <CopyCheck color="blue"/>
                                                    ) : (
                                                        <Copy color="white"/>
                                                    )}
                                                </div>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
        </>
    )
};
