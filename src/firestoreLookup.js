import firebase from "firebase/app";
import "firebase/firestore";
import firebaseConfig from "./firebaseConfig";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

// export function getResumesForKeyword(keyword) {
//     db.collection("keywords").doc(keyword).get()
//         .then(doc => {
//             if (doc.exists) {
//                 console.log(doc.data()["resumes"]);
//                 return doc.data()["resumes"];
//             } else {
//                 console.log("No such document!");
//             }
//         })
//         .catch(error => {
//             console.error("Error getting document:", error);
//         });
// }
export async function getResumesForKeyword(keyword) {
    try {
        const doc = await db.collection("keywords").doc(keyword).get();
        if (doc.exists) {
            return doc.data()["resumes"]; // return the data here
        } else {
            console.log("No such document!");
            return null;
        }
    } catch (error) {
        console.error("Error getting document:", error);
        return null;
    }
  }
  
export async function getResumeKeywords(keywords)
{
    let keywordArr = keywords.split(",");
    console.log("keyword arr is " + keywordArr);
    let allResumes = [];
    for(let keyword of keywordArr)
    {
        let resumes = await getResumesForKeyword(keyword.toLowerCase().trim());
        if(resumes !== null)
{        for(let resume of resumes)
        {
            if(allResumes.includes(resume) === false)
            {
                allResumes.push(resume);
            }
        }}
    }
    return allResumes;
}


export default {getResumesForKeyword, getResumeKeywords}
