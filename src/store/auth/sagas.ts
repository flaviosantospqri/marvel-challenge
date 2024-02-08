import { takeLatest, put, call } from "redux-saga/effects";
import {
  loginFailure,
  loginSuccess,
  setInStorage,
  signUpUserFailure,
  signUpUserSuccess,
} from "./slice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function* loginUser(action: any): Generator<any, void, any> {
  const { username, password } = action.payload;
  try {
    const response = yield call(fetch, "http://localhost:3001/users");
    const users = yield response.json();
    const user = users.find(
      (user: any) => user.username === username && user.password === password
    );
    if (user) {
      toast.success("Welcome " + user.username);
      yield put(loginSuccess(user));
      yield put(setInStorage(user));
    } else {
      toast.error(
        "Falha ao realizar o Login, verifique seus dados e tente novamente"
      );
      yield put(loginFailure("Invalid credentials"));
    }
  } catch (error: any) {
    yield put(loginFailure(error.message));
  }
}
function* signupUser(action: any): Generator<any, void, any> {
  const { email, username, password } = action.payload;
  try {
    const response = yield call(fetch, "http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, username, password }),
    });

    if (response.ok) {
      const user = yield response.json();
      toast.success("Usuário Registrado com sucesso");
      yield put(signUpUserSuccess(user));
    } else {
      const errorMessage = yield response.text();
      toast.error(errorMessage);
      yield put(signUpUserFailure("Failed to sign up"));
    }
  } catch (error: any) {
    toast.error("An error occurred while signing up");
    yield put(loginFailure(error.message));
  }
}

export function* watchLogin() {
  yield takeLatest("auth/loginRequest", loginUser);
  yield takeLatest("auth/signupRequest", signupUser);
}
