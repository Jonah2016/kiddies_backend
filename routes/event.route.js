const express = require("express");
const router = express.Router();

const {
  createEvent,
  getEventById,
  getEvents,
  updateEvent,
  deleteEvent,
  registerEvent,
} = require("../controllers/event.controller.js");

router.get("/", getEvents);
router.get("/:id", getEventById);
router.post("/", createEvent);
// router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);
router.put("/register/", registerEvent);

module.exports = router;
