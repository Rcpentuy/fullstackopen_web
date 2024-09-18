const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      { name: "Fundamentals of React", exercises: 10 },
      { name: "Using props to pass data", exercises: 7 },
      { name: "State of a component", exercises: 14 },
    ],
  };
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  const { name: part1, exercises: exercises1 } = props.parts[0];
  const { name: part2, exercises: exercises2 } = props.parts[1];
  const { name: part3, exercises: exercises3 } = props.parts[2];
  return (
    <>
      {" "}
      <Part part={part1} exercises={exercises1} />
      <Part part={part2} exercises={exercises2} />
      <Part part={part3} exercises={exercises3} />
    </>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
};

const Total = (props) => {
  const { part1, exercises1 } = props.parts[0];
  const { part2, exercises2 } = props.parts[1];
  const { part3, exercises3 } = props.parts[2];
  return <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>;
};

export default App;
