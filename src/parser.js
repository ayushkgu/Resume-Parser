import { useState, useEffect } from 'react';
import { addResumeTOKeywords } from './firestoreRes';

export const Parse = () => {
  const [keywords, setKeywords] = useState(new Map());
  const [resumeName, setResumeName] = useState('');
  const [linesArray, setLinesArray] = useState([]);

    async function initKeyWords() {
      const response = await fetch('keywords.txt');
      const text = await response.text();
      const lines = text.split('\n');

      let newMap = new Map();

      lines.forEach(word => {
        const wordx = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase();
        newMap.set(wordx, 0);
      });

      return newMap;
  };
  

  const checkRes = (resume) => {
    let resumeSplit = resume.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase().split(/\s+/);
    resumeSplit.forEach(word => {
      if (keywords.get(word) !== undefined) {
        setKeywords((prev) => new Map(prev.set(word, prev.get(word) + 1)));
      }
    });
  }

  const handleParse = (newResumeName, resName) => {
    setResumeName(resName);
    initKeyWords()
    .then(function(result) {
      console.log(result);
      setKeywords(result); 
    });
    
    checkRes(newResumeName);
  }

  useEffect(() => {
    console.log("This is map: ", keywords);
    keywords.forEach((value, key) => {
      if (value > 0) {
        addResumeTOKeywords(key, resumeName);
      }
    });
    console.log('Done for loop');
  }, [keywords, resumeName]);

  return { handleParse, keywords, resumeName };
}
