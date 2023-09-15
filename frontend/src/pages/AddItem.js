import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import axios from "axios";

const AddItem = () => {
  const [qrData, setQrData] = useState("");
  const [item, setItem] = useState({
    name: "",
    description: "",
    category: "",
    location: "",
    qrId: "",
    userId: "",
  });

  const handleResult = (result) => {
    if (result) {
      setQrData(result.text);
      setItem({ ...item, qrId: result.text });
    }
  };

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleError = (error) => {
    console.error(error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/v1/insert", item)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-bold text-center">Add Item</h2>

      <QrReader
        delay={300}
        onError={handleError}
        onResult={handleResult}
        style={{ width: "100%" }}
      />

      <p className="text-center mt-4 text-2xl color-primary">{qrData ? qrData : "Scan properly"}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center">
          <label htmlFor="name" className="block text-sm font-medium w-1/4">
            Name:
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            name="name"
            onChange={handleChange}
            className="mt-1 p-2 border rounded-lg flex-grow"
          />
        </div>

        <div className="flex items-center">
          <label htmlFor="description" className="block text-sm font-medium w-1/4">
            Description:
          </label>
          <input
            type="text"
            id="description"
            placeholder="Enter description"
            name="description"
            onChange={handleChange}
            className="mt-1 p-2 border rounded-lg flex-grow"
          />
        </div>

        <div className="flex items-center">
          <label htmlFor="category" className="block text-sm font-medium w-1/4">
            Category:
          </label>
          <input
            type="text"
            id="category"
            placeholder="Enter category"
            name="category"
            onChange={handleChange}
            className="mt-1 p-2 border rounded-lg flex-grow"
          />
        </div>

        <div className="flex items-center">
          <label htmlFor="location" className="block text-sm font-medium w-1/4">
            Location:
          </label>
          <input
            type="text"
            id="location"
            placeholder="Enter location"
            name="location"
            onChange={handleChange}
            className="mt-1 p-2 border rounded-lg flex-grow"
          />
        </div>

        <div className="flex items-center">
          <label htmlFor="userId" className="block text-sm font-medium w-1/4">
            Incharge:
          </label>
          <input
            type="text"
            id="userId"
            placeholder="Enter incharge"
            name="userId"
            onChange={handleChange}
            className="mt-1 p-2 border rounded-lg flex-grow"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddItem;
