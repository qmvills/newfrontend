import React from "react";
import Header from "../components/header";
import { useState } from "react";

const Receive= () => {

    const [title, setTitle] = useState ("RECEIVE AMOUNT")

    return (
        <div>
            <Header/>

            <div className="h-[100vh] bg-white text-black text-center p-5">
                <h1>{ title }</h1>
            </div>
        </div>
    )
}

export default Receive;