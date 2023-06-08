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
          <div class="main">
            <div class = "border">
              <div class = "inner-cutout"> 
          <h1 className = "site-title"> Resume Parser</h1>
          <h4 className = "upload-directions">Choose a file to upload below </h4>
          <br/> <br/> 
          <input className = "button" type="file" onChange={(e)=>{setImage(e.target.files[0])}}/>
          <button className = "button" onClick={upload}>Upload</button>
        </div>
        </div>
        </div>
        </div>
      );
    }
      
    export default Upload;