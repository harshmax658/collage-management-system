import {
  STUDENT_REGISTRATION_SUCCESS,
  STUDENT_REGISTRATION_FAILURE,
  GET_COURSES_SUCCESS,
  GET_COURSES_FAILURE,
} from "./action";

const initialState = {
  message: null,
  status: null,
  loading: true,
  courses: [],
};

const adminReducer = (state = initialState, action) => {
  const { type, data } = action;

  switch (type) {
    case STUDENT_REGISTRATION_SUCCESS:
    case STUDENT_REGISTRATION_FAILURE:
    case GET_COURSES_FAILURE: {
      return {
        ...state,
        message: data.message,
        loading: false,
        status: data.status,
      };
    }

    case GET_COURSES_SUCCESS: {
      return {
        ...state,
        courses: action.data.courses,
      };
    }

    default:
      return { ...state };
  }
};

export default adminReducer;
