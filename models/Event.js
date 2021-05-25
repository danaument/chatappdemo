const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");

const eventSchema = new Schema({
  date: { type: Date, default: moment().toISOString() },  // I'm working on learning ES6 Date
  user: { type: String, required: true },
  type: { type: String, required: true },
  otheruser: String,
  message: String
});

const Event = mongoose.model("event", eventSchema);

module.exports = Event;