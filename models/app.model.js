const mongoose = require("mongoose");

const appSchema = mongoose.Schema({
  message: String,
});

module.exports = mongoose.model("App", appSchema);
