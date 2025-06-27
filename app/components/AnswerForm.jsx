import React from 'react';
import styles from '../styles/SimpleGameLayout.module.css';

export default function AnswerForm({
  userAnswer,
  setUserAnswer,
  onSubmit,
  disabled,
  inputId = 'answer',
  inputType = 'number',
  inputLabel = '',
  buttonText = 'Submit',
}) {
  return (
    <form
      className={styles.answerForm}
      onSubmit={e => {
        e.preventDefault();
        if (!disabled) onSubmit();
      }}
      autoComplete="off"
    >
      {inputLabel && (
        <label htmlFor={inputId} className={styles.inputLabel}>
          {inputLabel}
        </label>
      )}
      <input
        id={inputId}
        type={inputType}
        value={userAnswer}
        onChange={e => setUserAnswer(e.target.value)}
        className={styles.input}
        disabled={disabled}
        required
      />
      <button
        type="submit"
        className={`${styles.button} ${disabled ? styles.disabledButton : ''}`}
        disabled={disabled}
      >
        {buttonText}
      </button>
    </form>
  );
} 