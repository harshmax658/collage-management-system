import { takeLatest, put, call, all } from "redux-saga/effects";

import { STUDENT_REGISTRATION_START } from "./action";
import {
  studentRegistrationSuccess,
  studentRegistrationFailure,
} from "./action";

function* studentRegistrationStart({
  data: { notificationHandler, studentDataNew },
}) {
  const response = yield fetch("/api/admin/register-new-student", {
    method: "Post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(studentDataNew),
  });

  const responseJson = yield response.json();
  const data = {
    message: responseJson.message,
    status: response.status,
  };

  if (response.status === 200) {
    yield put(studentRegistrationSuccess(data));
  } else {
    yield put(studentRegistrationFailure(data));
  }
  notificationHandler(responseJson.message, data.status);
}
function* studentRegistration() {
  yield takeLatest(STUDENT_REGISTRATION_START, studentRegistrationStart);
}

export default function* adminSaga() {
  yield all([call(studentRegistration)]);
}
