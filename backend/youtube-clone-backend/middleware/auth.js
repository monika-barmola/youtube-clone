const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

  jwt_secret = process.env.JWT_SECRET || 'yt-clone-secret';
  try {

    console.log('token', token);

    const decoded = jwt.verify(token, jwt_secret);
    req.user = decoded.userId;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Invalid token' });
  }
};
