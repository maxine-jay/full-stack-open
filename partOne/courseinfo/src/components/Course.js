const Header = ({ name }) => {
    return <h1>{name}</h1>;
  };
  
  const Part = ({ name, exercises }) => {
    return (
      <p>
        {name} - {exercises}
      </p>
    );
  };
  
  const Total = ({ parts }) => {
    let total = parts.reduce((sum, part) => {
      return sum + part.exercises;
    }, 0);
  
    return <p>Total of {total} exercises</p>;
  };


  const Course = ({ name, parts }) => {
    return (
      <>
        <Header name={name} />
        <ul>
          {parts.map((part) => (
            <li key={part.id}>
              <Part name={part.name} exercises={part.exercises} />
            </li>
          ))}
        </ul>
        <Total parts={parts} />
      </>
    );
  };

  export default Course;