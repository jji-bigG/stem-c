import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";
import thunk from "redux-thunk";

export default configureStore({
  reducers,
  middleware: [thunk],
});
