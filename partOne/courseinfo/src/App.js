import Course
 from "./components/Course";

const App = () => {
  const courses = [
    {
      name: "Half Stack Application Development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using Props to Pass Data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a Component",
          exercises: 14,
          id: 3,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];
  return (
    <>
      {courses.map((course) => (
        <Course key={course.id} name={course.name} parts={course.parts} />
      ))}
    </>
  );
};

export default App;
