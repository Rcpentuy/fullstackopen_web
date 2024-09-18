import { useState } from "react";

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>;
};

const Display = (props) => {
  return (
    <p>
      {props.text} {props.value}
    </p>
  );
};

const Statistics = (props) => {
  const { good, neutral, bad } = props.feedbacks;
  const all = good + neutral + bad;
  if (all > 0) {
    return (
      <>
        <h1>statistics</h1>
        <Display value={good} text="good" />
        <Display value={neutral} text="neutral" />
        <Display value={bad} text="bad" />
        <Display value={all} text="all" />
        <Display value={(good - bad) / all} text="average" />
        <Display value={`${(100 * good) / all}%`} text="positive" />
      </>
    );
  } else {
    return (
      <>
        <h1>statistics</h1>
        <p>no feedback provided</p>
      </>
    );
  }
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const feedbacks = {
    good: good,
    neutral: neutral,
    bad: bad,
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <Statistics feedbacks={feedbacks} />
    </div>
  );
};

export default App;
