import { useState } from "react";


export default function Player({ name, symbol, isActive, onChangeName}) {
    const [playerName, setPlayerName] = useState(name);
    const [isEditing, setIsEditing] = useState(false);

    function handleChangeEdit() {
        setIsEditing((editing) => !editing);
        if(isEditing) { onChangeName(symbol, playerName); }
    }

    function handleChangePlayerName(changeNameEvent) {
        setPlayerName(changeNameEvent.target.value);
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {!isEditing ? <span className='player-name'>{playerName}</span> : <input type="text" required defaultValue={playerName} onChange={handleChangePlayerName}/>}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleChangeEdit}>{isEditing === false ? "Edit" : "Save"}</button>
        </li>
    );
}