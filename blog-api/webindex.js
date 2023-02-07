const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { v4: uuid } = require("uuid");

const port = 8000;
const app = express();

app.use(cors());
app.use(express.json());

function readCategories() {
  const content = fs.readFileSync("categories.json");
  const categories = JSON.parse(content);
  return categories;
}

function readArticles() {
  const content = fs.readFileSync("articles.json");
  const articles = JSON.parse(content);
  return articles;
}

app.get("/categories", (req, res) => {
  const { q } = req.query;
  const categories = readCategories();
  if (q) {
    const filteredList = categories.filter((category) =>
      category.name.toLowerCase().includes(q.toLowerCase())
    );
    res.json(filteredList);
  } else {
    res.json(categories);
  }
});

app.get("/categories/:id", (req, res) => {
  const { id } = req.params;
  const categories = readCategories();
  const one = categories.find((category) => category.id === id);
  if (one) {
    res.json(one);
  } else {
    res.sendStatus(404);
  }
});

app.post("/categories", (req, res) => {
  const { name } = req.body;
  const newCategory = { id: uuid(), name: name };

  const categories = readCategories();

  categories.unshift(newCategory);
  fs.writeFileSync("categories.json", JSON.stringify(categories));

  res.sendStatus(201);
});

app.delete("/categories/:id", (req, res) => {
  const { id } = req.params;
  const categories = readCategories();
  const one = categories.find((category) => category.id === id);
  if (one) {
    const newList = categories.filter((category) => category.id !== id);
    fs.writeFileSync("categories.json", JSON.stringify(newList));
    res.json({ deletedId: id });
  } else {
    res.sendStatus(404);
  }
});

app.put("/categories/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const categories = readCategories();
  const index = categories.findIndex((category) => category.id === id);
  if (index > -1) {
    categories[index].name = name;
    fs.writeFileSync("categories.json", JSON.stringify(categories));
    res.json({ updatedId: id });
  } else {
    res.sendStatus(404);
  }
});

app.post("/articles", (req, res) => {
  const { title, categoryId, text } = req.body;
  const newArticle = { id: uuid(), title, categoryId, text };

  const articles = readArticles();

  articles.unshift(newArticle);
  fs.writeFileSync("articles.json", JSON.stringify(articles));

  res.sendStatus(201);
});

app.get("/articles/:id", (req, res) => {
  const { id } = req.params;
  const articles = readArticles();
  const one = articles.find((item) => item.id === id);

  const categories = readCategories();
  const category = categories.find(
    (category) => category.id === one.categoryId
  );

  // console.log({ category });

  one.category = category;

  if (one) {
    res.json(one);
  } else {
    res.sendStatus(404);
  }
});

app.listen(port, () => {
  console.log("App is listering at port", port);
});
