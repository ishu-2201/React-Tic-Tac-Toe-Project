export default function GameOver({winner,onSelect}){
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
           {winner && <p>Player {winner} won!</p>}
           {!winner && <p>It is a draw</p>}
            <p><button onClick={onSelect}>Rematch!</button></p>
        </div>
    )
}