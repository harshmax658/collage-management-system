import {
  STUDENT_REGISTRATION_SUCCESS,
  STUDENT_REGISTRATION_FAILURE,
  GET_COURSES_SUCCESS,
  GET_COURSES_FAILURE,
  GET_COURSE_STUDENT_FAILURE,
  GET_COURSE_STUDENT_SUCCESS,
  UPDATE_LOADING_STATE,
  SET_FACULTY_LIST,
} from "./action";

const initialState = {
  message: null,
  status: null,
  loading: true,
  courses: [],
  studentList: [],
  facultyList: [],
};

const adminReducer = (state = initialState, action) => {
  const { type, data } = action;

  switch (type) {
    case STUDENT_REGISTRATION_SUCCESS:
    case STUDENT_REGISTRATION_FAILURE:
    case GET_COURSE_STUDENT_FAILURE:
    case GET_COURSES_FAILURE: {
      return {
        ...state,
        message: data.message,
        status: data.status,
      };
    }

    case GET_COURSES_SUCCESS: {
      return {
        ...state,
        courses: action.data.courses,
      };
    }
    case GET_COURSE_STUDENT_SUCCESS: {
      return {
        ...state,
        studentList: action.data.data,
      };
    }
    case SET_FACULTY_LIST: {
      return {
        ...state,
        facultyList: action.data.data,
      };
    }
    case UPDATE_LOADING_STATE: {
      return {
        ...state,
        loading: action.data,
      };
    }

    default:
      return { ...state };
  }
};

export default adminReducer;
