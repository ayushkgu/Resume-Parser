import React, { Component } from 'react';
import {useState} from 'react';
import storage from './firebase';
import Navbar from './Navbar';
import "./App.css";
import {ref} from "firebase/storage"
import { useRef } from 'react';
import Upload from './Upload';

function Search() {
    return (
        <div className="App">
         <h1>Search Component is working!</h1>
        </div>
    );
}
  
export default Search;


