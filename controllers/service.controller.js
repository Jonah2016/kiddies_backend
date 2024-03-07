const Service = require("../models/service.model.js");

const getServices = async (req, res) => {
  try {
    const service = await Service.find({});
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ message: "Internal server error: " + error });
  }
};

const getServiceById = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await Service.findById(id, req.body);

    if (!service) {
      res.status(404).json("Service not found: " + error);
      res.status(400).json("Bad request: " + error);
    }

    res.status(200).json(service);
  } catch (error) {
    res
      .status(500)
      .json({ massage: "Internal Server error: " + error.message });
    res.status(400).json("Bad request: " + error);
  }
};

const createService = async (req, res) => {
  try {
    const service = await Service.create(req.body);
    res.status(200).json(service);
  } catch (error) {
    res
      .status(500)
      .json({ massage: "Internal Server error: " + error.message });
    res.status(503).json("Service unavailable: " + error);
    res.status(400).json("Bad request: " + error);
  }
};

const updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await Service.findByIdAndUpdate(id, req.body);

    if (!service) {
      res.status(404).json("Service not found: " + error);
      res.status(400).json("Bad request: " + error);
    }

    const updatedService = await Service.findById(id);
    res.status(200).json(updatedService);
  } catch (error) {
    res
      .status(500)
      .json({ massage: "Internal Server error: " + error.message });
    res.status(400).json("Bad request: " + error);
  }
};

const deleteService = async (req, res) => {
  try {
    const { id } = req.params;
    const service = await Service.deleteOne(id, req.body);

    if (!service) {
      res
        .status(404)
        .json(
          "Service could not be deleted because service wasn't found: " + error
        );
      res.status(400).json("Bad request: " + error);
    }

    res
      .status(200)
      .json({ message: "Service with ID: " + id + " deleted successfully." });
  } catch (error) {
    res
      .status(500)
      .json({ massage: "Internal Server error: " + error.message });
    res.status(400).json("Bad request: " + error);
  }
};

module.exports = {
  getServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
};
