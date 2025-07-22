const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const auth = require("../middlewares/auth");
const isAdmin = require("../middlewares/isAdmin");

console.log("where am i")
router.get("/addUser", userController.addUser);
router.get("/", (req, res, next) => {
  return res.status(400).json({ message: "da o user controller" });
});

module.exports = router;
