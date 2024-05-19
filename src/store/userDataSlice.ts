import { createSlice,PayloadAction } from "@reduxjs/toolkit";
interface userState {
    userData:any | null,
    status:Boolean

}
const initialState:userState = {
    userData:null,
    status:false
}
export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        authLogin:(state,action:PayloadAction<any>)=>{

state.status = true
state.userData=action.payload
    },
    logout:(state)=>{
state.status = false,
state.userData = null
    }
    }
})
export const {authLogin} = userSlice.actions
export default userSlice.reducer