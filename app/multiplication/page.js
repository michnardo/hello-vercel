'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './MultiplicationGame.module.css';

function getRandomQuestion() {
  const a = Math.floor(Math.random() * 11) + 2;
  const b = Math.floor(Math.random() * 11) + 2;
  return { a, b, answer: a * b };
}

export default function MultiplicationGame() {
  const [question, setQuestion] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showNext, setShowNext] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    setQuestion(getRandomQuestion());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (showNext) return;
    if (parseInt(userAnswer, 10) === question.answer) {
      setFeedback('✅ Correct!');
    } else {
      setFeedback(`❌ Oops! The answer was ${question.answer}`);
    }
    setShowNext(true);
  };

  const handleNext = () => {
    setQuestion(getRandomQuestion());
    setUserAnswer('');
    setFeedback('');
    setShowNext(false);
    inputRef.current && inputRef.current.focus();
  };

  if (!question) return null;

  return (
    <main className={styles.container}>
      <h2 className={styles.heading}>Multiplication Game</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="answer" className={styles.label}>
          {question.a} × {question.b} = ?
        </label>
        <input
          id="answer"
          type="number"
          className={styles.input}
          value={userAnswer}
          onChange={e => setUserAnswer(e.target.value)}
          ref={inputRef}
          autoFocus
          disabled={showNext}
          onKeyDown={e => {
            if (e.key === 'Enter') handleSubmit(e);
          }}
        />
        <button type="submit" className={styles.button} disabled={showNext}>
          Submit
        </button>
      </form>
      {(feedback || showNext) && (
        <div className={styles.feedbackRow}>
          <div className={styles.feedback}>{feedback}</div>
          {showNext && (
            <button className={styles.nextBtn} onClick={handleNext}>
              Next Question
            </button>
          )}
        </div>
      )}
    </main>
  );
} 