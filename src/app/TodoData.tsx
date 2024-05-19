"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setTodoData } from "@/store/todoSlice";

interface TodoProp {
  refresh: boolean;
  setRefresh: Function;
}

const TodoData: React.FC<TodoProp> = ({ refresh, setRefresh }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [IsEditable, setIsEditable] = useState(false);
  const [todos, setTodos] = useState([
    { _id: 1, content: "todo1" },
    { _id: 2, content: "todo2" },
  ]);

  const todoState = useSelector((state: any) => state.todoReducer);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const response = await axios.get("/api/users/getTodo");
  //       dispatch(setTodoData(response.data));
  //       setLoading(false);
  //     } catch (error: any) {
  //       console.log("get todos error", error.message);
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, [refresh, dispatch]);

  const updateTodo = async (id: string, updatedData: any) => {
    try {
      setLoading(true);
      await axios.patch("/api/users/updateTodo", { id, ...updatedData });
      setRefresh((prev: boolean) => !prev);
      setLoading(false);
    } catch (error: any) {
      console.log("updateTodo error", error.message);
      setLoading(false);
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      setLoading(true);
      await axios.delete("/api/users/deleteTodo", { data: { id } });
      setRefresh((prev: boolean) => !prev);
      setLoading(false);
    } catch (error: any) {
      console.log("deleteTodo error", error.message);
      setLoading(false);
    }
  };

  // const editTodo = async (id: string) => {
  //   try {
  //     setLoading(true);
  //     await updateTodo(id, { content });
  //     setEditableTodoId(null);
  //     setLoading(false);
  //   } catch (error: any) {
  //     console.log("editTodo error", error.message);
  //     setLoading(false);
  //   }
  // };

  return (
    <div>
      {loading && <h2>Loading...</h2>}
      {todos.map((todo: any) => (
        <div key={todo._id} className="flex">
          <input
            type="text"
            value={todo.content}
            readOnly={IsEditable}
            onChange={(e) =>
              setTodos((prev: any) => ({ ...prev, content: e.target.value }))
            }
          />
          <div className="flex gap-2">
            <button onClick={() => setIsEditable(true)}>edit</button>
            <button onClick={() => (setIsEditable(false), console.log(todo))}>
              save
            </button>
            <button onClick={() => updateTodo(todo._id, { completed: true })}>
              completed
            </button>
            <button onClick={() => deleteTodo(todo._id)}>delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoData;
