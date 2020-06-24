const mongoose = require("mongoose");

const messageSchema = mongoose.Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  message: { type: String, required: true },
  imageUrl: { type: String, required: false },
  date: { type: String, required: true },
  creatorFirstname: { type: String, required: true },
  creatorLastname: { type: String, required: true },
});

module.exports = mongoose.model("Message", messageSchema);
