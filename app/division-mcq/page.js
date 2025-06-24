'use client';

import { useState, useEffect, useRef } from 'react';

function getRandomDivision() {
  // Divisor between 2 and 12, quotient between 2 and 12
  const divisor = Math.floor(Math.random() * 11) + 2;
  const quotient = Math.floor(Math.random() * 11) + 2;
  const dividend = divisor * quotient;
  return { dividend, divisor, quotient };
}

function generateChoices(correct) {
  const options = new Set();
  options.add(correct);
  while (options.size < 4) {
    let wrong = correct + Math.floor(Math.random() * 11) - 5;
    if (wrong !== correct && wrong > 0) {
      options.add(wrong);
    }
  }
  return Array.from(options).sort(() => Math.random() - 0.5);
}

const flashStyle = `
@keyframes flash {
  0% { opacity: 1; transform: scale(1); }
  30% { opacity: 0.2; transform: scale(1.4); }
  60% { opacity: 1; transform: scale(1); }
  100% { opacity: 1; transform: scale(1); }
}`;

export default function DivisionMCQ() {
  const [question, setQuestion] = useState(null);
  const [choices, setChoices] = useState([]);
  const [selected, setSelected] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [stars, setStars] = useState(0);
  const [flash, setFlash] = useState(false);
  const [timer, setTimer] = useState(5);
  const [timedOut, setTimedOut] = useState(false);
  const audioRef = useRef(null);
  const timerRef = useRef();

  useEffect(() => {
    const q = getRandomDivision();
    setQuestion(q);
    setChoices(generateChoices(q.quotient));
    setSelected(null);
    setFeedback('');
    setFlash(false);
    setTimer(5);
    setTimedOut(false);
  }, []);

  useEffect(() => {
    if (selected !== null || timedOut) return;
    if (timer === 0) {
      setTimedOut(true);
      setFeedback('⏰ Time\'s up!');
      setFlash(true);
      playSound('timeout');
      return;
    }
    timerRef.current = setTimeout(() => setTimer(timer - 1), 1000);
    return () => clearTimeout(timerRef.current);
  }, [timer, selected, timedOut]);

  function playSound(type) {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    let src = '';
    if (type === 'correct') src = '/correct.wav';
    else if (type === 'wrong') src = '/wrong.wav';
    else if (type === 'timeout') src = '/timeout.wav';
    audioRef.current = new Audio(src);
    audioRef.current.play();
  }

  function handleChoice(choice) {
    if (selected !== null || timedOut) return;
    setSelected(choice);
    setFlash(true);
    if (choice === question.quotient) {
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
    const q = getRandomDivision();
    setQuestion(q);
    setChoices(generateChoices(q.quotient));
    setSelected(null);
    setFeedback('');
    setFlash(false);
    setTimer(5);
    setTimedOut(false);
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
        {/* Timer display in top-left corner */}
        <div style={{ position: 'absolute', top: 16, left: 24, fontSize: 18, fontWeight: 'bold', background: '#e7f3ff', padding: '4px 12px', borderRadius: 16, border: '1px solid #66b3ff', boxShadow: '0 1px 4px #66b3ff33', color: timer <= 2 ? '#e23d3d' : '#1a5fb4' }}>
          ⏳ {timer}s
        </div>
        <h2>Division MCQ Challenge</h2>
        <p>What is {question.dividend} ÷ {question.divisor}?</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 16 }}>
          {choices.map((choice, idx) => (
            <button
              key={idx}
              onClick={() => handleChoice(choice)}
              disabled={selected !== null || timedOut}
              style={{
                fontSize: 18,
                padding: '0.5rem 1rem',
                background: selected === choice
                  ? (choice === question.quotient ? '#d4ffd4' : '#ffd4d4')
                  : '#fff',
                border: '1px solid #ccc',
                borderRadius: 8,
                cursor: selected === null && !timedOut ? 'pointer' : 'default',
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
              color: feedback.startsWith('✅') ? '#1ca91c' : (feedback.startsWith('⏰') ? '#e2a13d' : '#e23d3d'),
              animation: flash ? 'flash 0.6s' : 'none',
              display: 'inline-block',
              minWidth: 120,
            }}
          >
            {feedback.startsWith('✅') ? '✅' : feedback.startsWith('⏰') ? '⏰' : '❌'}
          </div>
        )}
        {(selected !== null || timedOut) && (
          <button onClick={nextQuestion} style={{ fontSize: 16 }}>Next Question</button>
        )}
      </main>
    </>
  );
} 