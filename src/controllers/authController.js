const jwt = require('jsonwebtoken');

const login = (req, res) => {
  const { user, passwd } = req.body;
  let token = null;
  let message = 'Login with success';

  try {
    token = jwt.sign({
      user
    }, process.env.SERVER_SECRET);
  } catch (error) {
    message = 'Problems with login!'
  }

  res.json({
    success: token !== null,
    token,
    message
  })
}

module.exports = {
  login
}