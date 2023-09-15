import React from "react";

const Table = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">S.No</th>
            <th className="px-4 py-2">Item Name</th>
            <th className="px-4 py-2">Category Name</th>
            <th className="px-4 py-2">Location</th>
            <th className="px-4 py-2">Incharge</th>
            <th className="px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
            >
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{item.itemName}</td>
              <td className="px-4 py-2">{item.categoryName}</td>
              <td className="px-4 py-2">{item.location}</td>
              <td className="px-4 py-2">{item.incharge}</td>
              <td className="px-4 py-2">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
