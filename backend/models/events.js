const mongoose = require('mongoose');

const EventsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  details: [
    {
      qid: {
        type: String,
        required: true
      },
      isReturned: {
        type: Boolean,
        default: false
      },
      timeGiven: {
        type: Date,
        required: true,
      },
      timeReturned: {
        type: Date,
      },
    },
  ],
});

module.exports = mongoose.model("Events", EventsSchema);