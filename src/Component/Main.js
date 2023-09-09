import React, { Component } from 'react'
import MainItem from './MainItem'
export default class Main extends Component {
  articles = [];
  constructor()
  {
    super();
    console.log("This is a Constructor...");
    this.state = {
      articles : this.articles
    }
  }


  async componentDidMount()
  {
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=b9f5200616ae406ca17e088fa95938b8";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles});
  }
  render() {
    return (
      <div className="container"> 
        <h1>This is a Heading</h1>
        <div className="row">
        {this.state.articles.map((element)=>{
          return (
          <div className="col-md-4">
        <MainItem title = {element.title} newsUrl = {element.url} imageUrl = {element.urlToImage} className="card-img-top" description = {element.description}/>
          </div>
        ) })}
        </div>
      </div>
    )
  }
}
