/**
 * Module dependencies.
 */
const mongoose = require('mongoose');
const { Schema } = mongoose;

/**
 * Mongoose schema for products
 */
const ProductSchema = new Schema(
  {
    name: { type: String, requires: true, max: 64 },
    category: { type: Schema.Types.ObjectId },
    stock: { type: Number, requires: true, min: 1 },
    price: { type: Number, requires: true },
    description: { type: String, requires: true, max: 125 },
    img: { type: String, requires: true },
  },
  {
    versionKey: false,
    timestamps: true,
  },
  { versionKey: false }
);

const product = mongoose.model('Product', ProductSchema);

module.exports = product;
