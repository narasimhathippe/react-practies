import React,{useState} from 'react'
import {useNavigate} from "react-router-dom"
import {toast} from 'react-toastify';
function Login() {

        let[username,setUsername]=useState("")
        let[password,setPassword]=useState("")
        let navigate=useNavigate()


        let handleForm=(e)=>{
           e.preventDefault()
            console.log({username,password});

            let localUsername=localStorage.getItem("username")
            let localPassword=localStorage.getItem("password")
            if( localUsername === username &&  localPassword === password)
            {
                toast.success(`${username} Logged in SUCCESSFULLY`)
                navigate('/home')
            }
                else
            {
                toast.error("PLEASE CHECK USERNAME AND PASSWORD")
                navigate('/login')
            }
        }
      return (
            <div style={{height:"200px",width:"500px"}}>
            <p>username or email</p>
           <input type="text" onChange={(e)=>{setUsername(e.target.value) }}/>  <br/>
           <p>password</p>
           <input type="password" onChange={(e)=>{setPassword(e.target.value) }}/>  <br/>
           <button onClick={handleForm}>SUBMIT</button>

        </div>

  )
}

export default Login