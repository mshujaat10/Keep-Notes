const mongoose = require("mongoose");
const DB = "mongodb+srv://mshujaat:cluster123@cluster0.iheopal.mongodb.net/keepnotes?retryWrites=true&w=majority";

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connected To DataBase");
  })
  .catch((error) => {
    console.log(`Not Connected ${error}`);
  });
