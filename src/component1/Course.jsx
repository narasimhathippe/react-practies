import React from 'react'

const Course=(Props)=>{
    return(
    <>
           
           <ul>{Props.data.skills.map((data)=>{
        return <li>{data}</li>
           })}
           </ul>
           </>
    )
}
export default Course