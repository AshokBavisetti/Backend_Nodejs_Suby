const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: String,
      required: true,
    },
    category: {
      type: [String],
      enum: ["veg", "non-veg"],
      required: true,
    },
    image: {
      type: String,
    },
    bestSeller: {
      type: Boolean, // ✅ boolean correct
      default: false,
    },
    description: {
      type: String,
    },
    firm: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Firm",
      required: true,
    },
  },
  { timestamps: true },
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
