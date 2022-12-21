export const STUDENT_REGISTRATION_START = "STUDENT_REGISTRATION_START";
export const STUDENT_REGISTRATION_SUCCESS = "STUDENT_REGISTRATION_SUCCESS";
export const STUDENT_REGISTRATION_FAILURE = "STUDENT_REGISTRATION_FAILURE";
export const ADD_NEW_COURSE_START = "ADD_NEW_COURSE_START";
export const ADD_NEW_COURSE_SUCCESS = "ADD_NEW_COURSE_SUCCESS";
export const ADD_NEW_COURSE_FAILURE = "ADD_NEW_COURSE_FAILURE";

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
