import React, { Component,createRef } from 'react'

export default class Refs1 extends Component {
    constructor(){
        super()
        this.divRef=createRef()
        this.State={Company:"Qspiders"}
        this.divRef=createRef()
        this.btnRef=createRef()
    }
    ChangeCompany=()=>{
       this.setState({Company:"Jspiders"},
       this.divRef.current.style.colour="yellow",
       this.divRef.current.style.backgroundcolour="black",
       this.divRef.current.style.padding="10px",
        this.btnRef.current.style.backgroundcolour="red"
    )
    }
  render() {
    return (
      <div>
        <div ref={this.divRef}> {this.State.company}</div>
        <button onClick={this.ChangeCompany}ref={this.btnRef}> change company</button>
      </div>
    )
  }
}


// import React ,{useRef,useState} from 'react'

// const Refs1=()=> {
//   let [Img,setImg]=useState("https://hips.hearstapps.com/hmg-prod/images/cute-baby-animals-1558535060.jpg")
//   let imgRef=useRef("")
//   let btnRef=useRef("")
// let changeBorder=()=>{
//   imgRef.current.style.border="2px solid red"
//   btnRef.current.style.border="2px solid green"
//   imgRef.current.style.width="200px"
//   imgRef.current.style.height="100px"
// }

//   return (
//     <div>
//       <img src="{Img}" alt="" ref={imgRef}/>
//       <button ref={btnRef} onClick={changeBorder}> CHANGE BORDER</button>
//     </div>
//   )
// }

// export default Refs1