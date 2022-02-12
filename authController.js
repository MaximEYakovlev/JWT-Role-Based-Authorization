const User = require("./models/User");
const Role = require("./models/Role");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

class authController {
  async signup(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ message: "Error during registration.", errors });
      }
      const { username, password } = req.body;
      const candidate = await User.findOne({ username });
      if (candidate) {
        return res
          .status(400)
          .json({ message: "A user with this name already exists." });
      }
      const hashPassword = bcrypt.hashSync(password, process.env.SALT);
      const userRole = await Role.findOne({ value: "USER" });
      const user = new User({
        username,
        password: hashPassword,
        roles: [userRole.value],
      });
      await user.save();
      return res.json({
        message: "The user has been successfully registered.",
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Signup error" });
    }
  }

  async login(req, res) {
    try {
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: "Login error" });
    }
  }

  async getUsers(req, res) {
    try {
    } catch (error) {}
  }
}

module.exports = new authController();
