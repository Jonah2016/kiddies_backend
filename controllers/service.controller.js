const asyncHandler = require("express-async-handler");
const Service = require("../models/service.model.js");

const getServices = asyncHandler(async (req, res) => {
  const service = await Service.find({});
  res.status(200).json(service);
});

const getServiceById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const service = await Service.findById(id, req.body);

  if (!service) {
    res.status(404);
    throw new Error("No service data found");
  }

  res.status(200).json(service);
});

const createService = asyncHandler(async (req, res) => {
  const service = await Service.create(req.body);
  res.status(200).json(service);
});

const updateService = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const service = await Service.findById(id);

  if (!service) {
    res.status(404);
    throw new Error("No service data found");
  }

  const updatedService = await Service.findByIdAndUpdate(id, req.body);
  res.status(200).json(updatedService);
});

const deleteService = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const service = await Service.findById(id);

  if (!service) {
    res.status(404);
    throw new Error("No service data found");
  }

  await Service.deleteOne(id, req.body);

  res
    .status(200)
    .json({ message: "Service with ID: " + id + " deleted successfully." });
});

module.exports = {
  getServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
};
