import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

const Employee = () => { 
  let[name,setName]=useState("")
  let [email,setEmail]=useState("")
  let [phoneno,setPhoneno]=useState("")
  let [designation,setDesignation]=useState([])
  let [gender,setGender]=useState()
  // let [course,setCourse]=useState("")
  let [img,setImg]=useState("")
  let navigate=useNavigate
    let handleEmployee=(e)=>{
      e.preventDefault()
      console.log([name,email,phoneno,designation,gender,img]);
        navigate('./Employee.jsx')
    }
  return (
    <div id='emp'>
      <h3>Logo</h3>
        <div>
        <nav>
            <ul>
                <li><a href="#Home">Home</a></li>
                <li>
                    <Link to={"/Employee"} onClick={handleEmployee}>EmployeeList</Link>
                </li>
                <li>{localStorage.getItem("username")}</li>
                <li><a href="#Logout">Logout</a></li>
            </ul>
        </nav>
        <h2>Create Employee</h2><br />
        <label htmlFor="Name">Name</label>
        <input type="text" placeholder='Username' id='user1' onChange={(e)=>{
            setName(e.target.value)
        }} /><br /><br />
        <label htmlFor="Email">Email</label>
        <input type="Email" placeholder='Email address' id='user1' onChange={(e)=>{
            setEmail(e.target.value)
        }}/><br /><br />
        <label htmlFor="Mobile No">Mobile No</label>
        <input type="number" placeholder='mobile no' onChange={(e)=>{
            setPhoneno(e.target.value)
        }}/><br /><br />
        <label htmlFor="Designation">Designation</label>
        <select id='dropdown'>
          <option value="HR" onChange={(e)=>{
              setDesignation(e.target.value)
          }}>HR</option>
          <option value="Manager" onChange={(e)=>{
              setDesignation(e.target.value)
          }}>Manager</option>
          <option value="Sales" onChange={(e)=>{
              setDesignation(e.target.value)
          }}>Sales</option>
        </select><br /><br />
        
            <label htmlFor="Gender">Gender</label>
            <input type="radio" name='Male' id='male' onChange={(e)=>{
              setGender(e.target.value) }} />Male
            <input type="radio" name='Female' id='female'onChange={(e)=>{
              setGender(e.target.value) }} />Female<br /><br />
       
        <label htmlFor="Course">Course</label>
        <input type="checkbox" name="MCA" id="course1" />
        <input type="checkbox" name="BCA" id="course2" />
        <input type="checkbox" name="BSC" id="course3" /> <br/><br />

        <label htmlFor="img">IMG Upload</label>
        <input type="file" name="img" id="img" onChange={(e)=>{
            setImg(e.target.value)
        }}/><br /><br />
        <button onClick={handleEmployee}>Submit</button>
        </div>
    </div>
  )
}

export default Employee