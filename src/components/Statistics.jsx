import React from 'react';

const Statistics = ({ good, neutral, bad, total }) => {
  const countPositiveFeedbackPercentage = () => (total > 0 ? Math.round((good / total) * 100) : 0);

  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {countPositiveFeedbackPercentage()}%</p>
    </div>
  );
};

export default Statistics;