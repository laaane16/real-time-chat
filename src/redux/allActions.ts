import { authActions, login } from "./slices/auth/slice";

export const allActionCreators = {
  ...authActions,
  login,
};
