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

app.get("/data", (req, res) => {
  res.json(data);
});

app.get("/data/:id", (req, res) => {
  const { id } = req.params;
  const one = data.find((datas) => datas.id === id);
  if (one) {
    res.json(one);
  } else {
    res.sendStatus(404);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
