const User = require("../models/User");

class UserController {
  /**
   * @route POST api/auth/register
   * @desc Register user
   * @access Public
   */

  async register(req, res) {
    const { name, email, password } = req.body;

    if (!name || !password || !email) {
      return (
        res.status(400),
        json({
          success: false,
          message: "Invalid username/email or password",
        })
      );
    }
    try {
      //check existing user
      const user = await User.findOne({ name });

      //user taken
      if (user) {
        return res.status(400).json({
          success: false,
          message: "User already taken",
        });
      }

      const newUser = new User({
        name,
        password,
        email,
      });
      //save User
      await newUser.save();

      res.status(200).json({
        success: true,
        message: "User created successfully",
      });
    } catch (err) {
      console.error(err);
      return res.status(400).json({
        success: false,
        message: "Internal server error",
        err,
      });
    }
  }
}
module.exports = new UserController();
