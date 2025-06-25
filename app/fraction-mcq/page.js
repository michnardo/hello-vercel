'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './FractionMCQ.module.css';

// Utility: GCD and LCM
function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }
function lcm(a, b) { return (a * b) / gcd(a, b); }

// Reduce a fraction
function reduceFraction(n, d) {
  const g = gcd(n, d);
  return [n / g, d / g];
}

// Generate two random fractions for addition
function getRandomFractionPair() {
  const denom1 = Math.floor(Math.random() * 10) + 2;
  const denom2 = Math.floor(Math.random() * 10) + 2;
  const numer1 = Math.floor(Math.random() * (denom1 - 1)) + 1;
  const numer2 = Math.floor(Math.random() * (denom2 - 1)) + 1;
  return [numer1, denom1, numer2, denom2];
}

// Add two fractions and reduce
function addFractions(n1, d1, n2, d2) {
  const common = lcm(d1, d2);
  const sum = n1 * (common / d1) + n2 * (common / d2);
  return reduceFraction(sum, common);
}

// Format as string
function fracStr(n, d) { return `${n}/${d}`; }

// Generate distractor options
function generateOptions(correctN, correctD) {
  const options = new Set();
  options.add(fracStr(correctN, correctD));
  while (options.size < 4) {
    // Randomly tweak numerator or denominator
    let n = correctN + Math.floor(Math.random() * 5) - 2;
    let d = correctD + Math.floor(Math.random() * 5) - 2;
    if (d < 2) d = 2;
    if (n < 1) n = 1;
    // Reduce
    const [rn, rd] = reduceFraction(n, d);
    const s = fracStr(rn, rd);
    if (s !== fracStr(correctN, correctD)) options.add(s);
  }
  return Array.from(options).sort(() => Math.random() - 0.5);
}

export default function FractionMCQ() {
  const [question, setQuestion] = useState(null);
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [flash, setFlash] = useState(false);
  const [timer, setTimer] = useState(5);
  const [timedOut, setTimedOut] = useState(false);
  const [stars, setStars] = useState(0);
  const intervalRef = useRef();
  const audioRef = useRef();

  // Load stars from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('fractionStars');
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
    localStorage.setItem('fractionStars', stars);
  }, [stars]);

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
    const [ansN, ansD] = addFractions(n1, d1, n2, d2);
    const answer = fracStr(ansN, ansD);
    setQuestion({ n1, d1, n2, d2, answer });
    setOptions(generateOptions(ansN, ansD));
    setSelected(null);
    setFeedback('');
    setFlash(false);
    setTimer(5);
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
        What is {question.n1}/{question.d1} + {question.n2}/{question.d2} ?
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
          className={styles.feedback}
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