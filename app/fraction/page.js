'use client';

import { useState, useEffect } from 'react';
import styles from '../styles/SimpleGameLayout.module.css';
import AnswerForm from '../components/AnswerForm';

function getRandomFraction() {
  // Generate two random fractions with denominators between 2 and 12
  const denom1 = Math.floor(Math.random() * 11) + 2;
  const denom2 = Math.floor(Math.random() * 11) + 2;
  const numer1 = Math.floor(Math.random() * (denom1 - 1)) + 1;
  const numer2 = Math.floor(Math.random() * (denom2 - 1)) + 1;
  // Randomly choose between addition and comparison
  const type = Math.random() < 0.5 ? 'add' : 'compare';
  return { numer1, denom1, numer2, denom2, type };
}

function fractionToString(n, d) {
  return `${n}/${d}`;
}

function addFractions(n1, d1, n2, d2) {
  const commonDenom = d1 * d2;
  const newNumer = n1 * d2 + n2 * d1;
  // Reduce fraction
  function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }
  const divisor = gcd(newNumer, commonDenom);
  return { numer: newNumer / divisor, denom: commonDenom / divisor };
}

export default function FractionsGame() {
  const [problem, setProblem] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [showNext, setShowNext] = useState(false);

  useEffect(() => {
    setProblem(getRandomFraction());
  }, []);

  let question, correctAnswer;
  if (!problem) return null;
  if (problem.type === 'add') {
    question = `Add: ${fractionToString(problem.numer1, problem.denom1)} + ${fractionToString(problem.numer2, problem.denom2)} = ?`;
    const sum = addFractions(problem.numer1, problem.denom1, problem.numer2, problem.denom2);
    correctAnswer = `${sum.numer}/${sum.denom}`;
  } else {
    question = `Which is greater: ${fractionToString(problem.numer1, problem.denom1)} or ${fractionToString(problem.numer2, problem.denom2)}? (Type 'first', 'second', or 'equal')`;
    const val1 = problem.numer1 / problem.denom1;
    const val2 = problem.numer2 / problem.denom2;
    if (val1 > val2) correctAnswer = 'first';
    else if (val2 > val1) correctAnswer = 'second';
    else correctAnswer = 'equal';
  }

  const checkAnswer = () => {
    if (!problem || showNext) return;
    if (userAnswer.trim().toLowerCase() === correctAnswer.toString()) {
      setFeedback('✅ Correct!');
      setScore(score + 1);
    } else {
      setFeedback(`❌ Oops! The answer was ${correctAnswer}`);
    }
    setShowNext(true);
  };

  const handleNext = () => {
    setProblem(getRandomFraction());
    setUserAnswer('');
    setFeedback('');
    setShowNext(false);
  };

  return (
    <div className={styles.pageBg}>
      <main className={styles.container}>
        <div className={styles.scoreBox}>Score: {score}</div>
        <h1 className={styles.heading}>Fractions Game</h1>
        <h2 className={styles.question}>{question}</h2>
        <AnswerForm
          userAnswer={userAnswer}
          setUserAnswer={setUserAnswer}
          onSubmit={checkAnswer}
          disabled={showNext}
          inputType={problem.type === 'add' ? 'text' : 'text'}
        />
        {(feedback || showNext) && (
          <div className={styles.feedbackBlock}>
            {feedback && (
              <div className={styles.feedbackText}>{feedback}</div>
            )}
            {showNext && (
              <button
                className={styles.nextButtonAligned}
                onClick={handleNext}
              >
                Next Question
              </button>
            )}
          </div>
        )}
      </main>
    </div>
  );
} 