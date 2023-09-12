import './App.css';
import React, { useState } from 'react'
import NavBar from './Component/NavBar';
import LoadingBar from 'react-top-loading-bar'
import Main from './Component/Main';
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";

const App = () => {
  const apikey = process.env.REACT_APP_NEWS_API
  const pageSize = 5;
  const country = "in";
  const [state, setstate] = useState(0);
  const setProgress= (progress)=> 
  {
    setstate(progress);
  }

    return (
      <>
      <Router basename='/NewsMonkey'>
        <div>
        <LoadingBar
        color='#f11946'
        progress={state} 
        height={3}

      />
          <NavBar />
          <Routes>
          <Route path="/" element={<Main apikey = {apikey} setProgress={setProgress}key = "generals" exact pageSize = {pageSize} country = {country} categorygenral = "general" />} />;
          <Route path="/business" element={<Main apikey = {apikey} setProgress={setProgress}key = "business" exact pageSize = {pageSize} country = {country} category = "business" />} />;
          <Route path="/entertainment" element={<Main apikey = {apikey} setProgress={setProgress}key = "entertainment" exact pageSize = {pageSize} country = {country} category = "entertainment" />} />;
          <Route path="/general" element={<Main apikey = {apikey} setProgress={setProgress}key = "general" exact pageSize = {pageSize} country = {country} category = "general" />} />;
          <Route path="/health" element={<Main apikey = {apikey} setProgress={setProgress}key = "health" exact pageSize = {pageSize} country = {country} category = "health" />} />;
          <Route path="/science" element={<Main apikey = {apikey} setProgress={setProgress}key = "science" exact pageSize = {pageSize} country = {country} category = "science" />} />;
          <Route path="/sports" element={<Main apikey = {apikey} setProgress={setProgress}key = "sports" exact pageSize = {pageSize} country = {country} category = "sports" />} />;
          <Route path="/technology" element={<Main apikey = {apikey} setProgress={setProgress}key = "technology" exact pageSize = {pageSize} country = {country} category = "technology" />} />;
          </Routes>
        </div>
        </Router>
      </>
    )
  
}

export default App;
