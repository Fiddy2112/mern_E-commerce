require("dotenv").config();
const express = require("express");
const authRouter = require("./routes/User");
const cors = require("cors");
const db = require("./config/server");

//db connect
db.connect();

const app = express();
const port = process.env.PORT || 5050;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Route
app.use("/api/auth", authRouter);

app.listen(port, () => {
  console.log("Server running to the port " + port);
});
