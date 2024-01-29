export default function Log({turns}){
    return (
        <ol id="log">
        {turns.map((el)=> 
            <li key={`${el.square.row}${el.square.col}`}>
            {el.player} selected {el.square.row},{el.square.col}
            </li>
        )}


        </ol>

    );
}