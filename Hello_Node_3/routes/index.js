var express = require("express");
var router = express.Router();
const moment = require("moment");
/* GET home page. */
router.get("/", function (req, res, next) {
  let date = moment(new Date()).format("YYYY-MM-DD");
  let time = moment(new Date()).format("HH:mm:ss");
  res.render("index", { title: "반갑습니다", date: date, time: time });
});

router.post("/", function (req, res) {
  let name = req.body.name;
  let date = moment(new Date()).format("YYYY-MM-DD");
  let time = moment(new Date()).format("HH:mm:ss");

  res.render("index", {
    title: name + " 님반갑습니다",
    date: date,
    time: time,
  });
});

module.exports = router;
