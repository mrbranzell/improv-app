var express = require("express");
var db = require("../db");
var ensureLoggedIn = require("connect-ensure-login").ensureLoggedIn;

var router = express.Router();

router.get("/", ensureLoggedIn(), function (req, res, next) {
  db.all("SELECT * FROM shows", (err, rows) => {
    if (err) console.log(err);
    res.render("show", { user: req.user, suggestions: rows });
  });
});

router.post("/add", ensureLoggedIn(), function (req, res, next) {
  db.run(
    "INSERT INTO shows (suggestion, name, date, remove) VALUES (?, ?, ?, ?)",
    [req.body.suggestion, req.body.name, req.body.date, req.body.remove],
    function (err) {
      if (err) {
        return next(err);
      }
      res.sendStatus(200);
    }
  );
});

module.exports = router;
