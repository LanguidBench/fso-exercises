const App = () => 
{
  const course = 
  {
    name: 'Half Stack application development',
    parts: 
    [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course = {course.name} />
      <Content parts = {course.parts} />
      <Total total = {course.parts}/>
    </div>
  )
}

const Header = (props) =>
{
  return (
    <>
      <h1>{props.course}</h1>  
    </>
  )
}

const Content = (props) =>
{

  return (
    <>
      <Part part = {props.parts[0]}/>
      <Part part = {props.parts[1]}/>
      <Part part = {props.parts[2]}/>
    </>
  )
}

const Part = (prop) =>
{
  return (
    <>
      <p>{prop.part.name} {prop.part.exercises}</p>
    </>
  )
}



const Total = (props) =>
{
  return (
    <>
      <p>
        Number of exercises {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises}
      </p>
    </>
  )
}


export default App;
