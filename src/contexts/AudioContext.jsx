// contexts/AudioContext.jsx
import React, { createContext, useContext, useRef, useState, useEffect } from 'react';

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize audio only once
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/background.mp3');
      audioRef.current.volume = 1.0;
      audioRef.current.loop = true;
      setIsInitialized(true);
      
      // Start playing automatically
      setPlaying(true);
    }
  }, []);

  // Handle play/pause
  useEffect(() => {
    if (!audioRef.current || !isInitialized) return;

    if (playing) {
      audioRef.current.play().catch(err => console.warn("Play failed:", err));
    } else {
      audioRef.current.pause();
    }
  }, [playing, isInitialized]);

  const togglePlay = () => {
    setPlaying(prev => !prev);
  };

  return (
    <AudioContext.Provider value={{ playing, togglePlay }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within AudioProvider');
  }
  return context;
};