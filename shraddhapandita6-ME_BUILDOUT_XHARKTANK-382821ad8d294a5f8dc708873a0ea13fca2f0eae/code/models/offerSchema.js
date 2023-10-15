const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const {Schema} = mongoose;
const offerSchema = new Schema({
  amount: {
    type: Number,
    required: true,
    min:0,
  },
  investor: {
    type: String,
    required: true,
  },
  equity: {
    type: Number,
    required: true,
    min:0,
    max:100,
  },
  comment: {
    type: String,
    required: true,
  },
  pitchID: {
    type: Schema.Types.ObjectId,
    ref: "Pitch",
    required: true,
  }
});

offerSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Offer", offerSchema, "offers");
