const express = require("express");
const { v4: uuid } = require("uuid");
const { connection } = require("../config/mysql");
const router = express.Router();

router.get("/", (req, res) => {
  connection.query(
    `SELECT article.id, title, category.name as categoryName FROM article left join category on article.category_id = category.id`,
    function (err, results, fields) {
      console.log({ err });
      res.json({
        list: results,
        count: 10,
      });
    }
  );
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  connection.query(
    `SELECT * FROM article where id=?`,
    [id],
    function (err, results, fields) {
      res.json(results[0]);
    }
  );
});

router.post("/", (req, res) => {
  const { title, content, categoryId } = req.body;
  const newArticle = {
    id: uuid(),
    title,
    content,
    category_id: categoryId,
  };
  connection.query(
    `insert into article set ?`,
    newArticle,
    function (err, results, fields) {
      res.sendStatus(201);
    }
  );
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  connection.query(
    `delete from article where id=?`,
    [id],
    function (err, results, fields) {
      res.json({ deletedId: id });
    }
  );
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, content, categoryId } = req.body;
  connection.query(
    `update article set ? where id=?`,
    [{ title, content, category_id: categoryId }, id],
    function (err, results, fields) {
      res.json({ updatedId: id });
    }
  );
});

module.exports = {
  articleRouter: router,
};
