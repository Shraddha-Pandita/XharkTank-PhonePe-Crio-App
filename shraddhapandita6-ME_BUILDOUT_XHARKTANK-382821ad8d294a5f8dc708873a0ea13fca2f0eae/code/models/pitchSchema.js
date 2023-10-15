const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const {Schema} = mongoose;
const pitchSchema = new Schema({
  entrepreneur: {
    type: String,
    required: true,
  },
  pitchIdea: {
    type: String,
    required: true,
  },
  pitchTitle: {
    type: String,
    required: true,
  },
  askAmount: {
    type: Number,
    required: true,
    min:0,
  },
  equity: {
    type: Number,
    required: true,
    min:0,
    max:100,
  }
});

pitchSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Pitch", pitchSchema, "pitches");
