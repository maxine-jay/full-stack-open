import { useState } from "react";

const Button = ({ func, label }) => {
  return <button onClick={func}>{label}</button>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(
    new Array(anecdotes.length + 1).join("0").split("").map(parseFloat)
  );
  const [winnerIndex, setWinnerIndex] = useState(0)
  const generateRandomAnecdote = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
  };

  const vote = () => {
    const arr = [...votes];
    arr[selected] += 1;
    setVotes(arr);
    setWinnerIndex(arr.indexOf(Math.max(...arr)))
  };

  return (
    <>
      <h1>Anecdote of the day</h1>
      <Button func={generateRandomAnecdote} label={"Next Anecdote"} />
      <p>{anecdotes[selected]}</p>
      <div>
        <p>This anecdote has {votes[selected]} votes</p>
        <Button func={vote} label={"Vote"} />
      </div>

      <h1>Most popular anecdote</h1>
      <p>{anecdotes[winnerIndex]}</p>
      <p>This anecdote has {votes[winnerIndex]} votes</p>
    </>
  );
};

export default App;
