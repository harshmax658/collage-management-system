export const STUDENT_LOGIN_START = "STUDENT_LOGIN_START";
export const STUDENT_LOGIN_SUCCESS = "STUDENT_LOGIN_SUCCESS";
export const STUDENT_LOGIN_FAILURE = "STUDENT_LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";
export const SETROLE = "SETROLE";

export const studentLoginStart = (data) => {
  return {
    type: STUDENT_LOGIN_START,
    data,
  };
};
export const studentLoginSuccess = (data) => {
  return {
    type: STUDENT_LOGIN_SUCCESS,
    data,
  };
};
export const studentLoginFailure = (data) => {
  return {
    type: STUDENT_LOGIN_FAILURE,
    data,
  };
};
export const logoutStudent = (data) => {
  return {
    type: LOGOUT,
  };
};
export const setRole = (data) => {
  return {
    type: SETROLE,
  };
};
