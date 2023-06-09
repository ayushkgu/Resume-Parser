import { useState, useEffect } from 'react';
import { addResumeTOKeywords } from './firestoreRes';

export const Parse = () => {
  const [keywords, setKeywords] = useState(new Map());
  const [resumeName, setResumeName] = useState('');

  const initKeyWords = () => {
    const keyWordArray = ["c++", "java", "react", "python", "sql"];
    let newMap = new Map();

    keyWordArray.forEach(word => {
      const wordx = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase();
      newMap.set(wordx, 0);
    });

    setKeywords(newMap);
  }

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
    initKeyWords();
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
