import React, { Component } from 'react'
import "./articlecard.css"
import {Link} from "react-router-dom";
export default class Articlecard extends Component {
  
  render() {
    let {title, image} = this.props;
    return (
          <div className='card'>
              <div className='image'>
              <Link to='/article'>
                <img src={image?image:"https://cdn5.vectorstock.com/i/1000x1000/82/99/breaking-news-logo-template-vector-20608299.jpg"} alt='imageUrl'></img>
              </Link>               
              </div>
              <div className='description'>
                <h4>{title}</h4>
              </div>
          </div>
    )
  }
}
