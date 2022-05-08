const mongoose = require("mongoose");

const FormatSchema = mongoose.Schema({
  type: {
    type: String,
    unique: true,
    required: [true, "Please add a name value"],
  },
});

module.exports = mongoose.model("Format", FormatSchema);
