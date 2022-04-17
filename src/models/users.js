const mongoose = require("mongoose");
const validator = require("validator");

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  username: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email id already used"],
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email");
      }
    },
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    min: 10,
    required: true,
  },
  website: {
    type: String,
  },
});

//create model
const User = new mongoose.model("User", usersSchema);

module.exports = User;
