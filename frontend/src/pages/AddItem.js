import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

const AddItem = () => {
  const [qrData, setQrData] = useState("");
  const [item, setItem] = useState({
    name: "",
    description: "",
    category: "",
    location: "",
    qrId: "",
    incharge: "",
  });

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

    console.log(item);
  };

  return (
    <div>
      <div>
        <p>AddItem</p>
      </div>
      <QrReader
        delay={300}
        onError={handleError}
        onResult={handleResult}
        style={{ width: "100%" }}
      />
      <p>{qrData ? qrData : "scan properly"}</p>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            placeholder="Enter name"
            name="name"
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
            onChange={handleChange}
          />
        </label>

        <label htmlFor="incharge">
          Incharge:
          <input
            type="text"
            id="incharge"
            placeholder="Enter incharge"
            name="incharge"
            onChange={handleChange}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddItem;
