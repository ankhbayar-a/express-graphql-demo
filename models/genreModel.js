const mongoose = require("mongoose");

const genresSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Please add a genre value"],
  },
});

module.exports = mongoose.model("Genres", genresSchema);