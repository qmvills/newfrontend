import React from "react";
import { Link } from "react-router-dom";
import COVER_IMAGE from "../Assets/black.png";
import logo from "../Assets/logo.webp";

const Login = () => {
    return (
        <div className="w-full h-screen flex items-start overflow-y-hidden">
            <div className="relative w-1/2 h-full flex flex-col ">
                <div className="absolute top-[20%] left-[32%] flex flex-col">
                    <img src={logo} className="w-80 my-4"/>

                    <div className="w-full items-center justify-center">
                        <h1 className="-ml-4 text-3xl text-white font-bold">BSIT Disbursement System</h1>
                        <p className="-ml-24 text-xl text-white ">Pioneering Efficiency in IT Department Funding Management.</p>
                    </div>
                </div>
                <img src={COVER_IMAGE} className="w-full .h-1/2 object-cover"/>
            </div>

            <div className="w-1/2 h-full bg-white flex flex-col p-32 my-20"> 
                <div className="w-full flex flex-col">
                    <div className="w-full flex flex-col mb-10">
                        <h1 className="text-3xl font-semibold mb-4">Login</h1>
                        <p className="text-textbase mb-2">Welcome! Please enter your details to login.</p>
                    </div>

                    <div className="w-full flex flex-col">
                        <input 
                            type="username"
                            placeholder="Username"
                            className="w-full text-black py-4 my-4 bg-trans border-b border-black outline-none focus:outline-none"/>

                        <input 
                            type="password"
                            placeholder="Password"
                            className="w-full text-black py-4 my-4 bg-trans border-b border-black outline-none focus:outline-none"/>
                    </div>

                    <div className="w-full flex items-center justify-between">
                        <div className="w-full flex items-center">
                            <input type="checkbox" className="w-4 h-4 mr-2"/>
                            <p className="text-sm">Remember me</p>
                        </div>
                        <Link to="/forgot-password" className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">Forgot Password?</Link>
                    </div>

                    <div className="w-full flex flex-col my-4">
                        <Link to="/Home" className="w-full text-white bg-black rounded-md p-4 text-center flex items-center justify-center ease-in-out duration-150 hover:bg-green-700 font-bold">Log In</Link>
                    </div>
                </div>
            </div>
        </div> 
    );
};

export default Login;
