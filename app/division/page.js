'use client';

import { useState } from 'react';

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const answer = parseInt(userAnswer, 10);
    if (answer === problem.quotient) {
      setFeedback('✅ Correct! Great job!');
      setShowExplanation(false);
    } else {
      setFeedback(`❌ Oops! The correct answer is ${problem.quotient}.`);
      setShowExplanation(true);
    }
  };

  const handleNext = () => {
    setProblem(getRandomDivision());
    setUserAnswer('');
    setFeedback(null);
    setShowExplanation(false);
  };

  return (
    <main style={{ maxWidth: 400, margin: '2rem auto', padding: 24, border: '1px solid #eee', borderRadius: 12, background: '#fafcff', fontFamily: 'Arial' }}>
      <h2>Division Game</h2>
      <p>Solve the problem below:</p>
      <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
        <label htmlFor="answer" style={{ fontSize: 20 }}>
          {problem.dividend} ÷ {problem.divisor} ={' '}
        </label>
        <input
          id="answer"
          type="number"
          value={userAnswer}
          onChange={e => setUserAnswer(e.target.value)}
          style={{ width: 60, fontSize: 20, marginRight: 8 }}
          required
        />
        <button type="submit" style={{ fontSize: 16 }}>Check</button>
      </form>
      {feedback && <div style={{ marginBottom: 12, fontWeight: 'bold' }}>{feedback}</div>}
      {showExplanation && (
        <div style={{ background: '#f0f4ff', padding: 12, borderRadius: 8, marginBottom: 12 }}>
          <strong>Explanation:</strong><br />
          {problem.dividend} divided by {problem.divisor} means: how many groups of {problem.divisor} are in {problem.dividend}?<br />
          The answer is {problem.quotient}, because {problem.divisor} × {problem.quotient} = {problem.dividend}.
        </div>
      )}
      {(feedback || showExplanation) && (
        <button onClick={handleNext} style={{ fontSize: 16 }}>Try Another</button>
      )}
    </main>
  );
} 