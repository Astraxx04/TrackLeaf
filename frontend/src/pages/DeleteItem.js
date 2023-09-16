import React, { useState, useEffect } from "react";
import { QrReader } from "react-qr-reader";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DeleteItem = () => {
  const [qrData, setQrData] = useState("");
  const [item, setItem] = useState(null); 

  useEffect(() => {
    // Fetch the item data using qrData (assuming you have an API endpoint for this)
    if (qrData) {
      axios
        .get(`https://trackleafbackend.onrender.com/api/v1/${qrData}`)
        .then((res) => {
          const itemData = res.data.item; 
          setItem(itemData);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [qrData]);
  const handleError = (error) => {
    console.error(error);
  };

  const handleResult = (result) => {
    if (result) {
      setQrData(result.text);
    }
  };

  const handleDelete = () => {
    if (item) {
      axios
        .delete(`https://trackleafbackend.onrender.com/api/v1/delete/${qrData}`) 
        .then((res) => {
          console.log("Item deleted successfully");
          toast("Item deleted successfully!")
          setItem(null); 
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div>
      <div>
        <p>Delete Item</p>
      </div>
      <QrReader
        delay={300}
        onError={handleError}
        onResult={handleResult}
        style={{ width: "100%" }}
      />
      <p>{qrData ? qrData : "Scan properly"}</p>
      {item ? (
        <div>
          <p>Item Details:</p>
          <p>Name: {item.name}</p>
          <p>Description: {item.description}</p>
          <p>Category: {item.category}</p>
          <p>Location: {item.location}</p>
          <p>Incharge: {item.userId}</p>
          <button onClick={handleDelete}>Delete</button>
        </div>
      ) : (
        <p>{qrData ? "No such item to delete" : ""}</p>
      )}
    </div>
  );
};

export default DeleteItem;
