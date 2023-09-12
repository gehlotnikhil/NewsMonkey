import React, { Component } from 'react'

export default class MainItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, source, date } = this.props;
    return (
      <div className="my-3">
        <div className="card" >
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'end', position: 'absolute', right: '0', top: '0px' }}>
            <span className="  badge rounded-pill bg-danger">
              {source}
            </span>
          </div>
          <span className="visually-hidden">unread messages</span>
          <img src={imageUrl ? imageUrl : "https://www.livemint.com/lm-img/img/2023/09/08/600x338/EMS_IPO_GMP_1694142665996_1694142673386.JPG"} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{title ? title : ""}...</h5>
            <p className="card-text">{description ? description : ""}...</p>
            <p className="card-text"><small className="text-body-secondary">{new Date(date).toGMTString()}</small></p>

            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    )
  }
}
