import React, { Component } from 'react'
import NavBar from '../components/NavBar'
export default class Homepage extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        Homepage
        <a href="/store">Store</a>
      </div>
      
    )
  }
}
