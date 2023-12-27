const express = require("express");
const router = express.Router();
const User = require("../models/User");
var jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const JWT_SECRET = "Shujaatisagoodb$oy";
const fetchuser = require("../middleware/fetchuser");

// Create a user using POST "/api/auth/createuser"
router.post("/createuser", async (req, res) => {
  let success = false;
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(404).json({ success, err: "Invalid Cradentials" });
    }
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(404).json({ success, err: "Email already exist" });
    }

    const user = new User({ name, email, password });
    await user.save();

    const data = {
      user: {
        id: user.id,
      },
    };
    const authtoken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.json({ success, authtoken });
  } catch (error) {
    console.log("Error while registering");
  }
});

// Create a user using POST "/api/auth/login"
router.post("/login", async (req, res) => {
  let success = false;
  try {
    const { email, password } = req.body;
    const loginEmail = await User.findOne({ email: email });
    if (!loginEmail) {
      success = false;
      return res.status(400).json({
        success,
        error: "Please try to login with correct credentials",
      });
    }
    const loginPassword = await bcrypt.compare(password, loginEmail.password);

    if (!loginPassword) {
      success = false;
      return res.status(400).json({
        success,
        error: "Please try to login with correct credentials",
      });
    }

    const data = {
      user: {
        id: loginEmail.id,
      },
    };
    const authtoken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.json({ success, authtoken });
  } catch (error) {
    console.log(error);
  }
});

router.post("/getuser", fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
