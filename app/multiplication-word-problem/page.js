'use client';

import { useState } from 'react';
import styles from '../styles/SimpleGameLayout.module.css';
import AnswerForm from '../components/AnswerForm';

// Helper to generate a random integer between min and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate a random multiplication word problem
function generateMultiplicationWordProblem() {
  // Try to keep product <= 100
  let a, b;
  do {
    a = getRandomInt(2, 12);
    b = getRandomInt(2, 12);
  } while (a * b > 100);

  // Randomly choose a template
  const templates = [
    `There are ${a} baskets. Each basket has ${b} apples. How many apples in total?`,
    `A pack has ${a} markers. How many markers are there in ${b} packs?`,
    `Each box contains ${a} pencils. If you have ${b} boxes, how many pencils do you have?`,
    `A classroom has ${a} rows of desks. Each row has ${b} desks. How many desks in total?`,
    `There are ${a} shelves. Each shelf holds ${b} books. How many books are there altogether?`,
    `A bag contains ${a} marbles. How many marbles are in ${b} bags?`,
    `Each child gets ${a} stickers. If there are ${b} children, how many stickers are needed?`,
    `A gardener plants ${a} flowers in each row. There are ${b} rows. How many flowers in total?`,
  ];
  const text = templates[getRandomInt(0, templates.length - 1)];
  return { text, answer: a * b };
}

export default function MultiplicationWordProblemGame() {
  const [problem, setProblem] = useState(generateMultiplicationWordProblem());
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [showNext, setShowNext] = useState(false);

  const checkAnswer = () => {
    if (showNext) return;
    if (parseInt(userAnswer) === problem.answer) {
      setFeedback('✅ Correct!');
      setScore(score + 1);
    } else {
      setFeedback(`❌ Oops! The answer was ${problem.answer}`);
    }
    setShowNext(true);
  };

  const handleNext = () => {
    setProblem(generateMultiplicationWordProblem());
    setUserAnswer('');
    setFeedback('');
    setShowNext(false);
  };

  return (
    <div className={styles.pageBg}>
      <main className={styles.container}>
        <div className={styles.scoreBox}>Score: {score}</div>
        <h1 className={styles.heading}>Multiplication Word Problem Game</h1>
        <h2 className={styles.question} style={{ fontWeight: 400, fontSize: '1.2rem', marginBottom: 24 }}>{problem.text}</h2>
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