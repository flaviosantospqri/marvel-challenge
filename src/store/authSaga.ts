import { takeLatest, put, call } from "redux-saga/effects";
import { loginSuccess, loginFailure, setInStorage } from "./authSlice";

function* loginUser(action: any): Generator<any, void, any> {
  const { username, password } = action.payload;
  console.log(action.payload);
  try {
    const response = yield call(fetch, "http://localhost:3001/users");
    const users = yield response.json();
    console.log(users);
    const user = users.find(
      (user: any) => user.username === username && user.password === password
    );
    if (user) {
      yield put(loginSuccess(user));
      yield put(setInStorage(user));
    } else {
      yield put(loginFailure("Invalid credentials"));
    }
  } catch (error: any) {
    yield put(loginFailure(error.message));
  }
}

export function* watchLogin() {
  yield takeLatest("auth/loginRequest", loginUser);
}
