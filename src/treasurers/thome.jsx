import React from "react";
import Header from "../components/header";
import Dashboard from "../components/dashboard";

import { useState } from "react";

const Thome = () => {
  const [title, setTitle] = useState("TREASURERS DASHBOARD");

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <h1 className="mt-8 px-10 text-3xl font-semibold mb-4">Dashboard</h1>
        <div className="flex-grow overflow-auto">
            <Dashboard />
        </div>
    </div>
  );
};

export default Thome;
