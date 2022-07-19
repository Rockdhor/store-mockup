import React, { Component } from 'react'
import NavBar from '../components/NavBar'
export default class Store extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        Store
        <a href='/'>home</a>    
    </div>
    )
  }
}
