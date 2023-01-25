const express = require("express");
const cors = require("cors");

const port = 8000;
const app = express();

app.use(cors());

app.get("/", (request, response) => {
  response.json([{ name: "Amka" }, { name: "Tsagaan" }]);
});

app.listen(port, () => {
  console.log("server is running ");
});
