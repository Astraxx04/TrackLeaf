import React from "react";
import { Sidebar, Navbar } from "../components";
import { Outlet } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-4 rounded-lg">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
