import React, { Component } from 'react'

export default class Domevent extends Component {
    constructor(){
        super()
        this.setState({userName:"arun"})
    }
    componentDidMount(){
       let btn=document.querySelector('button')
       btn.addEventListener('click',()=>{
        this.setState({userName:"chinnu"})
       })

}
  render() {
    return (
      <div>
        <h1>{this.state.userName}</h1>
        <button>CHANGE</button>
      </div>
    )
  }
}
