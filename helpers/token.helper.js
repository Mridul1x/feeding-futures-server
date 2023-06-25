const jwt = require("jsonwebtoken");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT.SECRET, {
    expiresIn: "7d",
  });
};

module.exports = { createToken };
