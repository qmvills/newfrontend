import React from "react";
import Header from "../components/header";
import { useState } from "react";
import Secondyear from "../components/TreasurertList/secondyear";

const tReceive= () => {

    return (
        <div>
            <div>
                <Header />
                <h1 className="mt-8 px-10 text-3xl font-semibold mb-4">Receive</h1>
                <Secondyear/>
            </div>
        </div>
        
    )
}

export default tReceive;