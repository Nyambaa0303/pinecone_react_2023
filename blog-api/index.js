require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { v4: uuid } = require("uuid");
const bcrypt = require("bcryptjs");
const { categoryRouter } = require("./routes/categoryController");
const { articleRouter } = require("./routes/articleController");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/tmp/");
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
  .connect(process.env.MONGODB_STRING)
  .then(() => console.log("Connected!"));

const port = 8000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.post(
  "/upload-image",
  upload.single("image"),
  async function (req, res, next) {
    const cloudinaryImage = await cloudinary.v2.uploader.upload(req.file.path);

    console.log({ upload });

    return res.json({
      path: cloudinaryImage.secure_url,
      width: cloudinaryImage.width,
      height: cloudinaryImage.height,
    });
  }
);

app.use("/categories", categoryRouter);
app.use("/articles", articleRouter);

app.listen(port, () => {
  console.log("App is listering at port", port);
});

// const hash = bcrypt.hashSync("nyambaa");
// console.log(hash);

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
