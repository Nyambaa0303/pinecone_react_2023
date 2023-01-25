const express = require("express");
const cors = require("cors");

const port = 8000;
const app = express();

app.use(cors());

app.get("/", (request, response) => {
  response.json([
    { name: "Amka", age: 22 },
    { name: "Tsagaan", age: 25 },
    { name: "Nairaa", age: 20 },
    { name: "Huslee", age: 20 },
    { name: "Namuun", age: 24 },
    { name: "Nyamka", age: 32 },
  ]);
});

app.listen(port, () => {
  console.log("server is running ");
});
