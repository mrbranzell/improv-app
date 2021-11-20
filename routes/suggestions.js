var express = require("express");
var db = require("../db");
var ensureLoggedIn = require("connect-ensure-login").ensureLoggedIn;

var router = express.Router();

router.get("/", ensureLoggedIn(), function (req, res, next) {
  db.all("SELECT * FROM suggestions", (err, rows) => {
    if (err) console.log(err);
    res.render("suggestions", { user: req.user, suggestions: rows });
  });
});

router.post("/add", function (req, res, next) {
  console.log(req.body.suggestion);
  db.run(
    "INSERT INTO suggestions (suggestion, name) VALUES (?, ?)",
    [req.body.suggestion, req.body.name],
    (err) => {
      if (err) {
        return next(err.message);
      }
    }
  );
});

module.exports = router;
