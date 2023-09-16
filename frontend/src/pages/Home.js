import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import furniture from "../assets/table.svg";
import Laptop from "../assets/Laptop.svg";
import Chair from "../assets/Chair.svg";
import axios from "axios";
import { Table } from "../components";
import navigate from "react-router-dom";

const Home = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [data, setData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const navigate = useNavigate();

  const count = (y) => {
    return data.filter((x) => x.category === y).length;
  };
  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/").then((res) => {
      setData(res.data.items);
      console.log(res.data.items);
    });
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const addNotification = (message) => {
    setNotifications([...notifications, message]);
  };

  return (
    <div className="flex flex-col gap-4 overflow-y-auto font-semibold self-stretch">
      <div className="py-6 px-4 shadow-md flex justify-between items-center bg-cyan-50 rounded-lg">
        <p className="text-3xl text-start font-bold">Dashboard</p>
        <p
          className="border border-green-400 bg-gray-200 p-2 rounded-md text-lg cursor-pointer"
          onClick={toggleSidebar}
        >
          <IoIosNotificationsOutline />
        </p>
      </div>
      <div
        className={`${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 h-full w-80 shadow-lg bg-cyan-50 transition-transform duration-300 ease-in-out overflow-y-auto`}
      >
        <div className="flex justify-end p-4">
          {/* Close button */}
          <p className="cursor-pointer" onClick={closeSidebar}>
            X {/* You can replace 'X' with your preferred close symbol */}
          </p>
        </div>
        {/* Sidebar content */}
        <div className="flex flex-col gap-4 p-4">
          <p className="text-2xl font-bold text-black">Notifications</p>
          <div className="space-y-2">
            {notifications.map((notification, index) => (
              <div
                key={index}
                className="bg-white p-3 rounded-md border border-gray-300"
              >
                {notification}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-6 bg-cyan-50 px-4 py-6 rounded-lg">
        {/* Table section */}
        <div className="flex justify-between bg-cyan-50 w-80 rounded-lg px-4 items-center">
          <div className="flex flex-col justify-evenly items-start self-stretch">
            <div>
              <p className="font-bold text-lg text-start text-black">
                Furniture
              </p>
              <p className="text-black">Count : {count}</p>
            </div>
            <button
              className="px-6 text-sm py-1 border border-green-400 rounded-md text-black"
              onClick={() => {
                setTableData(data.filter((x) => x.category === "furniture"));
                count("furniture");
              }}
            >
              View
            </button>
          </div>
          <img className="w-32 h-32" src={furniture} alt="table" />
        </div>

        {/* Laptop section */}
        <div className="flex justify-between bg-cyan-50 w-80 rounded-lg px-4 items-center">
          <div className="flex flex-col justify-evenly items-start self-stretch">
            <div>
              <p className="font-bold text-lg text-start text-black">
                Hardware
              </p>
              <p className="text-black">Count : 45</p>
            </div>
            <button
              className="px-6 text-sm py-1 border border-green-400 rounded-md text-black"
              onClick={() =>
                setTableData(data.filter((x) => x.category === "hardware"))
              }
            >
              View
            </button>
          </div>
          <img className="w-32 h-32" src={Laptop} alt="Food" />
        </div>

        {/* Chair section */}
        <div className="flex justify-between bg-cyan-50 w-80 rounded-lg px-4 items-center">
          <div className="flex flex-col justify-evenly items-start self-stretch">
            <div>
              <p className="font-bold text-lg text-start text-black">Food</p>
              <p className="text-black">Count : 30</p>
            </div>
            <button
              className="px-6 text-sm py-1 border border-green-400 rounded-md text-black"
              onClick={() =>
                setTableData(data.filter((x) => x.category === "food"))
              }
            >
              View
            </button>
          </div>
          <img className="w-32 h-32" src={Chair} alt="Chair" />
        </div>
        <div
          className="overflow-y-auto"
          style={{ maxHeight: "calc(100vh - 400px)" }}
        ></div>
      </div>
      <Table data={tableData} />
    </div>
  );
};

export default Home;
