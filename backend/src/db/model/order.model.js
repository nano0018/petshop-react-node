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
      type: Schema.Types.ObjectId,
      required: true,
    },
    orderedProducts: [
      {
        _id: false,
        productId: { type: Schema.Types.ObjectId, requires: true },
        qtyOrderedProduct: { type: Number, requires: true },
      },
    ],
  },

  {
    timestamps: true,
  },

  { versionKey: false }
);

OrderSchema.virtual('totalPrice').get(function () {
  return this.orderedProducts.reduce(
    (total, product) =>
      product.qtyOrderedProduct * product.idProduct.price + total,
    0
  );
});

module.exports = mongoose.model('Orders', OrderSchema);
