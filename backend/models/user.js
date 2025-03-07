const { verify } = require("jsonwebtoken");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  verifyToken: {
    type: String,
  },
  verifyTokenExpiry: {
    type: Date,
  },
});

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;
