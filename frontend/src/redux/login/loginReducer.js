import {
  STUDENT_LOGIN_START,
  STUDENT_LOGIN_SUCCESS,
  STUDENT_LOGIN_FAILURE,
} from "./action";
const initialUserState = {
  role: "",
  data: null,
  error: null,
  logged: false,
  name: null,
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case STUDENT_LOGIN_SUCCESS: {
      const { data } = action.data;
      return {
        ...state,
        logged: true,
        role: "faculty",
        data: data,
        name: data.name,
      };
    }
    case STUDENT_LOGIN_FAILURE: {
      return { ...state, error: action.data };
    }
    default:
      return { ...state };
  }
};
export default userReducer;
