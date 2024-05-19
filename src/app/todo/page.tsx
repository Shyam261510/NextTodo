"use client";
import React, { useState } from "react";
import axios from "axios";
import TodoData from "../TodoData";
function todo() {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const createTodo = async () => {
    try {
      setLoading(true);
      await axios.post("/api/users/createTodo", { content });
      console.log("todo  is added ");
      setRefresh(!refresh);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      console.log("create todo error", error.message);
    }
  };
  return (
    <div>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div>
          <h2>Add task</h2>
          <input
            type="text"
            required
            placeholder="enter your task..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button onClick={createTodo}>Add</button>
        </div>
      )}
      <TodoData refresh={refresh} />
    </div>
  );
}
export default todo;
