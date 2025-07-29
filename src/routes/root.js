const userRouter = require("./user");
const planRouter = require("./plan");

function routes(app) {
  app.use("/user", userRouter);

  app.use("/plan", planRouter);

  app.use("/", (req, res) => {
    return res.status(200).json({ "Main page": "loaded" });
  });
}

module.exports = routes;
