import React from 'react'

const  Employee=(props)=> {
  let data=props.empDetails
  console.log(data); 
  return (
    <div>
        <table className='tableBlock' border={"2px"} cellPadding={"20px"}>
        <tr>
    <th>Emp Id</th>
    <th>Emp Name</th>
    <th>EMP Sal</th>
    <th>EMP Des</th>
    <th>EMP Gender</th>
    <th>EMP Education</th>
    <th>EMP Exp</th>
    <th>EMP Companies</th>
    <th>EMP Image</th>
    <th>EMP Skills</th>
    <th>EMP City</th>
</tr>
        {data.map((x)=>{
           return(
            <tr>
        <td>{x.Emp_Id}</td>
        <td>{x.Emp_Name}</td>
        <td>{x.EMP_Sal}</td>
        <td>{x.EMP_Des}</td>
        <td>{x.EMP_Gender}</td>
        <td>{x.EMP_Education}</td>
        <td>{x.EMP_Exp}</td>
        <td>
          <ul>
            <li>{x.EMP_Companies.previous}</li>
            <li>{x.EMP_Companies.current}</li>
        </ul>
            </td>
        <td>
         <img src={x.EMP_Image} alt="" width={"100px"} height={"100px"}></img>
         </td>
         <td>
            <ul>
              {x.EMP_Skills.map((x)=>{
            return <li>{x}</li>
        })}
        </ul>
        </td>
        <td>{x.EMP_City}</td>
  </tr>
  )
})}

        </table>
    </div>
  )
}

export default Employee