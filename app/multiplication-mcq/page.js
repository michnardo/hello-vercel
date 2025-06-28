'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './MultiplicationMCQ.module.css';
import useSoundEffects from '../../utils/useSoundEffects';
import animations from '../styles/animations.module.css';

// Helper to determine difficulty level by stars
function getDifficultyByStars(stars) {
  if (stars >= 15) return 'extraHard';
  if (stars >= 10) return 'hard';
  if (stars >= 5) return 'medium';
  return 'easy';
}

// Generate a question based on difficulty
function getRandomMultiplicationQuestion(level) {
  let min, max;
  if (level === 'easy') { min = 1; max = 6; }
  else if (level === 'medium') { min = 1; max = 9; }
  else if (level === 'hard') { min = 1; max = 12; }
  else { min = 1; max = 19; }
  const a = Math.floor(Math.random() * (max - min + 1)) + min;
  const b = Math.floor(Math.random() * (max - min + 1)) + min;
  return { a, b, answer: a * b };
}

// Generate distractors based on difficulty
function generateOptions(correctAnswer, level) {
  const options = new Set();
  options.add(correctAnswer);
  let range = 20;
  if (level === 'medium') range = 5;
  if (level === 'hard' || level === 'extraHard') range = 2;
  while (options.size < 4) {
    let delta = Math.floor(Math.random() * (range * 2 + 1)) - range;
    if (delta === 0) continue;
    let distractor = correctAnswer + delta;
    if (distractor < 1 || options.has(distractor)) continue;
    options.add(distractor);
  }
  return Array.from(options).sort(() => Math.random() - 0.5);
}

export default function MultiplicationMCQ() {
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
    const saved = localStorage.getItem('multiplicationStars');
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
    localStorage.setItem('multiplicationStars', stars);
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
    const level = getDifficultyByStars(stars);
    const q = getRandomMultiplicationQuestion(level);
    setQuestion(q);
    setOptions(generateOptions(q.answer, level));
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
        What is {question.a} × {question.b} ?
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