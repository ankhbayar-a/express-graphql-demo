const mongoose = require("mongoose");

const priceCardSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Please add a name value"],
  },
  status: { type: Boolean, default: true },
  tickets: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Ticket" }],
});

module.exports = mongoose.model("PriceCard", priceCardSchema);
