// import React, { Component } from 'react'

// export default class Refs extends Component {
//     componentDidMount() {
// let h1=document.querySelector('h1')
// console.log(h1,"DOM WAY");
//     }
//   render() {
//     return (
//       <div>
//         <h1>HELLO WORLD</h1>
//       </div>
//     )
//   }
// }
import React, { Component, createRef } from 'react'

export default class Refs extends Component {
    constructor() {
        super()
        this.h1Ref=createRef(null)
    }
  render() {
    return (
      <div>
        <h1 ref={this.h1Ref}>HELLO WORLD</h1>
      </div>
    )
  }
}

