const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  pointOfEntry: {
    type: String,
  },
  purpose: {
    type: String,
    enum: ["Leisure", "Business", "Education", "Other"],
  },
  notes: {
    type: String,
  },
  timesVisited: {
    type: String,
    enum: ["1", "2", "3", "4", "5", "5 +"],
  },
});

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  countries: [countrySchema],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
