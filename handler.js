const serverless = require("serverless-http");
const express = require("express");
const app = express();

const createError = require("http-errors");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const adminRouter = require("./routes/admin");

const payload = require("./utils/payload-util");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/v1/status", indexRouter);
app.use("/api/v1/admin", adminRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  const status = err.status || 500;
  const code = err.code || -1;
  res.status(status);
  res.json(payload.error(status, code, err.message));
});

// Serverless Lambda 핸들러 함수로 exports
module.exports.app = serverless(app);
