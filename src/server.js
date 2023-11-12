const express = require("express");
const dotenv = require("dotenv");
const configViewEngine = require("./config/viewEngine");
const initWebRoutes = require("./routes/web");

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

configViewEngine(app);
initWebRoutes(app);

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}/`);
});
