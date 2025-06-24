'use client';

import { useState } from 'react';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateChoices(correct, range = 10) {
  const choices = new Set([correct]);
  while (choices.size < 4) {
    let distractor = correct + getRandomInt(-range, range);
    if (distractor === correct || distractor < 0) continue;
    choices.add(distractor);
  }
  // Shuffle choices
  return Array.from(choices).sort(() => Math.random() - 0.5);
}

function generateQuestion() {
  const a = getRandomInt(1, 20);
  const b = getRandomInt(1, 20);
  const correct = a + b;
  const choices = generateChoices(correct, 5);
  return { a, b, correct, choices };
}

export default function AdditionMCQ() {
  const [question, setQuestion] = useState(generateQuestion());
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState('');

  function handleChoice(choice) {
    if (selected !== null) return;
    setSelected(choice);
    setFeedback(choice === question.correct ? '✅ Correct!' : '❌ Incorrect');
  }

  function nextQuestion() {
    setQuestion(generateQuestion());
    setSelected(null);
    setFeedback('');
  }

  return (
    <main style={{ maxWidth: 400, margin: '2rem auto', padding: 24, border: '1px solid #eee', borderRadius: 12, background: '#fafcff', fontFamily: 'Arial' }}>
      <h2>Multiple-Choice Addition Quiz</h2>
      <p>What is {question.a} + {question.b}?</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 16 }}>
        {question.choices.map((choice, idx) => (
          <button
            key={idx}
            onClick={() => handleChoice(choice)}
            disabled={selected !== null}
            style={{
              fontSize: 18,
              padding: '0.5rem 1rem',
              background: selected === choice
                ? (choice === question.correct ? '#d4ffd4' : '#ffd4d4')
                : '#fff',
              border: '1px solid #ccc',
              borderRadius: 8,
              cursor: selected === null ? 'pointer' : 'default',
              fontWeight: selected === choice ? 'bold' : 'normal',
            }}
          >
            {choice}
          </button>
        ))}
      </div>
      {feedback && <div style={{ marginBottom: 12, fontWeight: 'bold' }}>{feedback}</div>}
      {selected !== null && (
        <button onClick={nextQuestion} style={{ fontSize: 16 }}>Next Question</button>
      )}
    </main>
  );
} 