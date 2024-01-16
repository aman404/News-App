import './App.css';
import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Article from './components/article/Article'
import Master from './components/master list/Master';


export default class App extends Component {
  constructor()
  {
    super()
    this.state={
      search:'',
      title:'',
      author:'',
      publishedAt:'',
      urlToImage:'',
      content:'',
      homepage: false
    }
    this.func = this.func.bind(this);
    this.openArticle = this.openArticle.bind(this)
  }
  search=''
  home()
  {
    this.setState(
      {
        homepage:true
      }
    )
    console.log("App homepage", this.state.homepage)
  }
  func(val) {
    this.search=val
    this.setState(
      {
        search: val
      }
    )
    console.log("App Search:",this.search)
  }
  openArticle(title,author,publishedAt,urlToImage,content,url)
  {
    this.setState(
      {
        title:title,
        author:author,
        publishedAt:publishedAt,
        urlToImage:urlToImage,
        content:content,
        url:url
      }
    )
  }
  /*
  <Navbar func={this.func}/>
  <Master search = {this.state.search}/>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Master />}/>
          <Route path="article" element={<Article />}/>
        </Route>
      </Routes>
    </BrowserRouter> 

    <div>
        <Layout />
    </div>  
  */
  render() {
    return (
    <BrowserRouter>
    <Navbar func={this.func} home={this.home}/>
      <Routes>
        <Route exact path ="/" index element={<Master key = "home" search = {this.state.search} openArticle={this.openArticle}   category=""/>} />
        <Route exact path = "/business" element={<Master key = "business" search = {this.state.search} openArticle={this.openArticle}   category="business"/>} />
        <Route exact path = "/sports" element={<Master key = "sports" search = {this.state.search} openArticle={this.openArticle}  category="sports"/>} />
        <Route exact path = "/technology" element={<Master key="technology" search = {this.state.search} openArticle={this.openArticle}  category="technology"/>} />
        <Route exact path = "/entertainment" element={<Master key="entertainment" search = {this.state.search} openArticle={this.openArticle} category="entertainment"/>} />
        <Route exact path = "/science" element={<Master key="science" search = {this.state.search} openArticle={this.openArticle}  category="science"/>} />
        <Route exact path = "/article" element={<Article title={this.state.title} author={this.state.author} publishedAt={this.state.publishedAt} image={this.state.urlToImage} content={this.state.content} url={this.state.url}/>}/>
      </Routes>
    </BrowserRouter>
    )
  }
}



