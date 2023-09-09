import React, { Component } from 'react'

export default class MainItem extends Component {
  render() {
    let {title,description, imageUrl, newsUrl} = this.props;
    return (
      <div className="my-3">
      <div className="card" style={{width: '18rem'}}>
         <img src={imageUrl?imageUrl:"https://www.livemint.com/lm-img/img/2023/09/08/600x338/EMS_IPO_GMP_1694142665996_1694142673386.JPG"} className="card-img-top" alt=""/>
          <div className="card-body">
            <h5 className="card-title">{title?title:""}...</h5>
            <p className="card-text">{description?description:""}...</p>
            <a href={newsUrl} target="_blank" className="btn btn-primary">Go somewhere</a>
          </div>
      </div>
      </div>
    )
  }
}
