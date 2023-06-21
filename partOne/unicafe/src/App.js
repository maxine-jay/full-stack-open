import { useState } from "react";

const Button = ({ func, label }) => {
  return <button onClick={func}>{label}</button>;
};

const Title = ({ title }) => {
  return <h1>{title}</h1>;
};

const StatisticLine = ({ name, val }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{val}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad, total }) => {
  if (total > 0) {
    return (
      <table>
        <tbody>
          <StatisticLine name="Good" val={good} />
          <StatisticLine name="Neutral" val={neutral} />
          <StatisticLine name="Bad" val={bad} />
          <StatisticLine name="Total Feedback" val={total} />
          <StatisticLine name="Average" val={(good - bad) / total} />
          <StatisticLine
            name="Positive Feedback"
            val={`${Math.floor((good / total) * 100)}%`}
          />
        </tbody>
      </table>
    );
  } else {
    return <p>No feedback given.</p>;
  }
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);

  const handleGoodClick = () => {
    const updatedGood = good + 1;
    const updatedTotal = total + 1;
    setGood(updatedGood);
    setTotal(updatedTotal);
  };

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1;
    const updatedTotal = total + 1;
    setNeutral(updatedNeutral);
    setTotal(updatedTotal);
  };

  const handleBadClick = () => {
    const updatedBad = bad + 1;
    const updatedTotal = total + 1;
    setBad(updatedBad);
    setTotal(updatedTotal);
  };

  return (
    <>
      <Title title="Give Feedback" />
      <Button func={handleGoodClick} label="good" />
      <Button func={handleNeutralClick} label="neutral" />
      <Button func={handleBadClick} label="bad" />
      <Title title="Feedback Statistics" />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </>
  );
};

export default App;
