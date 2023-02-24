import React from "react";

const course=(props)=>{
    if(props.course.courseAvail===true)
    {
    return(
        <>
        {/*  <button onClick={props.data}>Click me</button>  */}
        <h1>{PaymentResponse.course.courseName}</h1>
        <button style={{backgroundColor:"green"}}>AVAILABLE</button>
        </>
    )
    }
    else
        return(
            <>
        <h1>{PaymentResponse.course.courseName}</h1>
        <button style={{backgroundColor:"red"}}>AVAILABLE</button>
        </>
        )
    
}
export default course