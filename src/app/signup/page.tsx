"use client";
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useRouter } from 'next/navigation';
function signup() {
    const [user,setUser] = useState({
        username:"",email:"",password:""
    })
    const router = useRouter()
    const [loading,setLoading] = useState(false)
    const createUser = async(e:any)=>{
        e.preventDefault()
        try {
            setLoading(true)
             await axios.post("/api/users/signup",user)
             console.log("user login sucessfully")
            setLoading(false)
            setUser({
                username:"",email:"",password:""
            })
    router.push("/login")
        } catch (error:any) {
            setLoading(false)
            console.log("signup fail",error.message)
        }
            }
    return (
    <div className='min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
        <form onSubmit={createUser}>
<input type="text" required placeholder='enter your username...' value={user.username} onChange={(e)=> setUser({...user,username:e.target.value})}/>
<input type="email" required placeholder='enter your email Id...' value={user.email} onChange={(e)=> setUser({...user,email:e.target.value})}/>
<input type="password" required placeholder='enter the password...' value={user.password} onChange={(e)=> setUser({...user,password:e.target.value})}/>
      <button>sign up</button>
        </form>
    </div>
  )
}

export default signup