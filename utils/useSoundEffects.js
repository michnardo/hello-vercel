import { useRef } from 'react';

export default function useSoundEffects() {
  const audioRef = useRef();

  function playSound(type) {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    let src = '';
    if (type === 'correct') src = '/correct.wav';
    else if (type === 'wrong') src = '/wrong.wav';
    else if (type === 'timeout') src = '/timeout.wav';
    audioRef.current = new Audio(src);
    audioRef.current.play();
  }

  return playSound;
} 