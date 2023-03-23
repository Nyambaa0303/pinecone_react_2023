require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { v4: uuid } = require("uuid");
const bcrypt = require("bcryptjs");
const { categoryRouter } = require("./routes/categoryController");
const { articleRouter } = require("./routes/articleController");
const multer = require("multer");
const cloudinary = require("cloudinary");
const { userRouter } = require("./routes/userController");
const { checkAuth } = require("./middleware/checkAuth");

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

app.use("/categories", checkAuth, categoryRouter);
app.use("/articles", checkAuth, articleRouter);
app.use("/users", userRouter);

app.listen(port, () => {
  console.log("App is listering at port", port);
});
