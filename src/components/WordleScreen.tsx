import { useContext } from "react";
import { ScreenContext } from "../context/screenContext";
import {LetterTile} from "./LetterTile";



export function WordleScreen(){
    
    const {currentBoard, setCurrentBoard} = useContext(ScreenContext);
    
    return (<div className="game">
    <header><h1>my wordle game</h1></header>
    <div className="screen">
        {[0,1,2,3,4].map((line)=> <Word wordLine={currentBoard[line]}/>)}
    </div>
    
</div>);
}

function Word({wordLine}){

    return (
        <div className='word'>
            {wordLine.map((letter:string)=>LetterTile(letter))}
        </div>
    );
}