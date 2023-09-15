import React from "react";

const Table = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-sm">S.No</th>
            <th className="px-4 py-2 text-sm">Item Name</th>
            <th className="px-4 py-2 text-sm">Category Name</th>
            <th className="px-4 py-2 text-sm">Location</th>
            <th className="px-4 py-2 text-sm">Incharge</th>
            <th className="px-4 py-2 text-sm">Expiry</th>
            <th className="px-4 py-2 text-sm">Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="px-4 py-2 text-sm">{index + 1}</td>
              <td className="px-4 py-2 text-sm">{item.name}</td>
              <td className="px-4 py-2 text-sm">{item.category}</td>
              <td className="px-4 py-2 text-sm">{item.location}</td>
              <td className="px-4 py-2 text-sm">{item.userId}</td>
              <td className="px-4 py-2 text-sm">{item.userId}</td>
              <td className="px-4 py-2 text-sm">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
