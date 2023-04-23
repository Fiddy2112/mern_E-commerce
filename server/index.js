require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT || 5050;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", (req, res) => {
  res.json("server running!!!");
});

app.listen(port, () => {
  console.log("Server running to the port " + port);
});
