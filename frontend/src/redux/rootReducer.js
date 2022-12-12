import { combineReducers } from "redux";
import loginReducer from "./login/loginReducer";
import adminReducer from "./admin/adminReducer";

const rootReducer = combineReducers({ loginReducer, adminReducer });
export default rootReducer;
