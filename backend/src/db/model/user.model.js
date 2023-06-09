/**
 * Module dependencies.
 */
const mongoose = require('mongoose');
const { Schema } = mongoose;

/**
 * Mongoose schema for users
 */
const UserSchema = new Schema(
  {
    name: { type: String, requires: true },
    lastName: { type: String, requires: true },
    email: { type: String, requires: true },
    password: { type: String, requires: true },
    recoveryToken: { type: String, requires: false },
    role: { type: String, requires: true , default: 'customer'},
  },
  {
    versionKey: false,
    timestamps: true,
  },
  { versionKey: false }
);

module.exports = mongoose.model('User', UserSchema);
