import React, { Component } from 'react'
import MainItem from './MainItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export default class Main extends Component {
  static defaultProps = {
    country: 'in',
    category: 'general',
    pageSize: 8
  }
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
  }
  articles = [];

  stringUppercase = (string) => {
    return (string.charAt(0).toUpperCase() + string.slice(1));
  }
  constructor(props) {
    super(props);
    console.log("This is a Constructor...");
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
      totalResult: 0
    }
    document.title = `NewsMonkey - ${this.stringUppercase(this.props.category)}`;
  }

  async updatePage(op) {
    // this.setState({ loading: true });
    console.log(this.props.apikey);
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${op === "add" ? this.state.page + 1 : (op === "sub" ? this.state.page - 1 : this.state.page)}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.props.setProgress(50);
    let parsedData = await data.json();
    this.props.setProgress(100);
    console.log(parsedData);
    setarticles(parsedData.articles);
    setloading(false);
    settotalResult(parsedData.totalResults);
  }

    useEffect(() => {
      document.title = `NewsMonkey = ${stringUppercase(props.category)}`;
        updatePage(null);
    }, [])
    
  // async componentDidMount() {
  // } 
  const handleClickPrev = async () => {
    setpage(page - 1 );
    updatePage("sub");

  }

  handleClickNext = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updatePage("add");
  }

  fetchData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState(
      {
        articles: this.state.articles.concat(parsedData.articles),
        totalResult: parsedData.totalResults
      });
      console.log(this.state.page);
      console.log("this.s= "+this.state.articles.length+" thit= "+this.state.totalResult+"  "+this.state.articles.length != this.state.totalResult);
  }
  render() {

    return (
      <>
      <div className="container">
        <h1 className='h-primary  text-center'>NewsMonkey - Top {this.stringUppercase(this.props.category)} HeadLine</h1>
        {this.state.loading && <Spinner />}
       
        <InfiniteScroll
          dataLength={this.state.articles.length} //This is important field to render the next data
          next={this.fetchData}
          hasMore={this.state.articles.length !== this.state.totalResult}
          loader={<Spinner />}>
          <div className="row container">
            {(!this.state.loading) && this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.description}>
                  <MainItem title={element.title} newsUrl={element.url} imageUrl={element.urlToImage} className="card-img-top" description={element.description} source={element.source.name} date={element.publishedAt} />
                </div>
              )
            })}

      </div>
        </InfiniteScroll>
        </div>
       </>
    )
  }
}
