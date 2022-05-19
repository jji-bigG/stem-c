import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducers";
import thunk from "redux-thunk";

export default configureStore({
  reducer,
  middleware: [thunk],
});
