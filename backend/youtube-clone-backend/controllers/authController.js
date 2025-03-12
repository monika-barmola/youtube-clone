const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


jwt_secret = process.env.JWT_SECRET || 'yt-clone-secret';

// User Sign-Up
exports.signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: 'User already exists' });

    user = new User({
      username,
      email,
      password,
    });

    await user.save();
    console.log('User created');

    // Create JWT Token
    const payload = { userId: user._id };
    const token = jwt.sign(payload, jwt_secret, { expiresIn: '1h' });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// User Login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

    // Create JWT Token
    const payload = { userId: user._id };
    const token = jwt.sign(payload, jwt_secret, { expiresIn: '1h' });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
