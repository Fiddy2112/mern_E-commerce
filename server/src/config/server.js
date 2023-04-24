require("dotenv").config();
const { log } = require("console");
const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Error connecting to MongoDB");
    process.exit(1);
  }
};

module.exports = { connect };
