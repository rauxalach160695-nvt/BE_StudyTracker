const express = require("express");
const router = express.Router();
const isAdmin = require("../middlewares/isAdmin");
const auth = require("../middlewares/auth");

router.get("/",auth, isAdmin, (req, res, next) => {
  return res.status(200).json({ message: "da chay dc auth" });
});

module.exports = router;