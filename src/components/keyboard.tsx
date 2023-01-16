
import Key from "./key";
import { useContext } from "react";
import { WordleContext } from "../context/WordleContext";

export function Keyboard(){

    const {keyboardLetters} = useContext(WordleContext);
    
    return (<div className="keyboard" >

        <div className="row1">
        {keyboardLetters[0].map(letter => <Key keyValue={letter} key={'k-'+letter}/>)}
        </div>
        <div className="row2">
        {keyboardLetters[1].map(letter => <Key keyValue={letter} key={'k-'+letter}/>)}
        </div>
        <div className="row3">
        {keyboardLetters[2].map(letter => <Key keyValue={letter} key={'k-'+letter}/>)}
        </div>

    </div>);
}
