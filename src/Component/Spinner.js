import React, { Component } from 'react'
import loading from './loading.gif'
const Spinner = () => {
    return (
      <div className='text-center' style={{height: '50px'}}>
        <img src={loading} alt="..loading" />
      </div>
    )
}

export default Spinner;
