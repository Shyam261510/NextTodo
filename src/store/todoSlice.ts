import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface todostate {
    todos:any | null
}

const initialState : todostate ={
todos:null
}
export const todoSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{
        setTodoData:(state,action:PayloadAction<any>)=>{
            state.todos = action.payload
        }
    }
})
export const {setTodoData} = todoSlice.actions
export default todoSlice.reducer