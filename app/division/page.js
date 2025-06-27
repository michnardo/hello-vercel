'use client';

import { useState } from 'react';
import styles from '../styles/SimpleGameLayout.module.css';
import AnswerForm from '../components/AnswerForm';

function getRandomDivision() {
  // Divisor between 2 and 12, quotient between 2 and 12
  const divisor = Math.floor(Math.random() * 11) + 2;
  const quotient = Math.floor(Math.random() * 11) + 2;
  const dividend = divisor * quotient;
  return { dividend, divisor, quotient };
}

export default function DivisionGame() {
  const [problem, setProblem] = useState(getRandomDivision());
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [showNext, setShowNext] = useState(false);

  const checkAnswer = () => {
    if (!problem || showNext) return;
    const answer = parseInt(userAnswer, 10);
    if (answer === problem.quotient) {
      setFeedback('✅ Correct!');
      setScore(score + 1);
    } else {
      setFeedback(`❌ Oops! The answer was ${problem.quotient}`);
    }
    setShowNext(true);
  };

  const handleNext = () => {
    setProblem(getRandomDivision());
    setUserAnswer('');
    setFeedback('');
    setShowNext(false);
  };

  return (
    <div className={styles.pageBg}>
      <main className={styles.container}>
        <div className={styles.scoreBox}>Score: {score}</div>
        <h1 className={styles.heading}>Division Game</h1>
        <h2 className={styles.question}>{problem.dividend} ÷ {problem.divisor} = ?</h2>
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