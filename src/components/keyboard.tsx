
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


{/* <div className="row1">
        <button id="Q">Q</button>
        <button id="W">W</button>
        <button id="E">E</button>
        <button id="R">R</button>
        <button id="T">T</button>
        <button id="Y">Y</button>
        <button id="U">U</button>
        <button id="I">I</button>
        <button id="O">O</button>
        <button id="P">P</button>
        </div>
        <div className="row2">
            <button id="A">A</button>
            <button id="S">S</button>
            <button id="D">D</button>
            <button id="F">F</button>
            <button id="G">G</button>
            <button id="H">H</button>
            <button id="J">J</button>
            <button id="K">K</button>
            <button id="L">L</button>
        </div>
        <div className="row3">
            <button id="Z">Z</button>
            <button id="X">X</button>
            <button id="C">C</button>
            <button id="V">V</button>
            <button id="B">B</button>
            <button id="N">N</button>
            <button id="M">M</button>
        </div> */}