import React from "react";
import Header from "../components/header";

import { useState } from "react";

const Home = () => {

    const [title, setTitle] = useState ("ADMIN DASHBOARD")

    return (
        <div>
            <Header />

            <div className="h-[100vh] bg-white text-black text-center p-5">
                <h1>{ title }</h1>
            </div>
        </div>
    )
}

export default Home;