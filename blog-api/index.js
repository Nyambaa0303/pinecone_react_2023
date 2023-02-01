const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { v4: uuid } = require("uuid");

const port = 4000;
const app = express();

app.use(cors());
app.use(express.json());

function readData() {
  const content = fs.readFileSync("data.json");
  const data = JSON.parse(content);
  return data;
}

app.get("/", (req, res) => {
  const data = readData();
  res.json(data);
});

app.get("/:id", (req, res) => {
  const { id } = req.params;
  const data = readData();
  const one = data.find((datas) => datas.id === id);
  if (one) {
    res.json(one);
  } else {
    res.sendStatus(404);
  }
});

app.post("/", (req, res) => {
  const { name, img, stock, status, price } = req.body;
  const newData = {
    id: uuid(),
    name: name,
    img: img,
    stock: stock,
    status: status,
    price: price,
  };

  const data = readData();

  data.push(newData);
  fs.writeFileSync("data.json", JSON.stringify(data));

  res.sendStatus(201);
});

app.delete("/:id", (req, res) => {
  const { id } = req.params;

  const data = readData();
  const one = data.find((category) => category.id === id);
  if (one) {
    const newList = data.filter((category) => category.id !== id);
    fs.writeFileSync("data.json", JSON.stringify(newList));

    res.json({ deletedId: id });
  } else {
    res.sendStatus(404);
  }
});

app.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;
  const data = readData();

  const index = data.findIndex((category) => category.id === id);
  if (index > -1) {
    data[index].name = name;
    data[index].age = age;
    fs.writeFileSync("data.json", JSON.stringify(data));
    res.json({ updatedId: id });
  } else {
    res.sendStatus(404);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
