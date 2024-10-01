import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Features/UserSlice";
import productReducer from '../Features/ProductSlice'

const store = configureStore({
  reducer: {
    users:userReducer,
    products:productReducer
  },
});
export default store;
