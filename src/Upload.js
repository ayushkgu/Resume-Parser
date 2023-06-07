import React, { Component } from 'react';
import {useState} from 'react';
import storage from './firebase';
import "./App.css";

function Upload() {
    const [image , setImage] = useState('');
    const upload = ()=>{
      if(image == ''){
        alert("Please select a file to upload!");
        return;
      }
      storage.ref(`/images/${image.name}`).put(image)
      .on("state_changed" , alert("File succesfully uploaded!") , alert);
    }
      
      return (
        <div className="App">
          <h1> Resume-Parser</h1>
          <h4>Drag and drop a resume file here, or click to select a file </h4> 
          <input type="file" onChange={(e)=>{setImage(e.target.files[0])}}/>
          <button onClick={upload}>Upload</button>
        </div>
      );
    }
      
    export default Upload;