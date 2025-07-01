'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './SubtractionMCQ.module.css';
import useSoundEffects from '../../utils/useSoundEffects';
import animations from '../styles/animations.module.css';

// Generate a subtraction question with numbers up to 20
function getRandomSubtractionQuestion() {
  const a = Math.floor(Math.random() * 20) + 1; // 1-20
  const b = Math.floor(Math.random() * 20) + 1; // 1-20
  
  // Ensure a >= b to avoid negative results
  const larger = Math.max(a, b);
  const smaller = Math.min(a, b);
  
  return { a: larger, b: smaller, answer: larger - smaller };
}

// Generate distractors for subtraction
function generateOptions(correctAnswer) {
  const options = new Set();
  options.add(correctAnswer);
  
  // Generate distractors that are numerically close
  while (options.size < 4) {
    let delta = Math.floor(Math.random() * 7) - 3; // random offset from -3 to +3
    if (delta === 0) continue; // skip if it's the same as correct answer
    
    let distractor = correctAnswer + delta;
    if (distractor >= 0 && !options.has(distractor)) { // ensure non-negative and unique
      options.add(distractor);
    }
  }
  
  return Array.from(options).sort(() => Math.random() - 0.5);
}

export default function SubtractionMCQ() {
  const [question, setQuestion] = useState(null);
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [flash, setFlash] = useState(false);
  const [timer, setTimer] = useState(10);
  const [timedOut, setTimedOut] = useState(false);
  const [stars, setStars] = useState(0);
  const intervalRef = useRef();
  const playSound = useSoundEffects();

  // Load stars from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('subtractionStars');
    if (saved) setStars(Number(saved));
    nextQuestion();
    // eslint-disable-next-line
  }, []);

  // Timer logic with setInterval
  useEffect(() => {
    if (selected !== null || timedOut) return;
    if (timer === 0) {
      setTimedOut(true);
      setFeedback('⏰ Time\'s up!');
      setFlash(true);
      playSound('timeout');
      return;
    }
    intervalRef.current = setInterval(() => {
      setTimer(t => t - 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [timer, selected, timedOut]);

  // Save stars to localStorage
  useEffect(() => {
    localStorage.setItem('subtractionStars', stars);
  }, [stars]);

  function handleChoice(opt) {
    if (selected !== null || timedOut) return;
    setSelected(opt);
    setFlash(true);
    if (opt === question.answer) {
      setFeedback('✅ Correct!');
      setStars(s => s + 1);
      playSound('correct');
    } else {
      setFeedback('❌ Incorrect');
      playSound('wrong');
    }
    setTimeout(() => setFlash(false), 600);
  }

  function nextQuestion() {
    const q = getRandomSubtractionQuestion();
    setQuestion(q);
    setOptions(generateOptions(q.answer));
    setSelected(null);
    setFeedback('');
    setFlash(false);
    setTimer(10);
    setTimedOut(false);
  }

  if (!question) return null;

  return (
    <main className={styles.container}>
      <div className={styles.star}>
        Your current stars: {stars} ⭐️
      </div>
      <div className={timer <= 2 ? `${styles.timer} ${styles.timerLow}` : styles.timer}>
        ⏳ {timer}s
      </div>
      <div className={styles.question}>
        What is {question.a} - {question.b} ?
      </div>
      <div className={styles.choices}>
        {options.map((opt, idx) => (
          <button
            key={idx}
            className={
              styles.choiceBtn +
              (selected === null
                ? ''
                : opt === question.answer
                ? ' ' + styles.correct
                : selected === opt
                ? ' ' + styles.incorrect
                : '')
            }
            onClick={() => handleChoice(opt)}
            disabled={selected !== null || timedOut}
          >
            {opt}
          </button>
        ))}
      </div>
      {feedback && (
        <div
          className={`${styles.feedback} ${animations.feedbackAnimated}`}
          style={{
            color: feedback.startsWith('✅')
              ? '#1ca91c'
              : feedback.startsWith('⏰')
              ? '#e2a13d'
              : '#e23d3d',
            animation: flash ? 'flash 0.6s' : 'none',
          }}
        >
          {feedback.startsWith('✅')
            ? '✅'
            : feedback.startsWith('⏰')
            ? '⏰'
            : '❌'}
        </div>
      )}
      {(selected !== null || timedOut) && (
        <button className={styles.nextBtn} onClick={nextQuestion}>
          Next Question
        </button>
      )}
    </main>
  );
} 