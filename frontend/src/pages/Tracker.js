import React, { useState, useEffect } from "react";
import { QrReader } from "react-qr-reader";
import axios from "axios";

const Tracker = () => {
  const [qrData, setQrData] = useState("");
  const [qrDataArray, setQrDataArray] = useState([]); // Use state to store QR code data
  const [item, setItem] = useState({
    name: "",
    description: "",
    category: "",
    location: "",
    qrId: "",
    userId: "",
  });
  const [userId, setUserId] = useState("");

  useEffect(() => {
    if (qrData) {
      axios
        .get(`http://localhost:5000/api/v1/${qrData}`)
        .then((res) => {
          setItem(res.data.item);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [qrData]);

  const handleResult = (result) => {
    if (result) {
      console.log(result.text);
      setQrData(result.text);
      setQrDataArray((prevArray) => [...prevArray, result.text]); // Update the state array
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(qrDataArray);
    const newStatus = qrCode.status === "given" ? "received" : "given";
    // Use Promise.all to wait for all API requests to complete
    const updatePromises = qrDataArray.map((qrCode, index) => {
      return axios.patch(`http://localhost:5000/api/v1/update/${qrCode}`, {
        userId,
        status: newStatus,
      });
    });

    Promise.all(updatePromises)
      .then((responses) => {
        setItem({
          name: "",
          description: "",
          category: "",
          location: "",
          qrId: "",
          userId: "",
          expiry: "",
        });
        console.log(responses);
        // Clear the QR code data after processing
        setQrData("");
        setQrDataArray([]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleError = (error) => {
    console.error(error);
  };

  return (
    <div>
      <div>
        <p>Edit Item</p>
      </div>
      <input
        type="text"
        onChange={(e) => setUserId(e.target.value)}
        placeholder="incharge"
      />
      <QrReader
        delay={300}
        onError={handleError}
        onResult={handleResult}
        style={{ width: "100%" }}
      />
      <p>{qrData ? qrData : "Scan properly"}</p>
      <button onClick={handleSubmit}>Scan</button>
    </div>
  );
};

export default Tracker;
