import React, { useEffect, useState } from 'react'
import MainItem from './MainItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const Main = (props) => {
  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResult, settotalResult] = useState(0)

  const  stringUppercase = (string) => {
    return (string.charAt(0).toUpperCase() + string.slice(1));
  }
 

  const updatePage = async (op) => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${op === "add" ?page + 1 : (op === "sub" ? page - 1 : page)}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    props.setProgress(50);
    let parsedData = await data.json();
    props.setProgress(100);
    console.log(parsedData);
    setarticles(parsedData.articles);
    setloading(false);
    settotalResult(parsedData.totalResults);
  }
// run without if dependency
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

  const handleClickNext = async () => {
    setpage(page + 1 );
    updatePage("add");
  }

  const fetchData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}&pageSize=${props.pageSize}`;
    setpage(page + 1 );
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setarticles(articles.concat(parsedData.articles));
      settotalResult(parsedData.totalResults);     
  }

  return (
    <>
      <div className="container">
        <h1 className='h-primary  text-center'>NewsMonkey - Top {stringUppercase(props.category)} HeadLine</h1>
        {loading && <Spinner />}

        <InfiniteScroll
          dataLength={articles.length} //This is important field to render the next data
          next={fetchData}
          hasMore={articles.length !== totalResult}
          loader={<Spinner />}>
          <div className="row container">
            {(!loading) && articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <MainItem title={element.title?element.title:""} newsUrl={element.url?element.url:""} imageUrl={element.urlToImage?element.urlToImage:""} className="card-img-top" description={element.description?element.description:""} source={element.source.name?element.source.name:""} date={element.publishedAt?element.publishedAt:""} />
                </div>
              )
            })}

          </div>
        </InfiniteScroll>
      </div>
    </>
  )

}

Main.defaultProps = {
  country: 'in',
  category: 'general',
  pageSize: 8
}
Main.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
}
export default Main;