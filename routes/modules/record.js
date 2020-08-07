//引用Express 與 Express 路由器
const express = require("express");
const router = express.Router();

const Record = require("../../models/record");

router.get("/new", (req, res) => {
  return res.render("new");
});

router.post("/", (req, res) => {
  const { name, date, category, amount } = req.body;
  return Record.create(req.body)
    .then(() => res.redirect("/"))
    .catch((error) => console.log(error));
});

module.exports = router;
