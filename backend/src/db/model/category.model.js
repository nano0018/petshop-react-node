/**
 * Module dependencies.
 */
const mongoose = require('mongoose');
const { Schema } = mongoose;

/**
 * Mongoose schema for users
 */
const CategorySchema = new Schema(
  {
    name: { type: String, requires: true },
    img: { type: String, requires: true },
    email: { type: String, requires: true },
  },
  {
    versionKey: false,
    timestamps: true,
  },
  { versionKey: false }
);

module.exports = mongoose.model('Category', CategorySchema);
