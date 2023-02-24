import React from "react";
import Course from "./Course.jsx"

const App=()=>{
    return(
// /<div><Course data={()=>{console.log("hello")}} ></div>
<div>
    <Course  course ={{courseAvail:false,
                        courseName:"Java",
                        courseDuration:"3 months"}} />
    <Course  course ={{courseAvail:true,
                        courseName:"Mern",
                        courseDuration:"5 months"}} />
    <Course  course ={{courseAvail:false,
                        courseName:"Sql",
                        courseDuration:"2 months"}} />


                        </div>
)
}
export default App