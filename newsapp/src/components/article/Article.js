import React, { Component } from 'react'
import './article.css'

export default class article extends Component {
  
  render() {
    return (
      <div className='articleContainer'>
      <div className='article'>
        <h2>{this.props.title}</h2>
        <span>Author: {this.props.author}</span>
        <span>Date: {this.props.publishedAt}</span>
        <img src={this.props.image} alt=''></img>
        <p>
        {this.props.content?this.props.content.substr(0,200):""}<a href={this.props.url} target="_blank">. . . .Read More</a>
        </p>
      </div>
      </div>
    )
  }
}
