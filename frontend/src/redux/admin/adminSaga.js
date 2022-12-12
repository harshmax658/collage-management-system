import { takeLatest, put, call, all } from "redux-saga/effects";

import { STUDENT_REGISTRATION_START } from "./action";

function* studentRegistrationStart({ data }) {
  const response = yield fetch("/api/admin/register-new-student", {
    method: "Post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  yield console.log(response);
}
function* studentRegistration() {
  yield takeLatest(STUDENT_REGISTRATION_START, studentRegistrationStart);
}

export function* adminSaga() {
  yield all([call(studentRegistration)]);
}
