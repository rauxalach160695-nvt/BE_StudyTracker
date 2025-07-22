const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.cookies.token;
  if (!token)
    return res.status(401).json({ error: "Acess denied. No token provided" });
  try {
    const decode = jwt.verify(token, process.env.SECRET_TOKEN);
    req.user = decode;
    next();
  } catch (err) {
    res.status(400).json({ error: "Invalid token" });
  }
};

module.exports = auth;
