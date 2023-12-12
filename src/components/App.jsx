import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Section from './Section';

const App = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const handleFeedback = (type) => {
    setState((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  return (
    <div>
      <h1>Cafe Expresso - Collecting reviews</h1>
      <Section title="Please leave feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={handleFeedback} />
      </Section>
      {state.good + state.neutral + state.bad > 0 ? (
        <Section title="Statistics">
          <Statistics good={state.good} neutral={state.neutral} bad={state.bad} />
        </Section>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default App;