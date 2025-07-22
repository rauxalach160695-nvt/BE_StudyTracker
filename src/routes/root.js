const userRouter = require("./user");

function routes(app) {
  app.use("/user", userRouter);

  app.use("/", (req, res) => {
    return res.status(200).json({ "Main page": "loaded" });
  });
}

module.exports = routes;
