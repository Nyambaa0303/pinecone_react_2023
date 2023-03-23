const jwt = require("jsonwebtoken");

const checkAuth = (req, res, next) => {
  const token = req.headers.authorization;
  jwt.verify(token, process.env.JWT_SECRET, async function (err, decoded) {
    if (err) {
      res.sendStatus(401);
    } else {
      next();
    }
  });
};

module.exports = {
  checkAuth,
};
