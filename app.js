var express = require("express");
var passport = require("passport");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var authRouter = require("./routes/auth");
var adminRouter = require("./routes/admin");
var usersRouter = require("./routes/users");
var suggestionRouter = require("./routes/suggestions");
var showRouter = require("./routes/show");

var app = express();

require("./boot/db")();
require("./boot/auth")();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  require("express-session")({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(function (req, res, next) {
  var msgs = req.session.messages || [];
  res.locals.messages = msgs;
  res.locals.hasMessages = !!msgs.length;
  req.session.messages = [];
  next();
});
app.use(passport.initialize());
app.use(passport.authenticate("session"));

// Define routes.
app.use("/", indexRouter);
app.use("/", authRouter);
app.use("/admin", adminRouter);
app.use("/users", usersRouter);
app.use("/suggestion", suggestionRouter);
app.use("/shows", showRouter);

module.exports = app;
