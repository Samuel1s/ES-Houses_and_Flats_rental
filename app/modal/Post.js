const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
});

module.exports = mongoose.model("Post", PostSchema);