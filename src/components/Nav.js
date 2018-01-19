import React, { Component } from 'react';
import logo from '../images/logo-green.png'

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md fixed-top navbar-dark navigation ">
       <img src={logo} alt=""  style={{"height": "50px"}} className="img-fluid float-left"/>
        <a className="navbar-brand" href="#">Pine Street Dental</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Location</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">864-582-5000</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
