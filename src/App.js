import React, { useEffect, useState } from 'react';
import './App.css';
import Cards from './Components/Cards';
import Scoreboard from './Components/Scoreboard';
import Start from './Components/Start';
import End from './Components/End';
import scale from './Components/sounds/scale.mp3'

function App() {

  const [points, setPoints] = useState(0)
  const [startGame, setStartGame] = useState(true)
  const [endGame, setEndGame] = useState(false)

 

  const countPoint = (e) => {
        setPoints(points+1)
  }

  const playGame = () => {
    new Audio(scale).play();
    setTimeout(() => {
      setStartGame(false)
    }, 1000)
  }

  const gameOver = () => {
    setEndGame(true)
  }

  const resetGame = () => {
    new Audio(scale).play();
    setTimeout(() => {
      setPoints(0)
      setEndGame(false)
    }, 1000)
  }

  useEffect(() => {
     if (points === 11) {
      gameOver()
     }
  }, [points])

  return (
    <div className="App">
      <h1>Test Your Memory</h1>

      { startGame === true && <Start playGame= { playGame } /> }
      <Scoreboard points= { points } />

      <div className= 'CardHolder'>
        <Cards countPoint= { countPoint } points= { points } gameOver= { gameOver }  />
      </div>
      
      { endGame === true && <End points= { points } resetGame= { resetGame } /> }
    </div>
  );
}

export default App;
