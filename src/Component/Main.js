import React, { Component } from 'react'
import MainItem from './MainItem'
export default class Main extends Component {
  render() {
    return (
      <div className="container"> 
        <h1>This is a Heading</h1>
        <div className="row">
          <div className="col-md-4">
        <MainItem title = "This is a title" description = "This is a Description"/>
          </div>
          <div className="col-md-4">
        <MainItem title = "This is a title" description = "This is a Description"/>
          </div>
          <div className="col-md-4">
        <MainItem title = "This is a title" description = "This is a Description"/>
          </div>
        </div>
      </div>
    )
  }
}
