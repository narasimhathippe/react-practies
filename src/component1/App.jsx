import { type } from "@testing-library/user-event/dist/type/index.js"
import React from "react"
import Course from  "./Course.jsx"


const App =()=>{
    return(
    <div style={type}>
        <Course data = {{skills:["HTML","CSS","JS","REACT","MONGODB","SQL","JAVA"]}} />
       </div>
    
)
}
export default App