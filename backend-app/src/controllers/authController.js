// this file is maintained for backward compatibility with existing import paths
// the real user logic now lives in the feature module under `src/modules/user`

import {
  registerUser as register,
  loginUser as login,
  getProfile as profile,
} from '../modules/user/controllers/userController.js';

export const registerUser = register;
export const loginUser = login;
export const getProfile = profile;

