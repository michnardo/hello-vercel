'use client';

import { useState, useRef, useEffect } from 'react';
import styles from '../styles/SimpleGameLayout.module.css';
import AnswerForm from '../components/AnswerForm';

function getRandomQuestion() {
  const a = Math.floor(Math.random() * 11) + 2;
  const b = Math.floor(Math.random() * 11) + 2;
  return { a, b, answer: a * b };
}

export default function MultiplicationGame() {
  const [question, setQuestion] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [showNext, setShowNext] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    setQuestion(getRandomQuestion());
  }, []);

  const checkAnswer = () => {
    if (!question || showNext) return;
    if (parseInt(userAnswer, 10) === question.answer) {
      setFeedback('✅ Correct!');
      setScore(score + 1);
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
    <div className={styles.pageBg}>
      <main className={styles.container}>
        <div className={styles.scoreBox}>Score: {score}</div>
        <h1 className={styles.heading}>Multiplication Game</h1>
        <h2 className={styles.question}>{question.a} × {question.b} = ?</h2>
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