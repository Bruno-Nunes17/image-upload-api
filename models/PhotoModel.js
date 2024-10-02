const mongoose = require("mongoose");

const { Schema } = mongoose;

const Photoschema = new Schema({
  name: { type: String, required: true },
  file: { type: String, required: true },
});

module.exports = mongoose.model("Photo", Photoschema);
