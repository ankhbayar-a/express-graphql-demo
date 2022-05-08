const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Please add a ticket name value"],
  },
  description: { type: String },
  isChild: { type: Boolean, default: false }
  // ScreenLayout
});

module.exports = mongoose.model("Ticket", ticketSchema);
