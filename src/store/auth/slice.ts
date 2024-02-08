import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const user = localStorage.getItem("isAuth");
interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  error: string | null;
  saveLogin?: boolean | null | undefined;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: user ? true : false,
  error: null,
  saveLogin: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<User>) {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.error = null;
    },
    signUpUserSuccess(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.error = null;
    },
    signUpUserFailure(state, action: PayloadAction<string>) {
      state.user = null;
      state.error = action.payload;
    },
    setInStorage(_, action: PayloadAction<User>) {
      if (action.payload.saveLogin) {
        localStorage.setItem("user", JSON.stringify(action.payload));
      }
      localStorage.setItem("isAuth", "true");
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.isAuthenticated = false;
      state.user = null;
      state.error = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
      localStorage.removeItem("isAuth");
    },
  },
});

export const {
  loginSuccess,
  loginFailure,
  logout,
  setInStorage,
  signUpUserSuccess,
  signUpUserFailure,
} = authSlice.actions;
export default authSlice.reducer;

export interface User {
  email?: string;
  username: string;
  password: string;
  saveLogin?: boolean | null | undefined;
}
