const User = require('../models/userModel');
const { hashPassword, comparePassword } = require('../utils/password');
const { generateToken } = require('../utils/jwt');

const registerUser = async (name, email, password) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error('User already exists');

  const hashedPassword = await hashPassword(password);
  const user = await User.create({ name, email, password: hashedPassword });
  const token = generateToken(user._id);

  return { user: { id: user._id, name: user.name, email: user.email, role: user.role }, token };
};

const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('Invalid email or password');

  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) throw new Error('Invalid email or password');

  const token = generateToken(user._id);
  return { user: { id: user._id, name: user.name, email: user.email, role: user.role }, token };
};

module.exports = { registerUser, loginUser };
