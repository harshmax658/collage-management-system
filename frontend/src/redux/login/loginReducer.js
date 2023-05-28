import {
  STUDENT_LOGIN_SUCCESS,
  STUDENT_LOGIN_FAILURE,
  LOGOUT,
  SETROLE,
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
        role: data.role,
        data: data,
        name: data.name,
      };
    }
    case STUDENT_LOGIN_FAILURE: {
      return { ...state, error: action.data };
    }
    case LOGOUT: {
      return { ...state, logged: false, role: null };
    }
    case SETROLE: {
      return { ...state, role: "admin" };
    }
    default:
      return { ...state };
  }
};
export default userReducer;
