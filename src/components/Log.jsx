export default function Log({ logs }) {

    return (
        <ol id="log">
            {logs.map((move) => (
                <li key={`${move.square.row}${move.square.col}`}>
                    {move.player} selected {move.square.row}, {move.square.col}
                </li>
            ))}
        </ol>
    );
}