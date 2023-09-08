import './App.css';
import React, { Component } from 'react'
import NavBar from './Component/NavBar';
import Main from './Component/Main';

export class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Main/>
      </div>
    )
  }
}

export default App;
