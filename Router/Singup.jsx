import React,{useState} from 'react'
import {useNavigate} from "react-router-dom"
import {toast} from 'react-toastify';

function Singup() {

    let[username,setUsername]=useState("")
    let[password,setPassword]=useState("")
    let navigate=useNavigate()


    let handleForm=(e)=>{
       e.preventDefault()
        console.log({username,password});

        let localUsername=localStorage.setItem("username",username)
        let localPassword=localStorage.setItem("password",password)
            navigate('/login')
            toast.success('${username} succefully loginned')

    }
  return (
        <div style={{height:"200px",width:"500px"}}>
        <p>username or password</p>
       <input type="text" onChange={(e)=>{setUsername(e.target.value) }}/>  <br/>
       <p>password</p>
       <input type="password" onChange={(e)=>{setPassword(e.target.value) }}/>  <br/>
       <button onClick={handleForm}>SUBMIT</button>
    </div>
  )
}
export default Singup