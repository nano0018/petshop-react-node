/**
 * Module dependencies.
 */
const mongoose = require('mongoose');
const { Schema } = mongoose;

/**
 * Mongoose schema for orders
 */
const OrderSchema = new Schema(
  {
    userId: {
      type: Schema.Types.UUID,
      required: true,
    },
    orderedProducts: [
      {
        _id: false,
        idProduct: { type: String, requires: true },
        nameProduct: { type: String, requires: true },
        categoryProduct: { type: String, requires: true },
        qtyOrderedProduct: { type: Number, requires: true },
        priceProductPerUnit: { type: Number, requires: true },
      },
    ],
    total: { type: Number, requires: true },
  },

  {
    timestamps: true,
  },

  { versionKey: false }
);

module.exports = mongoose.model('Orders', OrderSchema);
