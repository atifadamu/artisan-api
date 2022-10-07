const yup = require("yup");

function validate(data) {
  const userSchema = yup.object().shape({
    userSchema: yup.string().required("username must be filled").min(3).max(20),
    email: yup.string().email().required("email is required").min(3).max(50),
    password: yup.string().required("passwor(d require").min(8).max(20),
  });
  return userSchema.validate(data);
}

module.exports = { validate };
