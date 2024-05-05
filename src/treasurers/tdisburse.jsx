import React from "react";
import Header from "../components/header";
import { useState } from "react";
import StudentTable from "../components/TreasurertList/firstyear";
import YearList from "../components/YearList";

const Disburse= () => {

    const [title, setTitle] = useState ("DISBURSEMENT PAGE")

    return (
        <div>
            <Header/>

            <div>
        <h1>DISBURSEMENT PAGE</h1>
            </div>
        </div>
    )
}

export default Disburse;