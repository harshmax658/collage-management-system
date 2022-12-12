import {
  STUDENT_REGISTRATION_SUCCESS,
  STUDENT_REGISTRATION_FAILURE,
} from "./action";

const initialState = {
  message: null,
  status: null,
  loading: true,
};

const adminReducer = (state = initialState, action) => {
  const { type, data } = action;

  switch (type) {
    case STUDENT_REGISTRATION_SUCCESS:
    case STUDENT_REGISTRATION_FAILURE: {
      console.log(data);
      return {
        ...state,
        message: data.message,
        loading: false,
        status: data.status,
      };
    }
    // case STUDENT_REGISTRATION_FAILURE: {
    // }

    default:
      return { ...state };
  }
};

export default adminReducer;
