const { loginService } = require('../../services');

const login = async (req, res) => {
  try {
    const { token } = req.body;
    const data = await loginService.login(token);
    res.json(data);
  } catch (err) {
    res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};
module.exports = {
  login,
};
