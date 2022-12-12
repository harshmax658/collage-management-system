import { call, all } from "redux-saga/effects";
import { adminSaga } from "./admin/adminSaga";

export default function* rootSaga() {
  yield all([call(adminSaga)]);
}
