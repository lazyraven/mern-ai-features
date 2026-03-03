import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

export const createUser = async ({ name, email, password }) => {
  if (!name || !email || !password) {
    const err = new Error('Please include all fields');
    err.status = 400;
    throw err;
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    const err = new Error('User already exists');
    err.status = 400;
    throw err;
  }

  const user = await User.create({ name, email, password });
  if (!user) {
    const err = new Error('Invalid user data');
    err.status = 400;
    throw err;
  }

  return {
    _id: user.id,
    name: user.name,
    email: user.email,
    token: generateToken(user._id),
  };
};

export const authenticateUser = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    return {
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    };
  }
  const err = new Error('Invalid credentials');
  err.status = 401;
  throw err;
};

export const getUserProfile = async (id) => {
  const user = await User.findById(id).select('-password');
  if (!user) {
    const err = new Error('User not found');
    err.status = 404;
    throw err;
  }
  return user;
};
