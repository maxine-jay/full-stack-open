const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Part = (props) => {
  return (
    <>
      <p>{props.name}, {props.exercises}</p>
    </>
  )
}

const Content = (props) => {
  const part1 = props.parts[0];
  const part2 = props.parts[1];
  const part3 = props.parts[2];
  return (
    <>
      <Part name={part1.name} exercises={part1.exercises} />
      <Part name={part2.name} exercises={part2.exercises} />
      <Part name={part3.name} exercises={part3.exercises} />
    </>
  );
};

const Total = (props) => {
  const exercises1 = props.parts[0].exercises;
  const exercises2 = props.parts[1].exercises;
  const exercises3 = props.parts[2].exercises;
  return (
    <p>Number of exercises = {exercises1 + exercises2 + exercises3}</p>
  )
}

const App = () => {
  const course = {
    name: "Half Stack Application Development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using Props to Pass Data",
        exercises: 7
      },
      {
        name: "State of a Component",
        exercises: 14
      }
    ]
  }

  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};
