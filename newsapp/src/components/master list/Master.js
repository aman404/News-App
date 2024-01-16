import React, { Component } from 'react'
import Articlecard from '../article_ cards/Articlecard'
import PropTypes from 'prop-types'
import './master.css'
export default class Master extends Component {
  static defaultProps = {
    category: 'general'
  }
  static propTypes = {
    category: PropTypes.string
  }
  constructor(props) {
    super(props);
    this.state = {
      article: [],
      page: 1,
      totalResults: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }
  apikey1 = "aa7c150a5d1440e5ab9a0a7137b338a9"
  apikey2 = "4f7039a89beb4f7caa5bd8c5c5313c0f"
  apikey3 = "30bfa7efb1e54067ad874d2fdf4c2751"
  apikey4 = "a50582e018da43bc929907bd693c4bc4"
  url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.apikey2}&pageSize=12`
  async componentDidMount() {

    let data = await fetch(this.url);
    let parsedData = await data.json();
    this.setState({
      article: parsedData.articles,
      totalResults: parsedData.totalResults
    })
  }

  handleClick(title, author, publishedAt, urlToImage, content, url) {
    console.log("Master title: ", title)
    this.props.openArticle(title, author, publishedAt, urlToImage, content, url)
  }

  async componentDidUpdate(prevProps) {
    
    if(prevProps.search !== this.props.search) {
      this.url = `https://newsapi.org/v2/everything?${"q=" + this.props.search}&category=${this.props.category}&apiKey=${this.apikey2}&page=1&pageSize=12`
      let data = await fetch(this.url);
      let parsedData = await data.json();
      await this.setState({
        article: parsedData.articles,
        totalResults: parsedData.totalResults,
        page : 1
      })
    }
  }
  handlePrevious = async () => {
    if (this.props.search) {
      this.url = `https://newsapi.org/v2/everything?${"q=" + this.props.search}&category=${this.props.category}&apiKey=${this.apikey2}&page=${this.state.page - 1}&pageSize=12`
    }
    else {
      this.url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.apikey2}&page=${this.state.page - 1}&pageSize=12`;
    }
    let data = await fetch(this.url);
    let parsedData = await data.json();

    this.setState(
      {
        page: this.state.page - 1,
        article: parsedData.articles
      }
    )
  }
  handleNext = async () => {
    if (this.props.search) {
      this.url = `https://newsapi.org/v2/everything?${"q=" + this.props.search}&category=${this.props.category}&apiKey=${this.apikey2}&page=${this.state.page + 1}&pageSize=12`
    }
    else {
      this.url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.apikey2}&page=${this.state.page + 1}&pageSize=12`;
    }
    let data = await fetch(this.url);
    let parsedData = await data.json();

    this.setState(
      {
        page: this.state.page + 1,
        article: parsedData.articles
      }
    )
    console.log("Page: ", this.state.page)
  }
  render() {
    return (
      <div>
        <h1>News App</h1>
        <div className='masterContainer'>
          <div className='master'>
            {this.state.article.map((element, index) => {
              return <div key={index} className='col' onClick={() => this.handleClick(element.title, element.author, element.publishedAt, element.urlToImage, element.content, element.url)}>
                <Articlecard title={element.title} image={element.urlToImage} />
              </div>
            })}
          </div>
          <div className='pagenav'>
            <button disabled={this.state.page <= 1} onClick={this.handlePrevious}>Previous</button>
            <h3>Page {this.state.page}</h3>
            <button disabled={this.page >= Math.ceil(this.state.totalResults / 12)} onClick={this.handleNext}>Next</button>
          </div>
        </div>

      </div>
    )
  }
}
