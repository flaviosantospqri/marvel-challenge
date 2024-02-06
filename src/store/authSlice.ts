import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface useState {
  email: string;
  password: string;
  status: boolean;
}

const initialState: useState = {
  email: "",
  password: "",
  status: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut(state) {
      state.status = false;
    },
    login(state) {
      state.status = true;
    },
  },
});
export const { logOut, login } = authSlice.actions;
export default authSlice.reducer;
