const mongoose = require("mongoose");

const screenSchema = mongoose.Schema({
  number: {
    type: Number,
    unique: true,
    required: [true, "Please add a screen number value"],
  },
  name: { type: String },
  // areas: []
  // attribute: { type: String },
});

module.exports = mongoose.model("Screen", screenSchema);