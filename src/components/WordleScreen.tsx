import { useContext } from "react";
import { WordleContext } from "../context/WordleContext";
import { wordleLetter } from "../hooks/wordleHooks";
import {LetterTile} from "./LetterTile";
import './WordleScreen.scss';

export function WordleScreen(){
    
    const {currentBoard} = useContext(WordleContext);
    
    return (
    <div className="screen">
        {[0,1,2,3,4].map((lineIndex)=> <Word wordLine={currentBoard[lineIndex]} key={lineIndex} />)}
    </div>
    
);
}

interface wordProps { wordLine:wordleLetter[]};

function Word(props:wordProps){

    const {wordLine} = props;

    return (
        <div className='word'>
            {wordLine.map((letterObj:wordleLetter)=><LetterTile letterObj={letterObj} key={letterObj.x+letterObj.y} />)}
        </div>
    );
}