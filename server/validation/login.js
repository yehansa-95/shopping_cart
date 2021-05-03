const Validator = require("validator");
const empty = require("is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !empty(data.email) ? data.email : "";
  data.password = !empty(data.password) ? data.password : "";

  if (Validator.empty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.empty(data.password)) {
    errors.password = "Password field is required";
  }

  return {
    errors,
    isValid: empty(errors)
  };

};