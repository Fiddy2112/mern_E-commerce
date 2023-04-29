const express = require("express");
const router = express.Router();
const userController = require("../controllers/User");

// CRUD | Create | Read | Update | Delete

router.get("/register", userController.register);

module.exports = router;
