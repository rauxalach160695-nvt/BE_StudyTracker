const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const isAdmin = require("../middlewares/isAdmin");
// const auth = require("../middlewares/auth");
// const isAdmin = require("../middlewares/isAdmin");

router.post("/addUser", userController.addUser);
router.post("/login", userController.login);
router.post("/cookie", userController.cookie);
router.get("/", (req, res, next) => {
  return res.status(400).json({ message: "da o user controller" });
});

module.exports = router;
