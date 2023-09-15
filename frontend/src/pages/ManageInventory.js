import React from "react";
import { Table } from "../components";

const ManageInventory = () => {
  const data = [
    {
      itemName: "Item 1",
      categoryName: "Category A",
      location: "Location 1",
      incharge: "John Doe",
      description: "Description for Item 1",
    },
    {
      itemName: "Item 1",
      categoryName: "Category A",
      location: "Location 1",
      incharge: "John Doe",
      description: "Description for Item 1",
    },
    {
      itemName: "Item 1",
      categoryName: "Category A",
      location: "Location 1",
      incharge: "John Doe",
      description: "Description for Item 1",
    },
    // Add more data objects as needed
  ];
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white rounded-lg py-6 px-4  ">
        <p className="text-start text-3xl font-bold">Manage Inventory</p>
      </div>
      <div className="rounded-lg bg-white py-6 px-4 ">
        <div className="flex flex-wrap justify-evenly">
          <button className="px-24 py-8 bg-cyan-100 rounded-md font-semibold">
            Add Item
          </button>
          <button className="px-24 py-8 bg-cyan-100 rounded-md font-semibold">
            Update Item
          </button>{" "}
          <button className="px-24 py-8 bg-cyan-100 rounded-md font-semibold">
            Delete Item
          </button>
        </div>
        <Table data={data} />
      </div>
    </div>
  );
};

export default ManageInventory;
