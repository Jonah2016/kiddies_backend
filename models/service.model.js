const mongoose = require("mongoose");

const ServiceSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter title."],
      maxLength: 255,
    },
    type: {
      type: String,
      required: [true, "Please enter type."],
      maxLength: 8,
    },
    url: {
      type: String,
      required: [true, "Please enter the url."],
      maxLength: 355,
    },
    status: {
      type: Number,
      max: 2,
      required: [true, "The status ia required"],
      default: 0,
    },
    deleted_at: {
      type: Date,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Service = mongoose.model("Service", ServiceSchema);

module.exports = Service;
