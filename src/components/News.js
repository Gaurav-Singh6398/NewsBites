import React, { Component } from "react";
import Newsitems from "./Newsitem";
import PropTypes from "prop-types";

export class News extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
     
      page: 1,
    };
  }
  static defaultProps={
      country:'in',
      pageSize:8,
      category:"general"
  }
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }
  async componentDidMount() {
    let url = `http://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=587544547870499eb88a97379d82bfe0&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
    });
  }
  handlePreviousClick = async () => {
    let url = `http://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=587544547870499eb88a97379d82bfe0&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
  
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    this.setState({
      page: this.state.page - 1, 
      articles: parseData.articles
      });
      
    
  };
  handleNextClick = async () => {
    if (
      !(this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)))
    
      {
      let url = `http://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=587544547870499eb88a97379d82bfe0&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(parseData);
      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles
       
      });
      console.log(this.state.articles)
    }
   
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">Top Headings</h1>
        
        <div className="row">
          {this.state.articles.map((element) => {
            return (

              <div className="col-md-4" key={element.url}>
                <Newsitems
                  title={element.title ? element.title.slice(0, 88) : " "}
                  description={element.description ? element.description : " "}
                  imgUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://www.nzherald.co.nz/resizer/PoSFRtFzAbvt4rpFcY_rkXZcI-Q=/1200x675/smart/filters:quality(70)/cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/SABVQ5S6SFE7ZJEECWV7ICZJ7U.jpg"
                  }
                  newsUrl={element.url}author={element.author}date={element.publishedAt}source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
export default News;
