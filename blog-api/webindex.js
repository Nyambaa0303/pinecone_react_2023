const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const fs = require("fs");
const { v4: uuid } = require("uuid");
const bcrypt = require("bcryptjs");
const { categoryRouter } = require("./routes/categoryController");
const { articleRouter } = require("./routes/articleController");
const multer = require("multer");

// const hash = bcrypt.hashSync("nyambaa");
// console.log(hash);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    const extentsion = file.originalname.split(".").pop();
    cb(null, `${uuid()}.${extentsion}`);
  },
});

const upload = multer({
  storage: storage,
});

const user = {
  username: "Nyambaa",
  password: "$2a$10$WhE2K2zxsUuKktV0NqxscuHieUEmbcSxfamf6wimVHoPx1NO2JjaG",
};

// let userTokens = [];

mongoose
  .connect("mongodb+srv://nyambaa:nyambaa123@cluster0.cikzkbo.mongodb.net/blog")
  .then(() => console.log("Connected!"));

const port = 8000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.post("/upload-image", upload.single("image"), function (req, res, next) {
  res.json(["success"]);
});

app.use("/categories", categoryRouter);
app.use("/articles", articleRouter);

app.listen(port, () => {
  console.log("App is listering at port", port);
});

app.get("/login", (req, res) => {
  const { username, password } = req.query;

  if (
    user.username === username &&
    bcrypt.compareSync(password, user.password)
  ) {
    const token = uuid();
    // userTokens.push(token);
    const content = fs.readFileSync("webToken.json");
    const userTokens = JSON.parse(content);
    userTokens.push({ token });
    fs.writeFileSync("webToken.json", JSON.stringify(userTokens));
    res.json({ token });
  } else {
    res.sendStatus(401);
  }
});
