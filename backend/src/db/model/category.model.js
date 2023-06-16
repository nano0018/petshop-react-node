/**
 * Module dependencies.
 */
const mongoose = require('mongoose');
const { Schema } = mongoose;

/**
 * Mongoose schema for product categories
 */
const CategorySchema = new Schema(
  {
    name: { type: String, requires: true },
    img: { type: String, requires: true },
  },
  {
    versionKey: false,
    timestamps: true,
  },
  { versionKey: false }
);

const category = mongoose.model('Category', CategorySchema);

module.exports = category;
