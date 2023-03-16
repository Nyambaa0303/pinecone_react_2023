const { connection } = require("../config/mysql");
const { v4: uuid } = require("uuid");

router.get("/", (req, res) => {
  const { q } = req.query;

  connection.query(
    `SELECT * FROM category where name like ? order by name `,
    [`%${q}%`],
    function (err, results, fields) {
      res.json(results);
    }
  );
});

// filter uildel

router.get("/:id", (req, res) => {
  const { id } = req.params;
  connection.query(
    `select * from category where id=?`,
    [id],
    function (err, results, fields) {
      res.json(results[0]);
    }
  );
});

//  zasah uildel.........

router.post("/", (req, res) => {
  const { name } = req.body;

  const newCategory = {
    id: uuid(),
    name: name,
  };

  connection.query(
    `insert into category values (?,?)`,
    [newCategory.id, newCategory.name],
    function (err, results, fields) {
      res.sendStatus(201);
    }
  );
});

router.delete(`/:id`, (req, res) => {
  const { id } = req.params;
  connection.query(
    `delete from category where id=?`,
    [id],
    function (err, results, fields) {
      res.json({ deletedId: id });
    }
  );
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  connection.query(
    `update category set name=? where id=?`,
    [name, id],
    function (err, results, fields) {
      res.json({ updatedId: id });
    }
  );
});

module.exports = {
  categoryRouter: router,
};
