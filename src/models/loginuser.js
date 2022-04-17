const mongoose = require("mongoose");
const validator = require("validator");

const loginuserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
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
  password: {
    type: String,
    required: true,
  },
});

//create model
const LoginUser = new mongoose.model("login_users", loginuserSchema);

module.exports = LoginUser;
