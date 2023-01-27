const express = require("express");
const cors = require("cors");
const { v4: uuid } = require("uuid");

const port = 4000;
const app = express();

app.use(cors());
app.use(express.json());

let data = [
  {
    id: uuid(),
    name: "Amka",
    age: "23",
  },
  {
    id: uuid(),
    name: "Tsagaan",
    age: "25",
  },
  {
    id: uuid(),
    name: "Huslee",
    age: "20",
  },
  {
    id: uuid(),
    name: "Nyamoo",
    age: "32",
  },
];

app.get("/", (req, res) => {
  res.json(data);
});

app.get("/:id", (req, res) => {
  const { id } = req.params;
  const one = data.find((datas) => datas.id === id);
  if (one) {
    res.json(one);
  } else {
    res.sendStatus(404);
  }
});

app.post("/", (req, res) => {
  const { name, age } = req.body;
  console.log(name);
  const newData = { id: uuid(), name: name, age: age };
  data.push(newData);
  res.sendStatus(201);
});

app.delete("/:id", (req, res) => {
  const { id } = req.params;
  const one = data.find((category) => category.id === id);
  if (one) {
    const newList = data.filter((category) => category.id !== id);
    data = newList;
    res.json({ deletedId: id });
  } else {
    res.sendStatus(404);
  }
});

app.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;
  const index = data.findIndex((category) => category.id === id);
  if (index > -1) {
    data[index].name = name;
    data[index].age = age;
    res.json({ updatedId: id });
  } else {
    res.sendStatus(404);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
