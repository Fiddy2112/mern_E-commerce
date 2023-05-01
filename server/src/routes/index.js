const authRouter = require("./auth");
const { notFound, errHandle } = require("../middleware/errorHandle");

const initRoutes = (app) => {
  //Route
  app.use("/api/v1/auth", authRouter);

  app.use(notFound);
  app.use(errHandle);
};

module.exports = initRoutes;
