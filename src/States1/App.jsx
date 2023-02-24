import React, { Component} from 'react'
import JSON from "./task.json"
import Employee from './Employee.jsx'
import "./global.css"
export default class App extends Component {
constructor(){
  super()
  this.state={empDetails:JSON}
}
  render() {
    return (
      <div>
        <Employee empDetails={this.state.empDetails}/>
      </div>
    )
  }
}
