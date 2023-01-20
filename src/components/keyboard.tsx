
import Key from "./key";
import { useContext } from "react";
import { WordleContext } from "../context/WordleContext";
import { keyboardKey } from "@testing-library/user-event";

interface keyboardProps{
    keyboardLetters:keyboardKey[][];
}

export function Keyboard(){


    const {useLetterEnter, currentKeyBoard} = useContext(WordleContext);
    
    return (<div className="keyboard" >

        <div className="row1">
        {currentKeyBoard[0].map(letter => <Key letter={letter} key={'k-'+letter.value} />)}
        </div>
        <div className="row2">
        {currentKeyBoard[1].map(letter => <Key letter={letter} key={'k-'+letter.value}/>)}
        </div>
        <div className="row3">
        {currentKeyBoard[2].map(letter => <Key letter={letter} key={'k-'+letter.value}/>)}
        </div>

    </div>);
}
