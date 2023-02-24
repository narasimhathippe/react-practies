import React from 'react'
import {useState} from 'react'
const Hooks=()=> {
    let[userName,setuserName]=useState("Santhosh")
    let[Phone,setPhone]=useState(8722002732)
  return (
    <div>
        <h1>{userName}</h1>
        <h2>{Phone}</h2>
        <button onClick={()=>{
            setuserName("Narasimha")
            setPhone(9110841210)
        }}>click</button>
    </div>
  )
}

export default Hooks