import React from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    let navigate=useNavigate
    let handleDashboard=()=>{
        navigate('./Employee.jsx')
    }
  return (
    <div >
        <h3>Logo</h3>
        <div id='dash'>
        <nav>
            <ul>
                <li><a href="#Home">Home</a></li>
                <li>
                    <Link to={"/Employee"} onClick={handleDashboard}>EmployeeList</Link>
                </li>
                <li>{localStorage.getItem("username")}</li>
                <li><a href="#Logout">Logout</a></li>
            </ul>
        </nav>
        <h2>DashBoard</h2>
        <h1>Welcome {localStorage.getItem("username")}</h1>
        </div>    
    </div>
  )
}

export default Dashboard