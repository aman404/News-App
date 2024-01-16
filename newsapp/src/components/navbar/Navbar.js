import React, { Component } from 'react'
import './navbar.css'
import { Link } from "react-router-dom";

export default class navbar extends Component {

  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.home = this.home.bind(this);
  }

  home() {
    this.props.home();
  }

  handleChange(event) { this.setState({ value: event.target.value }); }
  handleSubmit(event) {
    this.props.func(this.state.value);
    event.preventDefault();
  }


  render() {
    return (
      <div className='navbar'>
        <div className='left'>

          <h3><Link className="home" to="/">News App</Link></h3>
          <ul>
            <li><Link className="links" to="/business">Business</Link></li>
            <li><Link className="links" to="/sports">Sports</Link></li>
            <li><Link className="links" to="/technology">Technology</Link></li>
            <li><Link className="links" to="/entertainment">Entertainment</Link></li>
            <li><Link className="links" to="/science">Science</Link></li>
          </ul>
        </div>
        
        <form onSubmit={this.handleSubmit} className='search'>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <button type='submit'>Search</button>
        </form>
      </div>
    )
  }
}
