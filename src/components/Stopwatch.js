import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase'; // Import the configured Firestore instance
import { doc, onSnapshot, setDoc } from 'firebase/firestore';

const Stopwatch = ({ name, dbName }) => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timeDocRef = doc(firestore, `stopwatches/${dbName}`);

    const unsubscribe = onSnapshot(timeDocRef, (doc) => {
      if (doc.exists()) {
        setTime(doc.data().time);
      }
    });

    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          const newTime = prevTime + 10;
          setDoc(timeDocRef, { time: newTime });
          return newTime;
        });
      }, 10);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
      unsubscribe(); // Clean up the Firestore listener
    };
  }, [isActive, dbName, time]);

  const handleStartPause = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    const timeDocRef = doc(firestore, `stopwatches/${dbName}`);
    setDoc(timeDocRef, { time: 0 });
    setTime(0);
    setIsActive(false);
  };

  const formatTime = (time) => {
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 60000) % 60);
    const hours = Math.floor((time / 3600000) % 24);

    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div>
      <h1>{name}</h1>
      <h2>{formatTime(time)}</h2>
      <button onClick={handleStartPause}>
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Stopwatch;
