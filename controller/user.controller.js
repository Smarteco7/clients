const validator = require("validator");
const Anonymous = require("../model/user");
const bcrypt = require("bcryptjs");

const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "email already exists" });
    }
    if (!validator.isStrongPassword(password)) {
      return res.status(300).json({ message: "Password is not strong enough" });
    }
    const existingUser = await Anonymous.findOne({ email });
    if (existingUser) {
      return res.status(200).json({ message: "Email already exist" });
    }
    const newUser = new Anonymous({ username, email, password });
    newUser.save();
    const userProfileLink = `http://localhost:2000/users/${username}`;
    return res.json({
      message: "user created successfully",
      profileLink: userProfileLink,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "input Email And Password" });
    }
    const savedAnonymous = await Anonymous.findOne({ email });
    if (!savedAnonymous) {
      return res.status(200).json({ message: "user not found" });
    }
    const validPassword = bcrypt.compare(password, savedAnonymous.password);
    if (!validPassword) {
      return res.status(201).json({ message: "invalid password" });
    }
    return res.json({ message: "login successful" });
  } catch (error) {
    console.error(error);
    res.status(505);
  }
};

const findUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Anonymous.findById(id);
    if (!user) {
      return res.json({ message: "user does not exist" });
    }
    // const userProfileLink = `http://localhost:2000/users/${username}`;
    return res.json({ message: "user found", user });
  } catch (error) {
    console.error("error");
    return res.json({ message: "internal server error" });
  }
};

const findByUsername = async (req, res) => {
  try {
    const { username } = req.params;

    const userr = await Anonymous.find({ username });
    if (!userr) {
      return res.status(404).json("user not found");
    }
    return res.status(201).json({
      message: `welcome to your profile`,
    });
  } catch (error) {
    console.error("error");
    return res.json({ message: "internal server error" });
  }
};

module.exports = {
  signUp,
  login,
  findUserById,
  findByUsername,
};
