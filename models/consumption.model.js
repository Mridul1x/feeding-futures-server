const mongoose = require("mongoose");

const consumptionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    ammount: {
      type: Number,
      required: true,
    },
    consumer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Consumer",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Consumption", consumptionSchema);
