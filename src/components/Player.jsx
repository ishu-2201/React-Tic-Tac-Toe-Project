import { useState } from "react";
export default function Player({symbol,name,isActive}){
    const [playerName,setPlayerName]=useState(name);
    const [isEditing,setIsEditing]=useState(false);
    function handleClick(){
        setIsEditing((editing)=> !editing);
    }
    function handleChange(e){
       setPlayerName(e.target.value);
    }
    let playercode;
    if(!isEditing)
    playercode= <span className="player-name">{playerName}</span>;
    else
    playercode=<input type="text" value={playerName}  required onChange={handleChange} />
    return(
        <li className={isActive?"active":undefined}>
        <span className="player">
        {playercode}
        <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleClick}>{isEditing?"Save":"Edit"}</button>
       </li>
    );
}