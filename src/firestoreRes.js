import { useEffect } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import firebaseConfig from "./firebaseConfig";


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

async function addResumeTOKeywords(keyword, resumeName) {
  const docRef = db.collection("keywords").doc(keyword);
  await docRef.set(
    {
      resumes: firebase.firestore.FieldValue.arrayUnion(resumeName),
    },
    { merge: true }
  );
  console.log(`Document updated`);
}

async function addResumeToCollection(resumeName, resumeLink) {
  const docRef = db.collection("resumes").doc(resumeName);
  await docRef.set(
    { 
      url: resumeLink,
    },
    { merge: true }
  );
}

function ResumeUpdater() {
  
    let keywordList = ["c++", "java", "react"];

    for (let word of keywordList) {
      console.log("word" + word);
      for (let i = 1; i <= 3; i++) {
        addResumeTOKeywords(word, "resume" + i);
      }
    }

    // addResumeToCollection("resume1", "johnny", "gdrive.com/resume1.pdf");
  
}

export { addResumeTOKeywords, addResumeToCollection, ResumeUpdater };

