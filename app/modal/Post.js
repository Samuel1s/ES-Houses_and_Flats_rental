const mongoose = require("mongoose");

// Construção do JSON casa.
const PostSchema = mongoose.Schema({
  name: {
    type: String,
    lowercase: true
  },

});

module.exports = mongoose.model("Post", PostSchema);