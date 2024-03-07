const asyncHandler = require("express-async-handler");
const User = require("../models/user.model.js");

const getUsers = asyncHandler(async (req, res) => {
  const user = await User.find({});
  res.status(200).json(user);
});

const getUserById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id, req.body);

  if (!user) {
    res.status(404);
    throw new Error("No user data found");
  }

  res.status(200).json(user);
});

const createUser = asyncHandler(async (req, res) => {
  const user = await User.create(req.body);
  res.status(200).json(user);
});

const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  if (!user) {
    res.status(404);
    throw new Error("No user data found");
  }

  const updatedUser = await User.findByIdAndUpdate(id, req.body);
  res.status(200).json(updatedUser);
});

const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  if (!user) {
    res.status(404);
    throw new Error("No user data found");
  }

  await User.deleteOne(id, req.body);

  res
    .status(200)
    .json({ message: "User with ID: " + id + " deleted successfully." });
});

const loginUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  if (!user) {
    res.status(404);
    throw new Error("No user data found");
  }

  const updatedUser = await User.findByIdAndUpdate(id, req.body);
  res.status(200).json(updatedUser);
});

module.exports = {
  getUsers,
  getUserById,
  createUser,
  loginUser,
  updateUser,
  deleteUser,
};
