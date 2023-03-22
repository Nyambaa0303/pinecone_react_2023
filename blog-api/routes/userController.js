const express = require("express");
const { v4: uuid } = require("uuid");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = mongoose.model("User", {
  _id: { type: String, default: () => uuid() },
  username: {
    type: String,
    required: [true, "Хэрэглэгчийн нэрээ оруулна уу"],
    unique: [true, "Ийм нэртэй хэрэглэгч бүртгэгдсэн байна"],
  },
  password: {
    type: String,
    required: [true, "Нууц үгээ оруулна уу"],
  },
  role: String,
});

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 8);

  if (!username) {
    res.status(400).json({ message: "Хэрэглэгчийн нэрээ оруулна уу" });
  }

  if (!password) {
    res.status(400).json({ message: "Нууц үгээ оруулна уу" });
  }

  const newUser = new User({
    username,
    password: hashedPassword,
  });

  try {
    const result = await newUser.save();
    res.sendStatus(201);
  } catch (e) {
    res.status(400).json(e);
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const one = await User.findOne({ username });

  if (one) {
    const auth = bcrypt.compareSync(password, one.password);
    if (auth) {
      const token = jwt.sign({ userId: one._id }, "XZv01Mp1");
      res.json({ token: token });
    } else {
      res.status(400).json({ message: "Буруу байна" });
    }
  } else {
    res.status(400).json({ message: "Буруу байна" });
  }
});

module.exports = {
  userRouter: router,
};
