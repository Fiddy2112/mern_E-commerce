require("dotenv").config();
const express = require("express");

const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const db = require("./config/server");
const initRoutes = require("./routes");

//db connect
db.connect();

const app = express();
const port = process.env.PORT || 5050;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
morgan("combined");

//Routes
initRoutes(app);

app.listen(port, () => {
  console.log("Server running to the port " + port);
});
