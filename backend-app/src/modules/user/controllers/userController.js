import asyncHandler from 'express-async-handler';
import * as userService from '../services/userService.js';

export const registerUser = asyncHandler(async (req, res) => {
  const result = await userService.createUser(req.body);
  res.status(201).json(result);
});

export const loginUser = asyncHandler(async (req, res) => {
  const result = await userService.authenticateUser(req.body);
  res.json(result);
});

export const getProfile = asyncHandler(async (req, res) => {
  const user = await userService.getUserProfile(req.user.id);
  res.json(user);
});
