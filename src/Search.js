import React, { Component } from 'react';
import {useState} from 'react';
import storage from './firebase';
import Navbar from './Navbar';
import "./App.css";
import {ref} from "firebase/storage"
import { useRef } from 'react';
import Upload from './Upload';
import Table from './Table';
import {getResumesForKeyword, getResumeKeywords} from "./firestoreLookup"

function Search() {
    const [searchQuery, setSearchQuery] = useState('');
    const [dataTable, setDataTable] = useState([]);
    const handleInputChange = (event) => {
      setSearchQuery(event.target.value);
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log('Search query:', searchQuery);
    
      // Reset the search query
      // firestore code to lookup relevant resumes goes here
      const data = await getResumeKeywords(searchQuery);
      setDataTable(data);
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
        <Table data={dataTable}></Table>
      </div>
    );
  }
  
export default Search;
