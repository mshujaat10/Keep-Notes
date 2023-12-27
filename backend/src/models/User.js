const mongoose = require("mongoose");
const bycript = require("bcryptjs");

const userScheema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

userScheema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bycript.genSalt(10);
    this.password = await bycript.hash(this.password, salt);
  }
  next();
});

const User = mongoose.model("user", userScheema);
module.exports = User;
