import React, { useState } from "react"
import './App.css';
import Box from './components/Box'

function App() {
  // set initial value of curerntPlayer as "nobody"
  const [currentPlayer, setCurrentPlayer] = useState("X")
  
  // when user click
  // setCurrentPlayer("X");
  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <Box player={currentPlayer} />
      <Box player={currentPlayer} />
      <Box player={currentPlayer} />
      <Box player={currentPlayer} />
    </div>
  );
}

export default App;
