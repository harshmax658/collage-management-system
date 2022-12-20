import { put, call, all, takeLatest } from "redux-saga/effects";
import { STUDENT_LOGIN_START } from "./action";
import { studentLoginSuccess, studentLoginFailure } from "./action";

function* studentLoginStart({ data }) {
  console.log(data);
  try {
    const response = yield fetch("/api/student/student-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const responseJson = yield response.json();
    console.log(response);
    if (response.status === 200) {
      yield put(studentLoginSuccess(responseJson));
    } else {
      throw new Error(responseJson.message);
    }
  } catch (error) {
    yield put(studentLoginFailure(error));
  }
}
function* studentLogin() {
  yield takeLatest(STUDENT_LOGIN_START, studentLoginStart);
}

export default function* loginSaga() {
  yield all([call(studentLogin)]);
}
