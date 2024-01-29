import {useState} from "react";
import Player from "./components/Player";
import Gameborad from "./components/GameBorad";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./winning-combinations"; 
function deriveActivePlayer(gameTurns){
  let activePlayer;
  if(gameTurns.length===0)
  activePlayer='X';
else
{
  if(gameTurns[0].player==='X')
  activePlayer='O';
else
activePlayer='X';
}
return activePlayer;
}
const initialGameBorad=[
  [null,null,null],
  [null,null,null],
  [null,null,null]
]
function App() {
  const [gameTurns,setGameTurns]=useState([]);
  let activePlayer=deriveActivePlayer(gameTurns);
  let gameBorad=[...initialGameBorad.map((array)=> [...array])];
  let winner=null;
  for(const turn of gameTurns)
  {
      const {square,player}=turn;
      const {row,col}=square;
      gameBorad[row][col]=player;
  }
  for(const combination of WINNING_COMBINATIONS)
  {
    const firstSquare=gameBorad[combination[0].row][combination[0].column];
    const secondSquare=gameBorad[combination[1].row][combination[1].column];
    const thirdSquare=gameBorad[combination[2].row][combination[2].column];
    if(firstSquare)
    {
      if(firstSquare===secondSquare && firstSquare===thirdSquare)
        winner=firstSquare;
    }
  }
  const hasDraw=gameTurns.length===9 && !winner;
  function changePlayer(row,col){
    setGameTurns((prevGameTurns)=>{
           let currentPlayer=deriveActivePlayer(prevGameTurns);
           const updatedGameTurns=[{square:{row:row,col:col},player:currentPlayer},...prevGameTurns];
          return updatedGameTurns;
    })
  }
  function gameReset(){
    setGameTurns([]);
  }
  return (
    <main>
      <div id="game-container">
       <ol id="players" className="highlight-player">
        <Player name="Player 1" symbol="X" isActive={activePlayer==='X'?true:false}/>
        <Player name="Player 2" symbol="O" isActive={activePlayer==='O'?true:false}/>
       </ol>
       {(winner || hasDraw) && <GameOver winner={winner} onSelect={gameReset} />}
      <Gameborad onSelect={changePlayer} gameBorad={gameBorad} />
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
