const mongoose = require("mongoose");

const ItemsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"]
  },
  description: {
    type: String,
    required: [true, "Please provide description"]
  },
  location: {
    type: String,
    required: [true, "Please provide location"]
  },
  category: {
    type: String,
    required: [true, "Please provide category"]
  },
  qrId: {
    type: String,
    required: [true, "Please provide qrId"]
  },
  userId: {
    type: String,
    required: [true, "Please provide userId"]
  }
});

module.exports = mongoose.model("Items", ItemsSchema);
