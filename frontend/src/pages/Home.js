import React from "react";
import { Link } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import Table from "../assets/table.svg";
import Laptop from "../assets/Laptop.svg";
import Chair from "../assets/Chair.svg";
const Home = () => {
  return (
    <div className="flex flex-col gap-4  overflow-y-auto font-semibold self-stretch ">
      <div className="py-6 px-4 shadow-md flex justify-between items-center bg-white rounded-lg">
        <p className="text-3xl text-start font-bold">Dashboard</p>
        <p className="border border-green-400 bg-gray-200 p-2 rounded-md text-lg">
          <IoIosNotificationsOutline />
        </p>
      </div>
      <div className="flex flex-wrap gap-6  bg-white px-4 py-6 rounded-lg ">
        <div className=" flex justify-between bg-cyan-50	  w-80 rounded-lg px-4 items-center">
          <div className="flex flex-col justify-evenly items-start self-stretch">
            <div>
              <p className="font-bold text-lg text-start text-black">Table</p>
              <p className="text-black">Count : 45</p>
            </div>
            <Link className="px-6 text-sm py-1 border border-green-400 rounded-md text-black">
              View
            </Link>
          </div>
          <img className="w-32 h-32" src={Table} alt="table" />
        </div>
        <div className=" flex justify-between bg-cyan-50	 w-80 rounded-lg px-4 items-center">
          <div className="flex flex-col justify-evenly items-start self-stretch">
            <div>
              <p className="font-bold text-lg text-start text-black">Laptop</p>
              <p className="text-black">Count : 45</p>
            </div>
            <Link className="px-6 text-sm py-1 border border-green-400 rounded-md text-black">
              View
            </Link>
          </div>
          <img className="w-32 h-32" src={Laptop} alt="Laptop" />
        </div>

        <div className=" flex justify-between bg-cyan-50	 w-80 rounded-lg px-4 items-center">
          <div className="flex flex-col justify-evenly items-start self-stretch">
            <div>
              <p className="font-bold text-lg text-start text-black">Table</p>
              <p className="text-black">Count : 45</p>
            </div>
            <Link className="px-6 text-sm py-1 border border-green-400 rounded-md text-black">
              View
            </Link>
          </div>
          <img className="w-32 h-32" src={Table} alt="table" />
        </div>
        <div className=" flex justify-between bg-cyan-50	 w-80 rounded-lg px-4 items-center">
          <div className="flex flex-col justify-evenly items-start self-stretch">
            <div>
              <p className="font-bold text-lg text-start text-black">Table</p>
              <p className="text-black">Count : 45</p>
            </div>
            <Link className="px-6 text-sm py-1 border border-green-400 rounded-md text-black">
              View
            </Link>
          </div>
          <img className="w-32 h-32" src={Table} alt="table" />
        </div>
      </div>
    </div>
  );
};

export default Home;
