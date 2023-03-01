import React, {useState} from 'react'
const Rendering=()=> {
    let [authuser,setAuthUser]=useState(false)
    let AcceptedUser=( )=>{
        return(
            <>
            <nav>
                <ol>
                <li>LOGO</li>
                <li>MENU</li>
                <li>CONTACT</li>
                <li>SEARCH</li>
                </ol>
            </nav>
            </>
        )
    }
   
     let NotAcceptedUser =()=>{
  return (
           <>
               <nav>
                  <ol>
                    <li>LOGIN</li>
                    <li>SIGNUP</li>
                    <li>FORGOT PASSWORD</li>
                  </ol>
                </nav>
            </>
          )
  }
     return <>{authuser} <AcceptedUser />  <notAcceptedUser /> </>
}
export default Rendering