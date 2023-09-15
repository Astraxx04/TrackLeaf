import React, { useEffect, useState } from "react";
import { Table } from "../components";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import axios from "axios";

const ManageInventory = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/")
      .then((res) => setData(res.data.items));
  }, []);
  // const data = [
  //   {
  //     itemName: "Item 1",
  //     categoryName: "Category A",
  //     location: "Location 1",
  //     incharge: "John Doe",
  //     description: "Description for Item 1",
  //   },
  //   {
  //     itemName: "Item 1",
  //     categoryName: "Category A",
  //     location: "Location 1",
  //     incharge: "John Doe",
  //     description: "Description for Item 1",
  //   },
  //   {
  //     itemName: "Item 1",
  //     categoryName: "Category A",
  //     location: "Location 1",
  //     incharge: "John Doe",
  //     description: "Description for Item 1",
  //   },

  //   {
  //     itemName: "Item 1",
  //     categoryName: "Category A",
  //     location: "Location 1",
  //     incharge: "John Doe",
  //     description: "Description for Item 1",
  //   },
  //   {
  //     itemName: "Item 1",
  //     categoryName: "Category A",
  //     location: "Location 1",
  //     incharge: "John Doe",
  //     description: "Description for Item 1",
  //   },

  //   // Add more data objects as needed
  // ];
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white rounded-lg py-6 px-4  ">
        <p className="text-start text-3xl font-bold">Manage Inventory</p>
      </div>
      <div className="rounded-lg bg-white py-6 px-4 ">
        <div className="flex flex-wrap justify-evenly">
          <button
            onClick={() => navigate("/item/add")}
            className="px-24 py-8 bg-green-100 rounded-md font-semibold"
          >
            Add Item
          </button>
          <button
            onClick={() => navigate("/item/update")}
            className="px-24 py-8 bg-yellow-100 rounded-md font-semibold"
          >
            Update Item
          </button>{" "}
          <button
            onClick={() => navigate("/item/delete")}
            className="px-24 py-8 bg-red-100 rounded-md font-semibold"
          >
            Delete Item
          </button>
        </div>
        <div className="mt-16 flex flex-col gap-4">
          <p className="text-start font-bold text-lg">Recently added Items</p>
          <Table data={data} />
        </div>
      </div>
    </div>
  );
};

export default ManageInventory;
