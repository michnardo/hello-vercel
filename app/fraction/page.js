'use client';

import { useState, useEffect } from 'react';

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
  const [feedback, setFeedback] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    setProblem(getRandomFraction());
  }, []);

  let question, correctAnswer, explanation;
  if (!problem) return null;
  if (problem.type === 'add') {
    question = `Add: ${fractionToString(problem.numer1, problem.denom1)} + ${fractionToString(problem.numer2, problem.denom2)} = ?`;
    const sum = addFractions(problem.numer1, problem.denom1, problem.numer2, problem.denom2);
    correctAnswer = `${sum.numer}/${sum.denom}`;
    explanation = `To add fractions, find a common denominator: ${problem.denom1} × ${problem.denom2} = ${problem.denom1 * problem.denom2}. Convert and add: (${problem.numer1}×${problem.denom2} + ${problem.numer2}×${problem.denom1}) = ${problem.numer1 * problem.denom2 + problem.numer2 * problem.denom1}. So the answer is ${sum.numer}/${sum.denom}.`;
  } else {
    question = `Which is greater: ${fractionToString(problem.numer1, problem.denom1)} or ${fractionToString(problem.numer2, problem.denom2)}? (Type 'first', 'second', or 'equal')`;
    const val1 = problem.numer1 / problem.denom1;
    const val2 = problem.numer2 / problem.denom2;
    if (val1 > val2) correctAnswer = 'first';
    else if (val2 > val1) correctAnswer = 'second';
    else correctAnswer = 'equal';
    explanation = `Compare by converting to decimals: ${problem.numer1}/${problem.denom1} = ${val1.toFixed(2)}, ${problem.numer2}/${problem.denom2} = ${val2.toFixed(2)}. So the answer is '${correctAnswer}'.`;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userAnswer.trim().toLowerCase() === correctAnswer.toString()) {
      setFeedback('✅ Correct! Great job!');
      setShowExplanation(false);
    } else {
      setFeedback(`❌ Oops! The correct answer is ${correctAnswer}.`);
      setShowExplanation(true);
    }
  };

  const handleNext = () => {
    setProblem(getRandomFraction());
    setUserAnswer('');
    setFeedback(null);
    setShowExplanation(false);
  };

  return (
    <main style={{ maxWidth: 500, margin: '2rem auto', padding: 24, border: '1px solid #eee', borderRadius: 12, background: '#fafcff', fontFamily: 'Arial' }}>
      <h2>Fractions Game</h2>
      <p>Solve the problem below:</p>
      <form onSubmit={handleSubmit} style={{ marginBottom: 16 }}>
        <label htmlFor="answer" style={{ fontSize: 20 }}>
          {question}
        </label>
        <input
          id="answer"
          type="text"
          value={userAnswer}
          onChange={e => setUserAnswer(e.target.value)}
          style={{ width: 120, fontSize: 20, marginLeft: 8, marginRight: 8 }}
          required
        />
        <button type="submit" style={{ fontSize: 16 }}>Check</button>
      </form>
      {feedback && <div style={{ marginBottom: 12, fontWeight: 'bold' }}>{feedback}</div>}
      {showExplanation && (
        <div style={{ background: '#f0f4ff', padding: 12, borderRadius: 8, marginBottom: 12 }}>
          <strong>Explanation:</strong><br />
          {explanation}
        </div>
      )}
      {(feedback || showExplanation) && (
        <button onClick={handleNext} style={{ fontSize: 16 }}>Try Another</button>
      )}
    </main>
  );
} 