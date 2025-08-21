import {buttonStyle} from "../../components/form/formFields";
import {Instagram, Linkedin, Package, X, Youtube} from "lucide-react";
import type {ReactNode} from "react";
import image from "../../assets/bl.png";
import {useNavigate} from "react-router-dom";

interface WorksItemsTypes {
    icon: ReactNode;
    title: string;
    description: string;
}

interface FeaturesTypes {
    name: string;
    description: string;
}

export default function Home() {

    const navigate = useNavigate()

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

    const features: FeaturesTypes[] = [
        {
            name: "Zero-Trust Security",
            description: "Generate and manage private/public keys seamlessly."
        },
        {
            name: "Key Management",
            description: "Generate and manage private/public keys seamlessly."
        },
        {
            name: "Zero-Trust Security",
            description: "Generate and manage private keys seamlessly."
        }

    ]

    return (
        <>
            <div className="  contrast-100 h-screen flex flex-col">
                <header className="flex justify-between bg-white text-[#133366] p-3">
                    <h2 className="font-extrabold text-[20px] md:text-2xl">Zero-Trust Data Engine</h2>
                    <button onClick={() =>navigate('/Login')} className={` hidden md:block ${buttonStyle}`}>Get Started</button>
                </header>

                <div className=" image-bg flex-1 flex items-end justify-center pb-8">
                    <div className="text-center">
                        <h1 onClick={() =>navigate('/')} className="text-white font-bold text-5xl mb-6">
                            Web 3.0 Data storage Engine <br/> For Web 2.0 Apps
                        </h1>
                        <div className="flex justify-center gap-3 bg-white p-5 w-fit rounded-2xl mx-auto">
                            <button onClick={() =>navigate('/Register')} className={`${buttonStyle}`}>Register</button>
                            <button  onClick={() =>navigate('/Login')} className={`pl-5 pr-5 ${buttonStyle}  `}>Login</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white text-[#133366] border-b-2 border-gray-400  pb-15">
                <div className="pt-6 mb-10">
                    <h1 className="text-3xl font-bold text-center pt-6 ">Why Using Zero Trust Data Engine?</h1>
                    <div
                        className="mt-[3rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-10 w-[90%] sm:w-[90%] md:[70%] mx-auto ">
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

            <div className="bg-white text-[#133366] flex justify-center">
                <div className="p-[10rem] pt-[5rem] mx-auto flex flex-col md:flex-row gap-5">
                   <span className="card-image">
                        <img src={image} className="rounded-2xl h-[100%] md:h-[20rem]  w-[100%] md:w-[30rem] " alt="Card image"/>
                   </span>

                    <div className=" h-[20rem] w-[30rem] ">
                        <h2 className="text-2xl">Zero Trust APIs for Developers</h2>
                        <p className=" text-[#757575]">Easily integrate authentication, key management, and secure data
                            flows into your apps — without the complexity.</p>

                        <div className="flex flex-col gap-5 ml-2">

                            {
                                features.map((items: FeaturesTypes, index: number) => (
                                    <div key={index} className=" mt-4">
                                        <h1>{items.name}</h1>
                                        <p className="text-black">{items.description}</p>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>
            </div>

            <footer className="h-full bg-[#133366]  ">
                <div className="flex flex-row p-[3rem] gap-[5rem]">
                <div className=" w-fit md:w-[20%]">
                    <h1 className="font-bold text-[15px] md:text-2xl">Zero-Trust Data Engine</h1>
                    <span className="flex flex-row gap-3 mt-5">
                         <X/>
                         <Instagram/>
                         <Linkedin/>
                         <Youtube/>
                     </span>
                </div>

                <div className="flex justify-evenly flex-row gap-[5rem] w-full">
                    <div className=" hidden md:block">
                        <h1 className="font-bold">Products</h1>
                        <ul className="flex flex-col gap-2 cursor-pointer">
                            <li>Home</li>
                            <li>About</li>
                            <li onClick={() =>navigate('/Register')}>Register</li>
                            <li onClick={() =>navigate('/Login')}>Login</li>
                        </ul>
                    </div>

                    <div className="hidden md:block">
                        <h1 className="font-bold">Explore</h1>
                        <ul className="flex flex-col gap-2 cursor-pointer">
                            <li>e-GA</li>
                            <li>Ubunifu Portal</li>
                        </ul>
                    </div>

                    <div className="">
                        <h1 className="font-bold">Get More</h1>
                        <ul className="flex flex-col gap-2 cursor-pointer">
                            <li>AlpaChain</li>
                            <li>Faucet</li>
                            <li>Alp</li>
                            <li>Wallet</li>
                        </ul>
                    </div>
                </div>
            </div>

                <div className="m-[2rem] ">
                    <hr className="  border-white "/>

                    <p className="text-center m-4 ">Developed and maintained by eGA-RIDC, Copyright &copy; {new Date().getFullYear()} eGA-RIDC</p>
                </div>

            </footer>
        </>
    );
}