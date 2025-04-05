import React, { useState } from "react";
import Sidebar from "../../../components/admin/Sidebar";
import AddStudent from "../../../components/admin/AddStudent";
import AllUsers from "./AllUsers";

const Dashboard = () => {
  const [selected, setSelected] = useState("Dashboard");

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-6 min-h-[90vh] overflow-hidden">
        <div className="xl:col-span-1 md:col-span-2">
          <Sidebar selected={selected} setSelected={setSelected} />
        </div>
        <div className="xl:col-span-5 md:col-span-4 h-screen overflow-y-scroll">
          {selected == "Add User" && <AddStudent />}
          {selected == "All Users" && <AllUsers />}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
