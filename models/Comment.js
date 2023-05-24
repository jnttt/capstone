const mongoose = require("mongoose");

// Define the Comment schema
const commentSchema = new mongoose.Schema({
  imageId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Image",
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

// Create the Comment model
const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
