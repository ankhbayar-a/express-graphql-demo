const mongoose = require("mongoose");

const censorSchema = mongoose.Schema({
  rating: {
    type: String,
    unique: true,
    required: [true, "Please add a name of rating"],
  },
  description: { type: String },
});

module.exports = mongoose.model("Censor", censorSchema);