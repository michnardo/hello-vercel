'use client';

import { useState, useEffect } from 'react';
import styles from '../styles/SimpleGameLayout.module.css';
import AnswerForm from '../components/AnswerForm';

function generateQuestion() {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  return { a, b, op: '+', answer: a + b };
}

export default function AdditionGame() {
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
        <h1 className={styles.heading}>Addition Game</h1>
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
