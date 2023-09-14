const mongoose = require("mongoose");

const itemsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
  },
  description: {
    type: String,
    required: [true, "Please provide description"],
  },
  location: {
    type: String,
    required: [true, "Please provide location"],
  },
  category: {
    type: String,
    required: [true, "Please provide category"],
  },
  qrId: {
    type: String,
    required: [true, "Please provide qrId"],
  },
});

module.exports = mongoose.model("items", itemsSchema);
