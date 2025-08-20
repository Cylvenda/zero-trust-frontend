import {buttonStyle} from "../../components/form/formFields";
import {Package} from "lucide-react";
import type {ReactNode} from "react";
import image from "../../assets/bl.png";

interface WorksItemsTypes {
    icon: ReactNode;
    title: string;
    description: string;
}

export default function Home() {

    const worksItems: WorksItemsTypes[] = [
        {
            icon: <Package/>,
            title: "Zero-Trust Security",
            description: "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."
        },
        {
            icon: <Package/>,
            title: "Zero-Trust Security",
            description: "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."
        },
        {
            icon: <Package/>,
            title: "Zero-Trust Security",
            description: "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."
        },
        {
            icon: <Package/>,
            title: "Zero-Trust Security",
            description: "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."
        },
        {
            icon: <Package/>,
            title: "Zero-Trust Security",
            description: "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."
        },
        {
            icon: <Package/>,
            title: "Zero-Trust Security",
            description: "Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."
        },
    ]

    return (
        <>
            <div className="home min-h-screen flex flex-col">
                <header className="flex justify-between bg-white text-[#133366] p-3">
                    <h2 className="font-extrabold text-2xl">Zero-Trust Data Engine</h2>
                    <button className={`${buttonStyle}`}>Get Started</button>
                </header>

                <div className="flex-1 flex items-end justify-center pb-8">
                    <div className="text-center">
                        <h1 className="text-white font-bold text-5xl mb-6">
                            Web 3.0 Data storage Engine <br/> For Web 2.0 Apps
                        </h1>
                        <div className="flex justify-center gap-3 bg-white p-5 w-fit rounded-2xl mx-auto">
                            <button className={`${buttonStyle}`}>Register</button>
                            <button className={`${buttonStyle} w-7 `}>Login</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white text-[#006F9E] border-b-2 border-gray-400  pb-15">
                <div className="pt-6 mb-10">
                    <h1 className="text-3xl font-bold text-center pt-6 ">Why Using Zero Trust Data Engine?</h1>
                    <div className="mt-[3rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-10 w-[70%] mx-auto ">
                        {
                            worksItems.map((item: WorksItemsTypes, index: number) => (
                                <div key={index} className="flex flex-col ">
                                    <span className="flex flex-row gap-5 items-center">{item.icon}<h1>{item.title}</h1></span>
                                    <p className="w-[18rem] ml-11 text-justify text-[#757575]">{item.description}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="bg-white text-[#006F9E]">
               <div className="p-[10rem] pt-[5rem] m-auto ">
                   <span className="card-image">
                        <img src={image} className="rounded-2xl h-[20rem] w-[30rem] " alt="Card image" />
                   </span>

                   <div className=" bg-amber-50 h-[20rem] w-[30rem] " >

                   </div>
               </div>
            </div>
        </>
    );
}