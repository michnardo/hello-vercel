'use client';

import { useState, useEffect } from 'react';

function generateQuestion() {
  const a = Math.floor(Math.random() * 10) + 1;
  const b = Math.floor(Math.random() * 10) + 1;
  const operators = ['+', '-', '×'];
  const op = operators[Math.floor(Math.random() * operators.length)];

  let answer;
  switch (op) {
    case '+': answer = a + b; break;
    case '-': answer = a - b; break;
    case '×': answer = a * b; break;
  }

  return { a, b, op, answer };
}

export default function AdditionGame() {
  const [question, setQuestion] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);

  useEffect(() => {
    setQuestion(generateQuestion());
  }, []);

  const checkAnswer = () => {
    if (!question) return;

    if (parseInt(userAnswer) === question.answer) {
      setFeedback('✅ Correct!');
      setScore(score + 1);
    } else {
      setFeedback(`❌ Oops! The answer was ${question.answer}`);
    }

    setTimeout(() => {
      setQuestion(generateQuestion());
      setUserAnswer('');
      setFeedback('');
    }, 1500);
  };

  if (!question) return <p>Loading question...</p>;

  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>🧠 4th Grade Addition Game for Chloe</h1>
      <p>Score: {score}</p>
      <h2>{question.a} {question.op} {question.b} = ?</h2>
      <input
        type="number"
        value={userAnswer}
        onChange={(e) => setUserAnswer(e.target.value)}
        style={{ marginRight: '1rem' }}
      />
      <button onClick={checkAnswer}>Submit</button>
      <p style={{ marginTop: '1rem' }}>{feedback}</p>
    </main>
  );
}
