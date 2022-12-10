import { LOGIN } from "./action";
const initialUserState = {
  role: "",
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case LOGIN: {
      return { ...state, role: action.data };
    }
    default:
      return { ...state };
  }
};
export default userReducer;
