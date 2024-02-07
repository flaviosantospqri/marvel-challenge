import { takeLatest, put, call } from "redux-saga/effects";
import { loginFailure, loginSuccess, setInStorage } from "./slice";
import { toast } from "react-toastify";

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

export function* watchLogin() {
  yield takeLatest("auth/loginRequest", loginUser);
}
