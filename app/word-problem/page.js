'use client';

import { useState, useEffect } from 'react';
import styles from '../styles/SimpleGameLayout.module.css';
import AnswerForm from '../components/AnswerForm';

// Hard-coded sample word problems (addition/subtraction)
const WORD_PROBLEMS = [
  {
    text: 'Tom had 5 apples. He bought 3 more. How many apples does he have now?',
    answer: 8,
  },
  {
    text: 'Sara had 12 candies. She gave 4 to her friend. How many candies does she have left?',
    answer: 8,
  },
  {
    text: 'There are 15 birds on a tree. 6 fly away. How many are left?',
    answer: 9,
  },
  {
    text: 'A box has 7 pencils. You put 5 more pencils in. How many pencils are in the box now?',
    answer: 12,
  },
  {
    text: 'Mike read 10 pages on Monday and 7 pages on Tuesday. How many pages did he read in total?',
    answer: 17,
  },
  {
    text: 'There are 20 cookies. You eat 9 of them. How many cookies are left?',
    answer: 11,
  },
  {
    text: 'Anna has 14 marbles. She finds 2 more. How many marbles does she have now?',
    answer: 16,
  },
  {
    text: 'A basket has 18 oranges. 8 oranges are taken out. How many oranges remain?',
    answer: 10,
  },
];

function getRandomProblem() {
  return WORD_PROBLEMS[Math.floor(Math.random() * WORD_PROBLEMS.length)];
}

export default function WordProblemGame() {
  const [problem, setProblem] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [showNext, setShowNext] = useState(false);

  useEffect(() => {
    setProblem(getRandomProblem());
  }, []);

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
    setProblem(getRandomProblem());
    setUserAnswer('');
    setFeedback('');
    setShowNext(false);
  };

  if (!problem) return null; // or a loading spinner

  return (
    <div className={styles.pageBg}>
      <main className={styles.container}>
        <div className={styles.scoreBox}>Score: {score}</div>
        <h1 className={styles.heading}>Word Problem Game</h1>
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