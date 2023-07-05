const mongoose = require("mongoose");

const contributionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    ammount: {
      type: Number,
      required: true,
    },
    provider: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Provider",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contribution", contributionSchema);
