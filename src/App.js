import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Sidebar from './components/Sidebar'



class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Sidebar />
        <Home />
      </div>
    )
  }
}
export default App

