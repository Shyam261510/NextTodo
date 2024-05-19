"use client";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
interface TodoProp {
  refresh: boolean;
}
import axios from "axios";
import { setTodoData } from "@/store/todoSlice";
const TodoData: React.FC<TodoProp> = ({ refresh }) => {
  const dispatch = useDispatch();
  const todoState = useSelector((state: any) => state.todoReducer);
  console.log(todoState);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get("/api/users/getTodo");
        dispatch(setTodoData(data.data));
      } catch (error: any) {
        console.log("get todos error", error.message);
      }
    };
    fetchData();
  }, [refresh]);
  const updateTodo = async(id)=>{
try{
const todo = axiso
}catch(error:any){
  console.log(error.message)
}
  }
  return (
    <div>
      {todoState?.todos?.data?.map((todo: any) => (
        <div key={todo.id}>
          <input type="text" value={todo.content} readOnly />
        </div>
      ))}
    </div>
  );
};

export default TodoData;
