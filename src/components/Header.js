import React, { Component } from "react";
import './../App.css';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                HOME
              </a>
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
              
                <li><a href="#">Link</a></li>
              
              </ul>
            </div>
          </nav>
        );
    }
}

export default Header;