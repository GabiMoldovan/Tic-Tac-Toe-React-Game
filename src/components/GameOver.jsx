export default function GameOver({winner, onRestart}){
    return <div id="game-over">
        <h2>Game Over!</h2>
        {winner !== "Draw" ? <p>{winner} won!</p> : <p>It&apos;s a draw!</p>}
        <button onClick={onRestart}>Rematch</button>
    </div>
}