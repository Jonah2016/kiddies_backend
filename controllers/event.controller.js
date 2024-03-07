const Event = require("../models/event.model.js");
const User = require("../models/user.model.js");

const getEvents = async (req, res) => {
  try {
    const event = await Event.find({});
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ message: "Internal server error: " + error });
  }
};

const getEventById = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findById(id, req.body);

    if (!event) {
      res.status(404).json("Event not found: " + error);
    }

    res.status(200).json(event);
  } catch (error) {
    res
      .status(500)
      .json({ massage: "Internal Server error: " + error.message });
  }
};

const createEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(200).json(event);
  } catch (error) {
    res
      .status(500)
      .json({ massage: "Internal Server error: " + error.message });
  }
};

const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.findByIdAndUpdate(id, req.body);

    if (!event) {
      res.status(404).json("Event not found: " + error);
    }

    const updatedEvent = await Event.findById(id);
    res.status(200).json(updatedEvent);
  } catch (error) {
    res
      .status(500)
      .json({ massage: "Internal Server error: " + error.message });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await Event.deleteOne(id, req.body);

    if (!event) {
      res
        .status(404)
        .json(
          "Event could not be deleted because event wasn't found: " + error
        );
    }

    res
      .status(200)
      .json({ message: "Event with ID: " + id + " deleted successfully." });
  } catch (error) {
    res
      .status(500)
      .json({ massage: "Internal Server error: " + error.message });
  }
};

const registerEvent = async (req, res) => {
  try {
    const userId = req.body.user_id;
    const user = await User.findById(userId);

    if (!user) {
      res
        .status(404)
        .json("Event not registered because user was not found: " + error);
      return;
    }

    const eventId = req.body.event_id;
    const checkedEvent = await Event.findById(eventId);
    if (!checkedEvent) {
      res.status(404).json("Event not found: " + error);
      return;
    }

    // Create a Set to remove duplicates while maintaining insertion order
    const uniqueRegisteredUsers = new Set([
      ...checkedEvent.registered_users,
      userId,
    ]);

    const event = await Event.findByIdAndUpdate(eventId, {
      registered_users: [...uniqueRegisteredUsers],
    });

    if (!event) {
      res.status(404).json("Event not found: " + error);
      return;
    }

    const registeredEvent = await Event.findById(eventId);
    res.status(200).json(registeredEvent);
  } catch (error) {
    res
      .status(500)
      .json({ massage: "Internal Server error: " + error.message });
  }
};

module.exports = {
  getEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
  registerEvent,
};
