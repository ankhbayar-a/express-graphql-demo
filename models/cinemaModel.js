const mongoose = require("mongoose");

const cinemaSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Please add a name of cinema"],
  },
  screens: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Screen" }],
});

module.exports = mongoose.model("Cinema", cinemaSchema);
