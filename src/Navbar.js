import React from 'react';
import { Link } from 'react-router-dom';
import logo from './image.png';
import "./App.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <a className="navbar-brand" href="#"> 
        <img src={logo} alt="ResumeParser-logo" className="navbar-logo" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/upload">
                Upload
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/search">
                Search
            </Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
