import { createAction } from "@reduxjs/toolkit";
import { User } from "./slice";

export const loginRequest = createAction<User>("auth/loginRequest");
export const signupRequest = createAction<User>("auth/signupRequest");
