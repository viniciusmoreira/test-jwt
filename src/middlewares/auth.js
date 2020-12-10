const jwt = require('jsonwebtoken');

const checkAuthUser = (req, res, next) => {
  let message = 'User not allowed!';

  if(req.headers && req.headers.authorization){
    const [,token] = req.headers.authorization.split(' ');
    try {
      const decodedToken = jwt.verify(token, process.env.SERVER_SECRET);

      req.user = decodedToken.user;
    } catch(error){
      return res.json({
        success: false,
        message
      })  
    }
  }

  next();
}

module.exports = checkAuthUser;