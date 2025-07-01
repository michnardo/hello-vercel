'use client';

import { useState, useEffect } from 'react';
import styles from '../styles/SimpleGameLayout.module.css';
import AnswerForm from '../components/AnswerForm';

function generateQuestion() {
  // Generate 2-digit numbers for subtraction
  const a = Math.floor(Math.random() * 90) + 10; // 10-99
  const b = Math.floor(Math.random() * 90) + 10; // 10-99
  
  // Ensure a >= b to avoid negative answers
  const larger = Math.max(a, b);
  const smaller = Math.min(a, b);
  
  return { 
    a: larger, 
    b: smaller, 
    op: '-', 
    answer: larger - smaller 
  };
}

export default function SubtractionGame() {
  const [question, setQuestion] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [showNext, setShowNext] = useState(false);

  useEffect(() => {
    setQuestion(generateQuestion());
  }, []);

  const checkAnswer = () => {
    if (!question || showNext) return;

    if (parseInt(userAnswer) === question.answer) {
      setFeedback('✅ Correct!');
      setScore(score + 1);
    } else {
      setFeedback(`❌ Oops! The answer was ${question.answer}`);
    }
    setShowNext(true);
  };

  const handleNext = () => {
    setQuestion(generateQuestion());
    setUserAnswer('');
    setFeedback('');
    setShowNext(false);
  };

  if (!question) return <p>Loading question...</p>;

  return (
    <div className={styles.pageBg}>
      <main className={styles.container}>
        <div className={styles.scoreBox}>Score: {score}</div>
        <h1 className={styles.heading}>Subtraction Game</h1>
        <h2 className={styles.question}>{question.a} {question.op} {question.b} = ?</h2>
        <AnswerForm
          userAnswer={userAnswer}
          setUserAnswer={setUserAnswer}
          onSubmit={checkAnswer}
          disabled={showNext}
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