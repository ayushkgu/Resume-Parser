import React, { Component } from 'react';
import {useState} from 'react';
import storage from './firebase';
import Navbar from './Navbar';
import "./App.css";
import {ref} from "firebase/storage"
import { useRef } from 'react';
import Upload from './Upload';

function Search() {
    const [searchQuery, setSearchQuery] = useState('');
  
    const handleInputChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Search query:', searchQuery);
      // Reset the search query
      setSearchQuery('');
    };
  
    return (
      <div className="App content">
        <br /> <br />
        <h1 className = "search-directions">Enter keywords to parse resume: </h1>
        <br/>
        <form onSubmit={handleSubmit}>
          <input
            className="searchbar"
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder="Type here!"
          />
          <button className = "button" type="submit">Search</button>
        </form>
      </div>
    );
  }
  
export default Search;
