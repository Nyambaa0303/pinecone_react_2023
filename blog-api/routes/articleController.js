const express = require("express");
const { v4: uuid } = require("uuid");
const router = express.Router();
const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  _id: { type: String, default: () => uuid() },
  title: String,
  content: String,
  categoryId: { type: String, ref: "Category" },
  image: {
    path: String,
    width: Number,
    height: Number,
  },
});

const Article = mongoose.model("Article", articleSchema);

router.get("/", async (req, res) => {
  const list = await Article.find({}).populate("categoryId");

  res.json({
    list: list,
    count: 10,
  });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const one = await Article.findById(id);
  res.json(one);
});

router.post("/", async (req, res) => {
  const { title, content, categoryId, image } = req.body;

  await Article.create({
    id: uuid(),
    title,
    content,
    image,
    categoryId,
  });

  res.sendStatus(201);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  await Article.deleteOne({ _id: id });
  res.json({ deletedId: id });
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content, categoryId } = req.body;

  await Article.updateOne({ _id: id }, { title, content, categoryId });

  res.json({ updatedId: id });
});

module.exports = {
  articleRouter: router,
};
