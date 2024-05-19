"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { authLogin } from "@/store/userDataSlice";
import { useSelector, useDispatch } from "react-redux";

function me() {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.userDataReducer);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await axios.get("/api/users/userData");
        if (data.status === 200) {
          dispatch(authLogin({ userData: data.data.data, status: true }));
        }
        setLoading(false);
      } catch (error: any) {
        console.log("user data not get", error.message);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div>
          {state.userData && (
            <div>
              <h2>Name : {state.userData.userData.username}</h2>
              <h2>Email Id : {state.userData.userData.email}</h2>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default me;
