
import Key from "./key";
import { keyboardLetter } from "../hooks/wordleHooks";

interface keyboardProps{
    LetterEnter:(key:string)=>void;
    currentKeyBoard:keyboardLetter[][];
}

export function Keyboard(keyboardProps:keyboardProps){


    const {LetterEnter, currentKeyBoard} = keyboardProps;
    
    return (<div className="keyboard" >

        <div className="row1">
        {currentKeyBoard[0].map((letter:keyboardLetter) => <Key letter={letter} key={'k-'+letter.value} LetterEnter={LetterEnter}/>)}
        </div>
        <div className="row2">
        {currentKeyBoard[1].map((letter:keyboardLetter) => <Key letter={letter} key={'k-'+letter.value} LetterEnter={LetterEnter}/>)}
        </div>
        <div className="row3">
        {currentKeyBoard[2].map((letter:keyboardLetter) => <Key letter={letter} key={'k-'+letter.value} LetterEnter={LetterEnter}/>)}
        </div>

    </div>);
}
