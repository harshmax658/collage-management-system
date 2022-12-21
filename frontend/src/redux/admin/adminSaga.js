import { takeLatest, put, call, all } from "redux-saga/effects";

import { STUDENT_REGISTRATION_START, ADD_NEW_COURSE_START } from "./action";
import {
  studentRegistrationSuccess,
  studentRegistrationFailure,
  addNewCourseSuccess,
  addNewCourseFailure,
} from "./action";

function* addNewCourseStart({ data }) {
  const response = yield fetch("/api/course/add-new-course", {
    method: "Post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const responseJson = yield response.json();
  console.log(responseJson);
  if (response.status === 200) {
    yield put(addNewCourseSuccess());
  } else {
    yield put(addNewCourseFailure());
  }
}
function* addNewCourse() {
  yield takeLatest(ADD_NEW_COURSE_START, addNewCourseStart);
}

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
  yield all([call(studentRegistration), call(addNewCourse)]);
}
