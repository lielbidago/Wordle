import { useContext } from "react";
import { WordleContext } from "../context/WordleContext";
import {LetterTile} from "./LetterTile";
import './WordleScreen.scss';

export function WordleScreen(){
    
    const {currentBoard} = useContext(WordleContext);
    
    return (
    <div className="screen">
        {[0,1,2,3,4].map((lineIndex)=> <Word key={lineIndex} wordLine={currentBoard[lineIndex]} letterPointer={{x:0,y:lineIndex}}/>)}
    </div>
    
);
}

interface wordProps { wordLine:string[], letterPointer:{x:number, y: number }};

function Word({wordLine, letterPointer}: wordProps){

    return (
        <div className='word'>
            {wordLine.map((letter:string, index)=><LetterTile letter={letter} key={'Lt-'+index} letterPointer={{x:index, y:letterPointer.y}}/>)}
        </div>
    );
}