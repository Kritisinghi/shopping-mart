const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (user) => {
  const token = jwt.sign(
    {
      id: user.email,
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: 86400, // expires in 24 hours
    },
  );
  return token;
};

const formrespone = (token, { _id, name, email, profile_img }) => {
  return {
    token,
    user: {
      _id,
      name,
      email,
      profile_img,
    },
  };
};

module.exports = {
  formrespone,
  generateToken,
};
