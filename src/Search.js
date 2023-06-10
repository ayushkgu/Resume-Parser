import React, { Component } from 'react';
import {useState} from 'react';
import storage from './firebase';
import Navbar from './Navbar';
import "./App.css";
import {ref} from "firebase/storage"
import { useRef } from 'react';
import Upload from './Upload';
import { getKeywords} from "./firestoreRes";


function Search() {
    var keyword;
    var arrayDataItems = "<li key='1'>'Hello'</li>";
    
    const [searchQuery, setSearchQuery] = useState('');
    const handleInputChange = (event) => {
      setSearchQuery(event.target.value);
    };

    const searchKeyword = () => {
      getKeywords(searchQuery)
      .then(function(result) {
        console.log(result); 

        /* Mapping the courses into a new array of JSX nodes as arrayDataItems */
        // arrayDataItems = result.data().resumes.map((el) => <li key={el}>{el}</li>);
        arrayDataItems = "<li key='2'>'Hello2'</li>";
        //const arrayDataItems = result.data().resumes.map((el) => <li>{el}</li>)
      });
      }
  
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
          <button className = "button" onClick={searchKeyword} type="submit">Search</button>

          <br></br>

          <div>
            <div>
              <h1>Render List/Array of Items</h1>
            </div>
            <ul>{arrayDataItems}</ul>
          </div>

        </form>
      </div>
    );
  }
  
export default Search;


