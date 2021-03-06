import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const points = anecdotes.map((anecdote) => 0)
  const [votes, setVotes] = useState([...points])

  const rngSelector = () => {
    let temp = Math.floor((Math.random() * 7))
    setSelected(temp)
  }

  const vote = () => {
    let temp = [...votes]
    temp[selected] += 1
    setVotes([...temp])
  }

  


  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <button onClick = {rngSelector}>Rerolrl</button>
      <button onClick = {vote}>Number of votes {votes[selected]}</button>
      <h2> Anecdote with most votes </h2>
      <WhoIsPopular votes = {votes} anecdotes = {anecdotes}/>
    </div>
  )
}

const WhoIsPopular = (props) => {
  let temp = props.votes
  const max = Math.max(...temp)
  const index = props.votes.indexOf(max)

  

  return (
    <>    
      <p>{props.anecdotes[index]} hi</p>
    </>
  )
}

export default App
