const mongoose = require("mongoose");

const notesScheema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  title: String,
  description: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

const Notes = mongoose.model("note", notesScheema);
module.exports = Notes;
