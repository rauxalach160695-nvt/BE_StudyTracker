const jwt = require("jsonwebtoken");

const isAdmin = (req, res, next) => {
  const token = req.cookie.token;
  if (!token)
    return res.status(401).json({ error: "Access denied. No token provided" });
  try {
    const decode = jwt.verify(token, process.env.SECRET_TOKEN);
    if (decode.user == "1") {
      next();
    } else {
      res
        .status(400)
        .json({ error: "You dont have permission to access this page" });
    }
  } catch (err) {
    res.status(400).json({ error: "Invalid token" });
  }
};

module.exports = isAdmin;
