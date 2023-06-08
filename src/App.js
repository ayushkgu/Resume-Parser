import React, { Component } from 'react';
import {useState} from 'react';
import storage from './firebase';
import Navbar from './Navbar';
import "./App.css";
import {ref} from "firebase/storage"
import { useRef } from 'react';
import Upload from './Upload';
import Search from './Search';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/Upload" />} />
        <Route path="/Upload" element={<Upload />}></Route>
        <Route path="/Search" element={<Search />}></Route>
      </Routes>
    </Router>
  );
};
  
export default App;



