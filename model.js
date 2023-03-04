const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
});

const data = mongoose.model("todo", TodoSchema);

module.exports = data;
