'use client';

import { useState, useEffect, useRef } from 'react';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateChoices(correct) {
  const options = new Set();
  options.add(correct);
  while (options.size < 4) {
    let wrong = correct + Math.floor(Math.random() * 11) - 5; // random offset from -5 to +5
    if (wrong !== correct && wrong >= 0) {
      options.add(wrong);
    }
  }
  // Shuffle the options
  return Array.from(options).sort(() => Math.random() - 0.5);
}

function generateQuestion() {
  const a = getRandomInt(1, 20);
  const b = getRandomInt(1, 20);
  const correct = a + b;
  const choices = generateChoices(correct);
  return { a, b, correct, choices };
}

// Animation keyframes as a style tag (for flash effect)
const flashStyle = `
@keyframes flash {
  0% { opacity: 1; transform: scale(1); }
  30% { opacity: 0.2; transform: scale(1.4); }
  60% { opacity: 1; transform: scale(1); }
  100% { opacity: 1; transform: scale(1); }
}`;

export default function AdditionMCQ() {
  const [question, setQuestion] = useState(null);
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [stars, setStars] = useState(0);
  const [flash, setFlash] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    setQuestion(generateQuestion());
  }, []);

  function playSound(type) {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    const src = type === 'correct' ? '/correct.wav' : '/wrong.wav';
    audioRef.current = new Audio(src);
    audioRef.current.play();
  }

  function handleChoice(choice) {
    if (selected !== null) return;
    setSelected(choice);
    setFlash(true);
    if (choice === question.correct) {
      setFeedback('✅ Correct!');
      setStars(stars + 1);
      playSound('correct');
    } else {
      setFeedback('❌ Incorrect');
      playSound('wrong');
    }
    setTimeout(() => setFlash(false), 600);
  }

  function nextQuestion() {
    setQuestion(generateQuestion());
    setSelected(null);
    setFeedback('');
    setFlash(false);
  }

  if (!question) return null;

  return (
    <>
      <style>{flashStyle}</style>
      <main style={{ maxWidth: 400, margin: '2rem auto', padding: 24, paddingTop: 56, border: '1px solid #eee', borderRadius: 12, background: '#fafcff', fontFamily: 'Arial', position: 'relative' }}>
        {/* Star display in top-right corner */}
        <div style={{ position: 'absolute', top: 16, right: 24, fontSize: 18, fontWeight: 'bold', background: '#fffbe7', padding: '4px 12px', borderRadius: 16, border: '1px solid #ffe066', boxShadow: '0 1px 4px #ffe06633' }}>
          Your current stars: {stars} ⭐️
        </div>
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
        {feedback && (
          <div
            style={{
              marginBottom: 12,
              fontWeight: 'bold',
              fontSize: 28,
              textAlign: 'center',
              color: feedback.startsWith('✅') ? '#1ca91c' : '#e23d3d',
              animation: flash ? 'flash 0.6s' : 'none',
              display: 'inline-block',
              minWidth: 120,
            }}
          >
            {feedback.startsWith('✅') ? '✅' : '❌'}
          </div>
        )}
        {selected !== null && (
          <button onClick={nextQuestion} style={{ fontSize: 16 }}>Next Question</button>
        )}
      </main>
    </>
  );
} 