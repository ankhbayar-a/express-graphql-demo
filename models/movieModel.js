const mongoose = require("mongoose");

const movieSchema = mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      required: [true, "Please add a title value"],
    },
    synopsis: { type: String },
    release_date: {
      type: Date,
      required: [true, "Please add a release date value"],
    },
    runtime: { type: Number, required: [true, "Please add a runtime value"] },
    censor: { type: mongoose.SchemaTypes.ObjectId, ref:"Censor" },
    genres: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Genres" }],
    format: [{ type: mongoose.SchemaTypes.ObjectId, ref:"Format" }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Movie", movieSchema);
