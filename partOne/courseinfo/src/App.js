// const Header = (props) => {
//   return (
//     <>
//       <h1>{props.course}</h1>
//     </>
//   );
// };

// const Part = (props) => {
//   return (
//     <>
//       <p>{props.name}, {props.exercises}</p>
//     </>
//   )
// }

// const Content = (props) => {
//   const part1 = props.parts[0];
//   const part2 = props.parts[1];
//   const part3 = props.parts[2];
//   return (
//     <>
//       <Part name={part1.name} exercises={part1.exercises} />
//       <Part name={part2.name} exercises={part2.exercises} />
//       <Part name={part3.name} exercises={part3.exercises} />
//     </>
//   );
// };

// const Total = (props) => {
//   const exercises1 = props.parts[0].exercises;
//   const exercises2 = props.parts[1].exercises;
//   const exercises3 = props.parts[2].exercises;
//   return (
//     <p>Number of exercises = {exercises1 + exercises2 + exercises3}</p>
//   )
// }

// const App = () => {
//   const course = {
//     name: "Half Stack Application Development",
//     parts: [
//       {
//         name: "Fundamentals of React",
//         exercises: 10
//       },
//       {
//         name: "Using Props to Pass Data",
//         exercises: 7
//       },
//       {
//         name: "State of a Component",
//         exercises: 14
//       }
//     ]
//   }

//   return (
//     <>
//       <Header course={course.name} />
//       <Content parts={course.parts} />
//       <Total parts={course.parts} />
//     </>
//   );
// };

import { useState } from "react";

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const [allClicks, setAllClicks] = useState([])
  const [total, setTotal] = useState(0);

  const handleLeftClick = () => {
    setAllClicks(allClicks.concat('L'))
    setClicks({ 
      ...clicks,
      left: clicks.left + 1
    })
    setTotal(clicks.left + clicks.right)
  }

  const handleRightClick = () => {
    setAllClicks(allClicks.concat('R'))
    setClicks({ 
      ...clicks,
      right: clicks.right + 1 
    })
    setTotal(clicks.left + clicks.right)

  }

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
      <p>{allClicks.join(' ')}</p>
      <div>{total}</div>
    </div>
  )
}
export default App;