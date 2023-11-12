const express = require("express");
const router = express.Router();
const initWebRoutes = (app) => {
  router.get("/", (req, res) => {
    return res.send("hello world");
  });
  return app.use("/", router);
};
module.exports = initWebRoutes;
