import React from "react";
import Header from "../components/header";
import { useState } from "react";
import YearList from "../components/YearList";


const Receive= () => {

    return (
        <div>
            <div>
                <Header />
                <h1 className="mt-8 px-10 text-3xl font-semibold mb-4">Receive</h1>
                <YearList/>
            </div>
        </div>
        
    )
}

export default Receive;