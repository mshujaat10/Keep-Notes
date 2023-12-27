const express = require("express");
const app = express();
const cors = require("cors");
require("./DB/connect");

app.use(cors());
app.use(express.json());

// Available routes

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen("3000", () => {
  console.log("App Started");
});
