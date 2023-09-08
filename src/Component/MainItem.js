import React, { Component } from 'react'

export default class MainItem extends Component {
  render() {
    let {title,description} = this.props;
    return (
      <div className="card" style={{width: '18rem'}}>
         <img src="https://ichef.bbci.co.uk/news/1024/branded_news/1824A/production/_130709889_gettyimages-50681709.jpg" className="card-img-top" alt=""/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/" className="btn btn-primary">Go somewhere</a>
          </div>
      </div>
    )
  }
}
