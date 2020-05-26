const mongoose = require("mongoose");

var moment = require("moment");

const Pickup = new mongoose.Schema({
  lat: { type: Number, required: true },
  long: { type: Number, required: true },
  date: { type: String, default: () => moment().format("dddd, MMMM Do YYYY") },
  time: { type: String, default: () => moment().format("h:mm:ss a") },
});

module.exports = mongoose.model("pickup", Pickup);
