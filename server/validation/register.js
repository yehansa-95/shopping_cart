const Validator = require("validator");
const empty = require("is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};
    
    data.name = !empty(data.name) ? data.name : "";
    data.email = !empty(data.email) ? data.email : "";
    data.password = !empty(data.password) ? data.password : "";
    data.cpassword = !empty(data.password2) ? data.cpassword : "";

    if (Validator.empty(data.name)) {
        errors.name = "Name field is required";
    }

    if (Validator.empty(data.email)) {
        errors.email = "Email field is required";
    } else if (!Validator.empty(data.email)) {
        errors.email = "Email is invalid";
    }

    if (Validator.empty(data.password)) {
        errors.password = "Password field is required";
    }
    if (Validator.empty(data.cpassword)) {
        errors.cpassword = "Confirm password field is required";
    }
    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Password must be at least 6 characters";
    }
    if (!Validator.equals(data.password, data.cpassword)) {
        errors.cpassword = "Passwords must match";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};