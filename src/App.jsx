import { useState } from 'react'
import "./App.css"

function App() {
  const [result,setResult]=useState("")
  const[tie,setTie]=useState(0)
  const [userWins,setuserWins]=useState(0)
  const [computerWins,setcomputerWins]=useState(0)
  const [move,setMove]=useState(0)

  function getComputerMove(){
    const num=Math.random()
    if (num<0.33){
      return "Rock"
    }else if(num<0.66){
      return "Paper"
    }else{
      return "Scissor"
    }
  }

  function handleMove(userMove){
    if(move < 5){
    let computerMove=getComputerMove()
    setMove(`You: ${userMove} | Computer ${computerMove}`)

    if (userMove===computerMove){
      setResult("It's a tie!")
      setTie(tie+1)
      setMove(move+1)
    }else if(
      (userMove==="Rock" && computerMove==="Scissor")||
      (userMove==="Paper" && computerMove==="Rock")||
      (userMove==="Scissor" && computerMove==="Paper")
    ){
      setResult("You Won!")
      setuserWins(userWins+1)
      setMove(move+1)
    }else{
      setResult("Computer Won!")
      setcomputerWins(computerWins+1)
      setMove(move+1)
    }
    }
  }

  function handleReset(){
    setuserWins(0)
    setcomputerWins(0)
    setTie(0)
    setMove(0)
  }

  if(move===3){
    if(userWins>computerWins){
      setTimeout(()=>{
        handleReset()
        alert("You Won!!")
      },200)
    }else if(userWins==computerWins){
      setTimeout(()=>{
        handleReset()
        alert("Game Tied!!")
      },200)
    }else{
      setTimeout(()=>{
        handleReset()
        alert("You Lost!!")
      },200)
    }
  }

  return (
    <div>
      <h1>Rock Paper Scissors</h1>
      <h2>Computer : You</h2>
      <h3>{computerWins} : {userWins}</h3>
      <h3>{result}</h3>
      <h3>Rounds:{move}</h3>
      <h3>Your Wins: {userWins} | Computer Wins: {computerWins} | Tie: {tie} </h3>
      <button onClick={()=>handleMove("Rock")}><i className="fa-regular fa-hand-back-fist"></i></button>
      <button onClick={()=>handleMove("Paper")}><i class="fa-solid fa-sheet-plastic"></i></button>
      <button onClick={()=>handleMove("Scissor")}><i class="fa-solid fa-scissors"></i></button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default App