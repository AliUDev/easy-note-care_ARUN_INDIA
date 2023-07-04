const mongoose = require("mongoose");

// Create Schema
const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName:{
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role:{
    type: String,
    enum: ["sudoAdmin", "superAdmin", "user"],
    required: true
  },
  register_date: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

const User = mongoose.model('user', UserSchema);


module.exports = User;