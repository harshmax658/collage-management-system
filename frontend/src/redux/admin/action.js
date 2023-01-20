export const UPDATE_LOADING_STATE = "UPDATE_LOADING_STATE";

export const STUDENT_REGISTRATION_START = "STUDENT_REGISTRATION_START";
export const STUDENT_REGISTRATION_SUCCESS = "STUDENT_REGISTRATION_SUCCESS";
export const STUDENT_REGISTRATION_FAILURE = "STUDENT_REGISTRATION_FAILURE";

export const FACULTY_REGISTRATION_START = "FACULTY_REGISTRATION_START";
export const FACULTY_REGISTRATION_SUCCESS = "FACULTY_REGISTRATION_SUCCESS";
export const FACULTY_REGISTRATION_FAILURE = "FACULTY_REGISTRATION_FAILURE";

export const ADD_NEW_COURSE_START = "ADD_NEW_COURSE_START";
export const ADD_NEW_COURSE_SUCCESS = "ADD_NEW_COURSE_SUCCESS";
export const ADD_NEW_COURSE_FAILURE = "ADD_NEW_COURSE_FAILURE";

export const GET_COURSES_START = "GET_COURSES_START";
export const GET_COURSES_SUCCESS = "GET_COURSES_SUCCESS";
export const GET_COURSES_FAILURE = "GET_COURSES_FAILURE";

export const GET_COURSE_STUDENT_START = "GET_COURSE_STUDENT_START";
export const GET_COURSE_STUDENT_SUCCESS = "GET_COURSE_STUDENT_SUCCESS";
export const GET_COURSE_STUDENT_FAILURE = "GET_COURSE_STUDENT_FAILURE";

export const getCourseStudentStart = (data) => {
  return {
    type: GET_COURSE_STUDENT_START,
    data,
  };
};
export const getCourseStudentSuccess = (data) => {
  return {
    type: GET_COURSE_STUDENT_SUCCESS,
    data,
  };
};
export const getCourseStudentFailure = (data) => {
  return {
    type: GET_COURSE_STUDENT_FAILURE,
    data,
  };
};
export const getCourseStart = (data) => {
  return {
    type: GET_COURSES_START,
    data,
  };
};
export const getCourseSuccess = (data) => {
  return {
    type: GET_COURSES_SUCCESS,
    data,
  };
};
export const getCourseFailure = (data) => {
  return {
    type: GET_COURSES_FAILURE,
    data,
  };
};
export const studentRegistrationStart = (data) => {
  return {
    type: STUDENT_REGISTRATION_START,
    data,
  };
};
export const studentRegistrationSuccess = (data) => {
  return {
    type: STUDENT_REGISTRATION_SUCCESS,
    data,
  };
};
export const studentRegistrationFailure = (data) => {
  return {
    type: STUDENT_REGISTRATION_FAILURE,
    data,
  };
};
export const facultyRegistrationStart = (data) => {
  return {
    type: FACULTY_REGISTRATION_START,
    data,
  };
};
export const facultyRegistrationSuccess = (data) => {
  return {
    type: FACULTY_REGISTRATION_SUCCESS,
    data,
  };
};
export const facultyRegistrationFailure = (data) => {
  return {
    type: FACULTY_REGISTRATION_FAILURE,
    data,
  };
};
export const addNewCourseStart = (data) => {
  return {
    type: ADD_NEW_COURSE_START,
    data,
  };
};
export const addNewCourseSuccess = (data) => {
  return {
    type: ADD_NEW_COURSE_SUCCESS,
    data,
  };
};
export const addNewCourseFailure = (data) => {
  return {
    type: ADD_NEW_COURSE_FAILURE,
    data,
  };
};
export const updateLoadingState = (data) => {
  return {
    type: UPDATE_LOADING_STATE,
    data,
  };
};
