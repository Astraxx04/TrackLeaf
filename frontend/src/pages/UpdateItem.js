import React, { useState, useEffect } from "react";
import { QrReader } from "react-qr-reader";
import axios from "axios";

const UpdateItem = ({ itemId }) => {
  const [qrData, setQrData] = useState("");
  const [item, setItem] = useState({
    name: "",
    description: "",
    category: "",
    location: "",
    qrId: "",
    userId: "",
  });

  useEffect(() => {
    // Fetch the item data using itemId (assuming you have an API endpoint for this)
    axios
      .get(`http://localhost:5000/api/v1/${itemId}`)
      .then((res) => {
        const itemData = res.data; // Assuming the API response contains item data
        setItem(itemData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [qrData]);

  const handleResult = (result) => {
    if (result) {
      console.log(result.text);
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
      .patch(`http://localhost:5000/api/v1/update/${itemId}`, item) // Assuming you have an API endpoint for updating items
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(item);
  };

  return (
    <div>
      <div>
        <p>Edit Item</p>
      </div>
      <QrReader
        delay={300}
        onError={handleError}
        onResult={handleResult}
        style={{ width: "100%" }}
      />
      <p>{qrData ? qrData : "Scan properly"}</p>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            name="name"
            value={item.name}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="description">
          Description:
          <input
            type="text"
            id="description"
            placeholder="Enter description"
            name="description"
            value={item.description}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="category">
          Category:
          <input
            type="text"
            id="category"
            placeholder="Enter category"
            name="category"
            value={item.category}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="location">
          Location:
          <input
            type="text"
            id="location"
            placeholder="Enter location"
            name="location"
            value={item.location}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="incharge">
          Incharge:
          <input
            type="text"
            id="userId"
            placeholder="Enter incharge"
            name="userId"
            value={item.userId}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateItem;
