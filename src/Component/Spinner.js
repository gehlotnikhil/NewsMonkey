import React, { Component } from 'react'
import loading from './loading.gif'
export default class  extends Component {
  render() {
    return (
      <div className='text-center' style={{height: '50px'}}>
        <img src={loading} alt="..loading" />
      </div>
    )
  }
}
