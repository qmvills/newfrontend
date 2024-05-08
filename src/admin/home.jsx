import React from "react";
import Header from "../components/header";
import Dashboard from "../components/dashboard";

import { useState } from "react";

const Home = () => {
  const [title, setTitle] = useState("ADMIN DASHBOARD");

  return (
    <div className="h-screen flex flex-col">
      <Header />
      <h1 className="mt-8 px-10 text-3xl font-semibold mb-4">Financial Overview</h1>
        <div className="flex-grow overflow-auto">
            <Dashboard />
        </div>
    </div>
  );
};

export default Home;
