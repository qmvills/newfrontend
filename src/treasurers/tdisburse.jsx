import React from "react";
import { useState } from "react";
import Theader from "../components/theader";

const Tdisburse= () => {

    const [title, setTitle] = useState ("DISBURSEMENT PAGE")

    return (
        <div>
            <Theader/>

            <div className="flex flex-col items-center">
            <h1 className="mt-8 px-10 text-3xl font-bold mb-4 ">"This feature is currently not available."</h1>
            </div>
        </div>
    )
}

export default Tdisburse;