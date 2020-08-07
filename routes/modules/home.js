//引用Express 與 Express 路由器
const express = require("express");
const router = express.Router();

const Record = require("../../models/record");

router.get("/", (req, res) => {
  Record.find()
    .lean()
    .then((record) => res.render("index", { record }))
    .catch((error) => console.error(error));
});

module.exports = router;
