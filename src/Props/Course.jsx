import React from 'react'
//passing Array as the props


// const Course=(props)=> {
//   return (
//     <>
//     <ul>
//         {props.data.skills.map((x)=>{
//             return<li>{x}

//             </li>
//         })}</ul></>
//   )
// }


//passing function as the props
// const Course =(props)=>{
//     return(
//         <>
//         <button onclick={props.data}>CLICK ME</button>
//         </>
//     )
// }


//passing the boolean value as props
const Course =(Props)=>{
    if(Props.course.courseAvail===true)
    return(
        <>
         <h1>{Props.course.courseName}</h1>
         <button style={{backgroundColor:"green"}}>Available</button>

       </>
    )

else
{
    return(
        <>
         <h1>{Props.course.courseName}</h1>
         <button style={{backgroundColor:"red"}}>NOT AvaiLable</button>
       </>
    )
}
}

export default Course