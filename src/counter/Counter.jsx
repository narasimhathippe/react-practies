import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(){
        super()
        this.state={count:0}
    }
    handleIncrement=()=>{
        this.setState({count:this.state.count + 1})
    }

    handleDecrement=()=>{
        this.setState({count:this.state.count - 1})
    }

    handleReset=()=>{
        this.setState({count:0})
    }
  render() {
    return (
      <div className='mainDiv'>
        <h1>{this.state.count}</h1>
        <div className='groups'>
            <button onClick={this.handleIncrement}>+ INCREMENT</button>
            <button onClick={this.handleDecrement}>- DECREMENT</button>
            <button onClick={this.handleReset}>RESET</button>
        </div>
      </div>
    )
  }
}
