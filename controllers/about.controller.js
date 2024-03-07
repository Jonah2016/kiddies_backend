const About = require("../models/about.model.js");

const getAbout = async (req, res) => {
  try {
    const about = await About.find({});
    res.status(200).json(about);
  } catch (error) {
    res.status(500).json({ message: "Internal server error: " + error });
  }
};

const getAboutById = async (req, res) => {
  try {
    const { id } = req.params;
    const about = await About.findById(id, req.body);

    if (!about) {
      res.status(404).json("About not found: " + error);
      res.status(400).json("Bad request: " + error);
    }

    res.status(200).json(about);
  } catch (error) {
    res
      .status(500)
      .json({ massage: "Internal Server error: " + error.message });
    res.status(400).json("Bad request: " + error);
  }
};

const createAbout = async (req, res) => {
  try {
    const about = await About.create(req.body);
    res.status(200).json(about);
  } catch (error) {
    res
      .status(500)
      .json({ massage: "Internal Server error: " + error.message });
    res.status(503).json("Service unavailable: " + error);
    res.status(400).json("Bad request: " + error);
  }
};

const updateAbout = async (req, res) => {
  try {
    const { id } = req.params;
    const about = await About.findByIdAndUpdate(id, req.body);

    if (!about) {
      res.status(404).json("About not found: " + error);
      res.status(400).json("Bad request: " + error);
    }

    const updatedAbout = await About.findById(id);
    res.status(200).json(updatedAbout);
  } catch (error) {
    res
      .status(500)
      .json({ massage: "Internal Server error: " + error.message });
    res.status(400).json("Bad request: " + error);
  }
};

module.exports = {
  getAbout,
  getAboutById,
  createAbout,
  updateAbout,
};
