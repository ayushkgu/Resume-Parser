import React, { useState } from "react";
import storage from "./firebase";
import "./App.css";
import { Parse } from "./parser";
import { addResumeTOKeywords, addResumeToCollection } from "./firestoreRes";

function Upload() {
  const [image, setImage] = useState("");
  const [fileContents, setFileContents] = useState("");
  // Get handleParse and keywords from Parse
  const { handleParse, keywords } = Parse();

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
    const reader = new FileReader();
    reader.onload = function(event) {
      setFileContents(event.target.result);
    };
    reader.readAsText(e.target.files[0]);
  };

  const upload = () => {
    if (image === "") {
      alert("Please select a file to upload!");
      return;
    }
    console.log("we are passing this into handleParse: " + fileContents);
    handleParse(fileContents, image.name); // pass the contents of the file to your parse function
    // addResumeTOKeywords("java", image.name);
    console.log('resume name is ' + image.name);
    console.log(keywords);
    addResumeToCollection(image.name, "");
    storage
      .ref(`/images/${image.name}`)
      .put(image)
      .on("state_changed", alert("File succesfully uploaded!"), alert);
  };

  return (
    <div className="App">
      <div class="main">
        <div class="border">
          <div class="inner-cutout">
            <h1 className="site-title"> Resume Parser</h1>
            <h4 className="upload-directions">Choose a file to upload below </h4>
            <br /> <br />
            <input
              className="button"
              type="file"
              onChange={handleFileChange}
            />
            <button className="button" onClick={upload}>
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;
