import React from 'react'
import Course from "./Course.jsx"


//passing Array ass the props
// const App=()=> {
//   return (
//     <div>
//         <Course data={{skills:["HTML","CSS","JS","REACT","MONGO","SQL"]}} />
//     </div>
//   )
// }


//passing function as the props
// const App=()=>{
//     return(
//         <div>
//             <Course data={()=>{console.log("hello")}} />
//         </div>
//     )
// }


// passing the boolean value as props
const App =()=>{
    return(
        <div>
        <Course course= {{courseAvail:false,
                              courseName:"Java",
                               courseDuration:"4 months"
                            }} />
        <Course course= {{courseAvail:true,
                              courseName:"MERN",
                               courseDuration:"5 months"
                            }} />

        <Course course= {{courseAvail:true,
                              courseName:"SQL",
                               courseDuration:"2 months"
                            }} />
        </div>
    )
}
export default App
