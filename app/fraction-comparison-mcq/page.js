'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './FractionComparisonMCQ.module.css';
import useSoundEffects from '../../utils/useSoundEffects';
import animations from '../styles/animations.module.css';

// Utility: GCD and LCM
function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }
function lcm(a, b) { return (a * b) / gcd(a, b); }

// Reduce a fraction
function reduceFraction(n, d) {
  const g = gcd(n, d);
  return [n / g, d / g];
}

// Generate two random fractions for comparison
function getRandomFractionPair() {
  const denom1 = Math.floor(Math.random() * 10) + 2;
  const denom2 = Math.floor(Math.random() * 10) + 2;
  const numer1 = Math.floor(Math.random() * (denom1 - 1)) + 1;
  const numer2 = Math.floor(Math.random() * (denom2 - 1)) + 1;
  return [numer1, denom1, numer2, denom2];
}

// Compare two fractions and return the correct symbol
function compareFractions(n1, d1, n2, d2) {
  // Convert to decimals for comparison
  const val1 = n1 / d1;
  const val2 = n2 / d2;
  
  if (val1 < val2) return '<';
  if (val1 > val2) return '>';
  return '=';
}

// Format as string
function fracStr(n, d) { return `${n}/${d}`; }

// Generate comparison options
function generateOptions(correctSymbol) {
  const symbols = ['<', '>', '='];
  const options = new Set();
  options.add(correctSymbol);
  
  while (options.size < 3) {
    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
    if (randomSymbol !== correctSymbol) {
      options.add(randomSymbol);
    }
  }
  
  return Array.from(options).sort(() => Math.random() - 0.5);
}

export default function FractionComparisonMCQ() {
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
    const saved = localStorage.getItem('fractionComparisonStars');
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
    localStorage.setItem('fractionComparisonStars', stars);
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
    const [n1, d1, n2, d2] = getRandomFractionPair();
    const answer = compareFractions(n1, d1, n2, d2);
    setQuestion({ n1, d1, n2, d2, answer });
    setOptions(generateOptions(answer));
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
        Compare: {question.n1}/{question.d1} ? {question.n2}/{question.d2}
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