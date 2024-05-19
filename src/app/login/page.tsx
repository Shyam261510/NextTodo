"use client";
import React, { useState } from 'react'
import axios from 'axios';
function login() {
    const [user,setUser] = useState({email:"",password:""})
    const [loading,setLoading] = useState(false)
    const login = async(e:any)=>{
        e.preventDefault()
try {
    setLoading(true)
    await axios.post("/api/users/login",user)
    console.log("login sucessfully")
setLoading(false)
} catch (error:any) {
    setLoading(false)
    console.log("login error", error.message)
}
    }
  return (
    <div className='min-h-screen bg-gray-100 flex justify-center items-center'>
     {loading  ? (<div>loading....</div>):(   <form onSubmit={login}>
            <input type="text" placeholder='enter your email id' value={user.email} onChange={(e)=> setUser({...user,email:e.target.value})}/>
            <input type="password" placeholder='enter your password' value={user.password} onChange={(e)=> setUser({...user,password:e.target.value})}/>
            <button>Login</button>
        </form>
)}    </div>
  )
}

export default login