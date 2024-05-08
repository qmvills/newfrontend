import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiNavigation } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import logo from "./Assets/logo.webp";
import { GiReceiveMoney } from "react-icons/gi";
import { RiUserAddLine } from "react-icons/ri";
import { IoMdHome } from "react-icons/io";
import { IoLogOutSharp } from "react-icons/io5";
import { GiPayMoney } from "react-icons/gi";

const Theader = () => {

    const [nav, setNav] = useState(false)

    const handleClick = () => setNav (!nav)

    return (
        <nav className="flex justify-between p-5 items-center border-b bg-zinc-800 ">
            <div className="flex gap-2">
            <img src={logo} className="w-20 bg-cover"/>
            <h1 className="text-3xl mt-5 font-bold text-white">BSIT Disbursement System</h1>
            </div>
            <ul className="hidden md:flex gap-28 text-2xl text-white">
                <Link to = {'/thome'}><li className="hover:text-green-700"><IoMdHome className="ml-4 mt-2" size={30} />Home</li></Link>
                <Link to = {'/treceive'}><li className="hover:text-green-700"><GiReceiveMoney className="ml-6 mt-2" size={30}/>Receive</li></Link>
                <Link to = {'/tdisburse'}><li className="hover:text-green-700"><GiPayMoney className="ml-24 mt-2" size={30} />Disbursement History</li></Link>
                
               
            </ul>
            <ul className="hidden md:flex gap-20 text-2xl text-white">
                <Link to = {'/login'}><li><IoLogOutSharp className="ml-6 mt-2" size={30} />Logout</li></Link>
            </ul>
             
            {/*CLOSE ICON FOR SIDE NAV*/}
           <div className="md:hidden z-10" onClick={handleClick}>
           {nav ? <FaTimes color='black' size={20} /> : <RxHamburgerMenu color='white' size={25}/>}
           </div>
           {/*MOBILE VIEW*/}
           <ul className={`${
            nav
            ? 'text-black opacity-100 transform translate-x-0'
            : 'opacity-0 transform translate-y-full'} transition-transform
            absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center text-3xl
            `} onClick={() => setNav (false)}>
                <Link to = {'/thome'}><li className="p-2 hover:text-green-700 hover:font-bold">Home</li></Link>
                <Link to = {'/treceive'}><li className="p-2 hover:text-green-700 hover:font-bold">Receive</li></Link>
                <Link to = {'/tdisburse'}><li className="p-2 hover:text-green-700 hover:font-bold">Disbursement History</li></Link>
                <Link to = {'/login'}><li className="p-2 hover:text-green-700 ">Logout</li></Link>
           </ul>
        </nav>
    )
}

export default Theader;