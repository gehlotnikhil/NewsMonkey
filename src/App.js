import './App.css';
import React, { Component } from 'react'
import NavBar from './Component/NavBar';
import LoadingBar from 'react-top-loading-bar'
import Main from './Component/Main';
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";

export class App extends Component {
  apikey = process.env.REACT_APP_NEWS_API
  pageSize = 10;
  country = "in";
  state = {
    progress: 0
  };
  setProgress= (progress)=> 
  {
    this.setState({progress: progress});
    console.log(this.apikey);
  }
  render() {
    return (
      <>
      <Router basename='/NewsMonkey'>
        <div>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress} 
        height={3}

      />
          <NavBar />
          <Routes>
          <Route path="/" element={<Main apikey = {this.apikey} setProgress={this.setProgress}key = "generals" exact pageSize = {this.pageSize} country = {this.country} categorygenral = "general" />} />;
          <Route path="/business" element={<Main apikey = {this.apikey} setProgress={this.setProgress}key = "business" exact pageSize = {this.pageSize} country = {this.country} category = "business" />} />;
          <Route path="/entertainment" element={<Main apikey = {this.apikey} setProgress={this.setProgress}key = "entertainment" exact pageSize = {this.pageSize} country = {this.country} category = "entertainment" />} />;
          <Route path="/general" element={<Main apikey = {this.apikey} setProgress={this.setProgress}key = "general" exact pageSize = {this.pageSize} country = {this.country} category = "general" />} />;
          <Route path="/health" element={<Main apikey = {this.apikey} setProgress={this.setProgress}key = "health" exact pageSize = {this.pageSize} country = {this.country} category = "health" />} />;
          <Route path="/science" element={<Main apikey = {this.apikey} setProgress={this.setProgress}key = "science" exact pageSize = {this.pageSize} country = {this.country} category = "science" />} />;
          <Route path="/sports" element={<Main apikey = {this.apikey} setProgress={this.setProgress}key = "sports" exact pageSize = {this.pageSize} country = {this.country} category = "sports" />} />;
          <Route path="/technology" element={<Main apikey = {this.apikey} setProgress={this.setProgress}key = "technology" exact pageSize = {this.pageSize} country = {this.country} category = "technology" />} />;
          </Routes>
        </div>
        </Router>
      </>
    )
  }
}

export default App;
