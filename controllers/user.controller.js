const User = require("../models/user.model.js");

const getUsers = async (req, res) => {
  try {
    const user = await User.find({});
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal server error: " + error });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id, req.body);

    if (!user) {
      res.status(404).json("User not found: " + error);
      res.status(400).json("Bad request: " + error);
    }

    res.status(200).json(user);
  } catch (error) {
    res
      .status(500)
      .json({ massage: "Internal Server error: " + error.message });
    res.status(400).json("Bad request: " + error);
  }
};

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res
      .status(500)
      .json({ massage: "Internal Server error: " + error.message });
    res.status(503).json("User unavailable: " + error);
    res.status(400).json("Bad request: " + error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body);

    if (!user) {
      res.status(404).json("User not found: " + error);
      res.status(400).json("Bad request: " + error);
    }

    const updatedUser = await User.findById(id);
    res.status(200).json(updatedUser);
  } catch (error) {
    res
      .status(500)
      .json({ massage: "Internal Server error: " + error.message });
    res.status(400).json("Bad request: " + error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.deleteOne(id, req.body);

    if (!user) {
      res
        .status(404)
        .json("User could not be deleted because user wasn't found: " + error);
      res.status(400).json("Bad request: " + error);
    }

    res
      .status(200)
      .json({ message: "User with ID: " + id + " deleted successfully." });
  } catch (error) {
    res
      .status(500)
      .json({ massage: "Internal Server error: " + error.message });
    res.status(400).json("Bad request: " + error);
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
