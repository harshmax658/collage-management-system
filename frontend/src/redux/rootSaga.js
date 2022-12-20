import { call, all } from "redux-saga/effects";
import adminSaga from "./admin/adminSaga";

import loginSaga from "./login/loginSaga";
export default function* rootSaga() {
  yield all([call(adminSaga), call(loginSaga)]);
}
