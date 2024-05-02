import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiNavigation } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import logo from "./Assets/logo.webp";

const Header = () => {
    //nav is starting off false
    const [nav, setNav] = useState(false)
    //so when user click the burger icon, it goes from false(!nav) to true (nav)
    const handleClick = () => setNav (!nav)

    return (
        <nav className="flex justify-between p-5 items-center border-b">
            <div className="flex gap-2">
            <img src={logo} className="w-20 bg-cover"/>
            <h1 className="text-3xl mt-5">BSIT Disbursement System</h1>
            </div>
            <ul className="hidden md:flex gap-40 text-2xl">
                <Link to = {'/'}><li className="hover:text-green-700">Home</li></Link>
                <Link to = {'/receive'}><li className="hover:text-green-700">Receive</li></Link>
                <Link to = {'/disburse'}><li className="hover:text-green-700">Disburse</li></Link>
                <Link to = {'/register'}><li className="hover:text-green-700">Register</li></Link>
                <Link to = {'/logout'}><li>Logout</li></Link>
            </ul>
            
            {/*CLOSE ICON FOR SIDE NAV*/}
           <div className="md:hidden z-10" onClick={handleClick}>
           {nav ? <FaTimes color='black' size={20} /> : <RxHamburgerMenu size={25}/>}
           </div>
           {/*MOBILE VIEW*/}
           <ul className={`${
            nav
            ? 'text-black opacity-100 transform translate-x-0'
            : 'opacity-0 transform translate-y-full'} transition-transform
            absolute top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center text-3xl
            `} onClick={() => setNav (false)}>
                <Link to = {'/'}><li className="p-2 hover:text-green-700 hover:font-bold">Home</li></Link>
                <Link to = {'/receive'}><li className="p-2 hover:text-green-700 hover:font-bold">Receive</li></Link>
                <Link to = {'/disburse'}><li className="p-2 hover:text-green-700 hover:font-bold">Disburse</li></Link>
                <Link to = {'/register'}><li className="p-2 hover:text-green-700 hover:font-bold">Register</li></Link>
                <Link to = {'/logout'}><li className="p-2 hover:text-green-700 hover:font-bold">Logout</li></Link>
           </ul>
        </nav>
    )
}

export default Header;