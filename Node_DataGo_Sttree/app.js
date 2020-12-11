import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import mongoose from "mongoose";

const dbConn = mongoose.connection;
dbConn.once("open", () => {
  console.log("MongDB Open OK!!!");
});
dbConn.on("error", () => {
  console.error;
});
mongoose.connect("mongodb://localhost/data-go", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";
import sttRouter from "./routes/sttRouter.js";

const app = express();

// view engine setup
app.set("views", path.join("./views"));
app.set("view engine", "pug");

app.use(logger("common"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join("./public")));

import { sttree_Schedule, justExec } from "./modules/sttree-schedule.js";
sttree_Schedule();
justExec();

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/stt", sttRouter);

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
  res.status(err.status || 500);
  res.render("error");
});

export default app;
