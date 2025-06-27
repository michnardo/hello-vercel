'use client';

import { useState } from 'react';
import styles from '../styles/SimpleGameLayout.module.css';

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
  const [feedback, setFeedback] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [showNext, setShowNext] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const answer = parseInt(userAnswer, 10);
    if (answer === problem.quotient) {
      setFeedback('✅ Correct!');
      setScore(score + 1);
      setShowExplanation(false);
    } else {
      setFeedback(`❌ Oops! The answer was ${problem.quotient}`);
      setShowExplanation(true);
    }
    setShowNext(true);
  };

  const handleNext = () => {
    setProblem(getRandomDivision());
    setUserAnswer('');
    setFeedback(null);
    setShowExplanation(false);
    setShowNext(false);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', background: '#fff', paddingTop: 48 }}>
      <main className={styles.container}>
        <div className={styles.scoreBox}>Score: {score}</div>
        <h1 className={styles.heading} style={{ marginTop: '8px' }}>Division Game</h1>
        <h2 className={styles.question}>{problem.dividend} ÷ {problem.divisor} = ?</h2>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <input
            id="answer"
            type="number"
            value={userAnswer}
            onChange={e => setUserAnswer(e.target.value)}
            className={styles.input}
            disabled={showNext}
            required
          />
          <button
            onClick={handleSubmit}
            className={`${styles.button} ${showNext ? styles.disabledButton : ''}`}
            disabled={showNext}
            style={{ width: 160, marginBottom: '16px' }}
          >
            Submit
          </button>
        </div>
        {(feedback || showNext) && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            {feedback && (
              <div className={styles.feedbackText} style={{ textAlign: 'center', marginBottom: '12px' }}>
                {feedback}
              </div>
            )}
            {showExplanation && (
              <div style={{ background: '#f0f4ff', padding: 12, borderRadius: 8, marginBottom: 12, textAlign: 'center', maxWidth: 320 }}>
                <strong>Explanation:</strong><br />
                {problem.dividend} divided by {problem.divisor} means: how many groups of {problem.divisor} are in {problem.dividend}?<br />
                The answer is {problem.quotient}, because {problem.divisor} × {problem.quotient} = {problem.dividend}.
              </div>
            )}
            {showNext && (
              <button
                className={styles.nextButtonAligned}
                onClick={handleNext}
                style={{ width: 160 }}
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