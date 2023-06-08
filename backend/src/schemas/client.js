const mongoose = require("mongoose");
const { Schema } = mongoose;

const clientSchema = new Schema(
  {
    name: { type: String, requires: true },
    lastName: { type: String, requires: true },
    email: { type: String, requires: true },
    password: { type: String, requires: true },
    permissionsAdmin: { type: Boolean, requires: false, default: false },
    permissionsClient: { type: Boolean, requires: false, default: true },
  },
  {
    versionKey: false,
    timestamps: true,
  },

  //Quitar version key

  { versionKey: false }
);

module.exports = mongoose.model("Client", clientSchema);
