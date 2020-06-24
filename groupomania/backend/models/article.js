const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
  userId: { type: String, required: true },
  date: { type: String, required: true },
  articleName: { type: String, required: true },
  articleDescription: { type: String, required: true },
  imageArticle: { type: String, required: true },
  articlePrice: { type: String, required: true },
  emailContact: { type: String, required: true },
});

module.exports = mongoose.model("Article", articleSchema);
