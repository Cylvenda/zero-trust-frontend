import {buttonStyle} from "../../components/form/formFields.tsx";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import type {FormErrors, LoginFormData} from "../../types/auth.ts";
import React from "react";
import {loginUser} from "../../services/authService.ts";
import {toast} from "react-toastify";
import {loginFormValidation} from "../../utils/formValidation.ts";


export default function ChangePassword() {
    const [formErrors, setFormErrors] = useState<FormErrors>({
        email: "",
        password: "",
    });

    const [formData, setFormData] = useState<LoginFormData>({
        email: "",
        password: ""
    });

    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormData((prev) => ({...prev, [name]: value}));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        try {
            const isValid = await loginFormValidation(formData, setFormErrors);

            if (isValid) {
                // console.log(formData)
                const response = await loginUser(formData);

                if (response.success) {
                    toast.success("Login successfully");
                    navigate("/Dashboard");
                } else {
                    // console.log(response.message)
                    toast.error(response.message);

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
        <div className="body contrast-100 flex flex-row items-center justify-center ">
            <div className="bg-white flex flex-row gap-3 p-5 md:p-10 rounded-2xl">
                <div className="hidden md:block">
                    <div
                        className="bg-[#133366] h-[14rem] w-[25rem] rounded-[10px] flex items-center justify-center p-1">
                        <h1
                            onClick={() => navigate('/')}
                            className="text-center text-3xl font-bold text-white cursor-pointer"
                        >
                            Welcome <br/> to <br/> Zero-Trust Data Engine community
                        </h1>
                    </div>
                </div>

                <form className="text-black w-[20rem]" onSubmit={handleSubmit}>
                    <h1 className="font-extrabold text-[20px] md:text-2xl">Reset Password</h1>


                    <div className="flex flex-col text-black mt-3">
                        <label htmlFor="email">Email</label>
                        <input
                            name="email"
                            type="text"
                            onChange={handleChange}
                            value={formData.email}
                            className="w-full border p-1 rounded-[5px] border-black bg-[#D9D9D9] outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter Email Address"
                        />
                        {formErrors.email && <small className="text-[red] ml-3">{formErrors.email}</small>}
                    </div>



                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full mt-4 ${buttonStyle} ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {loading ? 'Loading...' : "Click to Receive Password Reset Link"}
                    </button>

                    {/* Register */}
                    <small className="pt-5 ml-4 block">
                        Don’t have an account?{" "}
                        <span
                            onClick={() => navigate('/Register')}
                            className="text-[blue] cursor-pointer"
                        >
                            Create an account
                        </span>
                    </small>
                </form>
            </div>
        </div>
    );
}
