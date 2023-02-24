import React, { Component } from 'react'
import { faker } from '@faker-js/faker';


export default class Faker extends Component {
    constructor(){
        super()
        this.state={PHOTO:faker.image.avatar()}
    }

    handleChange=()=>{
        this.setState({PHOTO:faker.image.avatar()})
    }
  render() {
    return (

      <div>
        <img src={this.state.PHOTO} alt="" />
        <button onClick={this.handleChange}>change</button>
      </div>
    )
  }
}
