import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Form=()=> {
    let [username,setUsername]=useState("")
    let [password,setPassword]=useState("")
    let navigate=useNavigate();
    let handleLogin=(e)=>{
        e.preventDefault()
    localStorage.setItem("username",username)
    localStorage.setItem("password",password)
    navigate("./dashboard")
    toast.success(`${username} was successfully registered`)
    }
  return (
    <div>
        <h3>Logo</h3>
        < form action=''>
        <h2>Login Page</h2>
        <label htmlFor="Username">Username</label>
        <input type="text" placeholder='Username' onChange={(e)=>{
            setUsername(e.target.value)
        }} /><br /><br /><br />
        <label htmlFor="Password">Password </label>
        <input type="password" placeholder='password' onChange={(e)=>{
            setPassword(e.target.value)
        }} /><br /><br />
        <button onClick={handleLogin}>Login</button>
        </form>
    </div>
  )
}

export default Form