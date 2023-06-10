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
  
  let keywordList = [];

  //reads all keywords from file
  const data = fs.readFileSync('keywords.txt', 'utf8');
  //adds keywords to list
  keywordList = data.split('\n');

for(let i = 0; i < keywordList.length; i++)
{
  addResumeTOKeywords(word, "resume" + (i+1));
}
//to test
for(let word of keywordList)
{
  console.log(word);
}
}

export { addResumeTOKeywords, addResumeToCollection, ResumeUpdater };

