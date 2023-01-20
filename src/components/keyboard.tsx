
import Key from "./key";
import { useContext } from "react";
import { WordleContext } from "../context/WordleContext";
import { keyboardLetter } from "../hooks/wordleHooks";


export function Keyboard(){


    const {LetterEnter, currentKeyBoard} = useContext(WordleContext);
    
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
