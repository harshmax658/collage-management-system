export const STUDENT_REGISTRATION_START = "STUDENT_REGISTRATION_START";
export const STUDENT_REGISTRATION_SUCCESS = "STUDENT_REGISTRATION_SUCCESS";
export const STUDENT_REGISTRATION_FAILURE = "STUDENT_REGISTRATION_FAILURE";

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
