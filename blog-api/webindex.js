const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const fs = require("fs");
const { v4: uuid } = require("uuid");
const bcrypt = require("bcryptjs");
const { categoryRouter } = require("./routes/categoryController");
const { articleRouter } = require("./routes/articleController");

// const hash = bcrypt.hashSync("nyambaa");
// console.log(hash);

const user = {
  username: "Nyambaa",
  password: "$2a$10$WhE2K2zxsUuKktV0NqxscuHieUEmbcSxfamf6wimVHoPx1NO2JjaG",
};

// let userTokens = [];

mongoose
  .connect(
    "mongodb+srv://teal:XHpbKKvdUM1vSCNr@cluster0.lyljqia.mongodb.net/blog"
  )
  .then(() => console.log("Connected!"));

const port = 8000;
const app = express();

app.use(cors());
app.use(express.json());

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
