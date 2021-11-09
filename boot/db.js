var db = require("../db");

module.exports = function () {
  db.serialize(function () {
    db.run(
      "CREATE TABLE IF NOT EXISTS users ( \
      username TEXT UNIQUE, \
      hashed_password BLOB, \
      salt BLOB, \
      name TEXT \
    )"
    );
    db.run(
      "CREATE TABLE IF NOT EXISTS suggestions ( \
      suggestion TEXT, \
      name TEXT \
      date DATE \
    )"
    );
    db.run(
      "CREATE TABLE IF NOT EXISTS shows ( \
      suggestion TEXT, \
      name TEXT \
      date DATE \
    )"
    );
  });

  //db.close();
};
