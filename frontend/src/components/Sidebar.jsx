import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { BsQrCodeScan } from "react-icons/bs";
import { MdOutlineInventory2 } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import Icon from "../assets/icon.png";

const Sidebar = () => {
  const [isCollapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`p-6  h-screen bg-primary text-white transition-all flex flex-col justify-between ${
        isCollapsed ? "w-16" : "w-56"
      }`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          {isCollapsed ? (
            <img className="w-10" src={Icon} alt="logo.png" />
          ) : (
            <Link to="/">
              <img className="w-32" src={Logo} alt="logo.png" />
            </Link>
          )}
          <button
            className="text-white hover:text-gray-400 transition duration-300"
            onClick={toggleSidebar}
          >
            {isCollapsed ? (
              <>
                <AiOutlineRight />
              </>
            ) : (
              <>
                <AiOutlineLeft />
              </>
            )}
          </button>
        </div>

        <Link to="/dashboard/home" className="flex items-center gap-2 text-lg">
          <RxDashboard />
          <span className={`text-sm ${isCollapsed ? "hidden" : ""}`}>
            Dashboard
          </span>
        </Link>
        <Link
          to="/dashboard/QRGenerator"
          className="flex items-center gap-2 text-lg"
        >
          <BsQrCodeScan />
          <span className={`text-sm ${isCollapsed ? "hidden" : ""}`}>
            Generate QR
          </span>
        </Link>
        <Link
          to="/dashboard/ManageInventory"
          className="flex items-center gap-2 text-lg"
        >
          <MdOutlineInventory2 />
          <span className={`text-sm ${isCollapsed ? "hidden" : ""}`}>
            Manage Inventory
          </span>
        </Link>
        <Link to="/dashboard/Track" className="flex items-center gap-2 text-lg">
          <MdOutlineLogout />
          <span className={`text-sm ${isCollapsed ? "hidden" : ""}`}>
            Track
          </span>
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <p
          className={` text-start font-semibold ${isCollapsed ? "hidden" : ""}`}
        >
          Account
        </p>
        <p className="flex items-center gap-2 text-lg">
          <FaRegUserCircle />
          <span className={`text-sm ${isCollapsed ? "hidden" : ""}`}>
            Ayushi Sah
          </span>
        </p>
        <p className="flex items-center gap-2 text-lg">
          <MdOutlineLogout />
          <span className={`text-sm ${isCollapsed ? "hidden" : ""}`}>
            Log Out
          </span>
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
