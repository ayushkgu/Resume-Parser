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
  var urlLink = 'https://firebasestorage.googleapis.com/v0/b/resume-parser-a7584.appspot.com/o/images%2F' + resumeName + '?alt=media';
  await docRef.set(
    { 
      url: urlLink,
    },
    { merge: true }
  );
}

async function getKeywords(keyword) {
  const snapshot = await db.collection('keywords').get();
  return snapshot.docs.find(el=> el.id.includes(keyword));

  // const snapshot = await db.collection('keywords').where("id", "==", "java").get();

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

export { addResumeTOKeywords, addResumeToCollection, getKeywords, ResumeUpdater };

