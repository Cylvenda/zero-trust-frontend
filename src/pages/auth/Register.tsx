import {buttonStyle} from "../../components/form/formFields.tsx";
import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {registerFormValidation} from "../../utils/formValidation.ts";
import {registerUser} from "../../services/authService.ts";
import {toast} from "react-toastify";
import type {FormErrors, RegisterFormData} from "../../types/auth.ts";
import {Eye, EyeClosed} from "lucide-react";

export default function Register() {

    const [formErrors, setFormErrors] = useState<FormErrors>({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
    });

    const [formData, setFormData] = useState<RegisterFormData>({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        role: "developer",
    });


    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        try {
            const isValid = await registerFormValidation(formData, setFormErrors);

            if (isValid) {
                // console.log(formData)
                const response = await registerUser(formData);

                if (response) {
                    toast.success("Login successfully");
                    navigate("/Dashboard");
                } else {
                    toast.error(response || "Login failed.");
                }
            }
        } catch (error) {
            console.error("Login error:", error);
            toast.error("An error occurred during login.");
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <div className="body  contrast-100  flex flex-row items-center justify-center">
                <div className=" bg-white flex flex-row gap-3 p-10 rounded-2xl">
                    <div
                        className=" bg-[#133366] h-[27.5rem] w-[25rem] rounded-[5px] flex items-center justify-center p-1">
                        <h1 onClick={() =>navigate('/')} className=" text-center text-3xl font-bold cursor-pointer"> Welcome <br/> to <br/> Zero-Trust
                            Data Engine community </h1>
                    </div>


                    <form className="text-black" onSubmit={handleSubmit} >
                        <h1 className="font-extrabold text-[20px] md:text-2xl">Register</h1>

                        <div className="flex flex-row gap-2 mt-3 ">
                            <div className="flex flex-col text-black">
                                <label htmlFor="FirstName">First Name</label>
                                <input name="first_name"
                                       type="text"
                                       onChange={handleChange}
                                       value={formData.first_name}
                                       className="w-full border p-1 rounded-[5px] border-black bg-[#D9D9D9] outline-none focus:ring-2 focus:ring-blue-500"
                                       placeholder="Enter First Name"/>
                                {formErrors.first_name && <small className="text-[red] ml-3">{formErrors.first_name}</small>}
                            </div>

                            <div className="flex flex-col text-black">
                                <label htmlFor="LastName">Last Name</label>
                                <input name="last_name"
                                       type="text"
                                       onChange={handleChange}
                                       value={formData.last_name}
                                       className="w-full border p-1 rounded-[5px] border-black bg-[#D9D9D9] outline-none focus:ring-2 focus:ring-blue-500"
                                       placeholder="Last Name"/>
                                {formErrors.last_name && <small className="text-[red] ml-3">{formErrors.last_name}</small>}
                            </div>
                        </div>

                        <div className="flex flex-col text-black mt-3">
                            <label htmlFor="username">Username</label>
                            <input name="username"
                                   type="text"
                                   onChange={handleChange}
                                   value={formData.username}
                                   className="w-full border p-1 rounded-[5px] border-black bg-[#D9D9D9] outline-none focus:ring-2 focus:ring-blue-500"
                                   placeholder="Enter Username"/>
                            {formErrors.username && <small className="text-[red] ml-3">{formErrors.username}</small>}
                        </div>

                        <div className="flex flex-col text-black mt-3">
                            <label htmlFor="email">Email</label>
                            <input name="email"
                                   type="text"
                                   onChange={handleChange}
                                   value={formData.email}
                                   className="w-full border p-1 rounded-[5px] border-black bg-[#D9D9D9] outline-none focus:ring-2 focus:ring-blue-500"
                                   placeholder="Enter Email Address"/>
                            {formErrors.email && <small className="text-[red] ml-3">{formErrors.email}</small>}
                        </div>

                        <div className="flex flex-col text-black mt-3">
                            <label htmlFor="password">Password</label>
                            <div className="relative">
                                <input
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    onChange={handleChange}
                                    value={formData.password}
                                    className="w-full border p-1 rounded-[5px] border-black bg-[#D9D9D9] outline-none focus:ring-2 focus:ring-blue-500 pr-10"
                                    placeholder="Enter Password"
                                />
                                <span
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-sm text-blue-600"
                                >
                                {showPassword ? <EyeClosed /> : <Eye/>}
                            </span>
                            </div>
                            {formErrors.password && <small className="text-[red] ml-3">{formErrors.password}</small>}
                        </div>

                        <div className="flex flex-col mt-3">
                            <label htmlFor="password" className="flex flex-row gap-1 ml-3">
                                <input type="checkbox"
                                       className="accent-white cursor-pointer"/>
                                <small> Agree to the terms and privacy. </small>
                            </label>
                            <small className="text-[red] ml-3 " id="password"> </small>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full mt-4 ${buttonStyle} ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {loading ? 'Loading...' : "Register"}
                        </button>

                        <small className="pt-[5rem] ml-4">Already have an account? <span  onClick={()=> navigate('/Login')}
                            className="text-[blue] cursor-pointer">Login</span></small>
                    </form>
                </div>
            </div>
        </>
    )
};