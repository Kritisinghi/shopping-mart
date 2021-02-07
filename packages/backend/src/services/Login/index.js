const User = require('../../models/User');
const { OAuth2Client } = require('google-auth-library');

const { generateToken, formrespone } = require('./helper');

const client = new OAuth2Client(process.env.googleClientId);

const login = async (id) => {
  const { payload } = await client.verifyIdToken({
    idToken: id,
    audience: process.env.googleClientId,
  });
  const { email, name, email_verified, picture, jti } = payload;
  if (email_verified) {
    const data = await User.findOne({ email }).exec();
    if (data) {
      const token = generateToken(data);
      return formrespone(token, data);
    } else {
      const newUser = new User({ name, email, profile_img: picture, password: jti });
      const data = await newUser.save();
      const token = generateToken(data);
      return formrespone(token, data);
    }
  }
};

module.exports = {
  login,
};
