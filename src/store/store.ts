import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice"
import userDataReducer from "./userDataSlice"
const combineSlice:any = {userDataReducer,todoReducer}
const store = configureStore({
reducer: combineSlice
})
export default store