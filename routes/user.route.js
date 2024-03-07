const express = require("express");
const router = express.Router();

const {
  createUser,
  getUserById,
  getUsers,
  updateUser,
  deleteUser,
} = require("../controllers/user.controller.js");

router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
