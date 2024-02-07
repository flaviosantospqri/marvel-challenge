import { createAction } from "@reduxjs/toolkit";
import { User } from "./authSlice";

export const loginRequest = createAction<User>("auth/loginRequest");
