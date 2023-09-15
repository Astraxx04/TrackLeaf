import React, { useState, useEffect } from "react";
import { QrReader } from "react-qr-reader";
import axios from "axios";

const Tracker = () => {
  const [qrData, setQrData] = useState("");
  const [qrArray, setQrArray] = useState([]);
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
        .then(console.log(item))
        .catch((err) => {
          console.log(err);
        });
    }
  }, [qrData]);
  const handleResult = (result) => {
    if (result) {
      console.log(result.text);
      setQrData(result.text);
      setQrArray([...qrArray, result.text]);
    }
  };

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    for (const x in qrArray) {
      e.preventDefault();
      axios
        .patch(`http://localhost:5000/api/v1/update/${x}`, {
          userId,
          status: "given",
        }) // Assuming you have an API endpoint for updating items
        .then((res) => {
          setItem({
            name: "",
            description: "",
            category: "",
            location: "",
            qrId: "",
            userId: "",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
