import React from "react";
import Theader from "../components/theader";
import Tdashboard from "../components/tdashboard";

import { useState } from "react";

const Thome = () => {
  const [title, setTitle] = useState("TREASURERS DASHBOARD");

  return (
    <div className="h-screen flex flex-col">
      <Theader />
      <h1 className="mt-8 px-10 text-4xl font-semibold mb-4">Welcome Jairah Jave!</h1>  {/*name coming fron db*/}
      <h1 className="mt-8 px-10 text-3xl font-semibold mb-4">Financial Overview</h1>
        <div className="flex-grow overflow-auto">
            <Tdashboard />
        </div>
    </div>
  );
};

export default Thome;
