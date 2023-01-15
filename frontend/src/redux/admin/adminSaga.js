import { takeLatest, put, call, all } from "redux-saga/effects";
import MakeRequest from "../../functions/MakeRequest";

import {
  STUDENT_REGISTRATION_START,
  ADD_NEW_COURSE_START,
  FACULTY_REGISTRATION_START,
  GET_COURSES_START,
} from "./action";
import {
  studentRegistrationSuccess,
  studentRegistrationFailure,
  addNewCourseSuccess,
  addNewCourseFailure,
  facultyRegistrationSuccess,
  facultyRegistrationFailure,
  getCourseSuccess,
  getCourseFailure,
} from "./action";

function* addNewCourseStart({ data }) {
  const response = MakeRequest("/api/course/add-new-course", "Post", data);
  const responseJson = yield response.json();

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
  const response = yield MakeRequest(
    "/api/admin/register-new-student",
    "Post",
    studentDataNew
  );
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

function* facultyRegistrationStart({
  data: { notificationHandler, facultyDataNew },
}) {
  const response = yield MakeRequest(
    "/api/admin/register-new-faculty",
    "Post",
    facultyDataNew
  );

  const responseJson = yield response.json();
  const data = {
    message: responseJson.message,
    status: response.status,
  };

  if (response.status === 200) {
    yield put(facultyRegistrationSuccess(data));
  } else {
    yield put(facultyRegistrationFailure(data));
  }
  notificationHandler(responseJson.message, data.status);
}
function* facultyRegistration() {
  yield takeLatest(FACULTY_REGISTRATION_START, facultyRegistrationStart);
}

function* getCourseStart() {
  const response = yield MakeRequest("/api/course/get-courses", "Get");

  const responseJson = yield response.json();

  if (response.status === 200) {
    yield put(getCourseSuccess(responseJson));
  } else {
    yield put(getCourseFailure(responseJson));
  }
}
function* getCourse() {
  yield takeLatest(GET_COURSES_START, getCourseStart);
}

export default function* adminSaga() {
  yield all([
    call(studentRegistration),
    call(addNewCourse),
    call(facultyRegistration),
    call(getCourse),
  ]);
}
