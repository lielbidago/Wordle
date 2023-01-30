
import { wordleLetter } from "../hooks/wordleHooks";
import LetterTile from "./LetterTile";
import './WordleScreen.scss';


interface wordleScreenProps{
    currentBoard:wordleLetter[][]
    currLetterPointer:{x:number, y:number, pRef:React.MutableRefObject<any>}
}
export function WordleScreen(wordleScreenProps:wordleScreenProps){
    
    const {currentBoard, currLetterPointer} = wordleScreenProps;
    
    return (
    <div className="screen">
        {[0,1,2,3,4].map((lineIndex)=> <Word wordLine={currentBoard[lineIndex]} key={lineIndex}
        lineIndex={lineIndex} currLetterPointer={currLetterPointer} />)}
    </div>
    
);
}

interface wordProps {
     wordLine:wordleLetter[],
    currLetterPointer: {x:number, y:number, pRef:React.MutableRefObject<any>},
    lineIndex:number
};

function Word(props:wordProps){

    const {wordLine, currLetterPointer,lineIndex} = props;
    
    return (
        <div className={'word'+lineIndex}>
            {wordLine.map((letterObj:wordleLetter)=><LetterTile letterObj={letterObj} key={letterObj.x+letterObj.y} currLetterPointer={currLetterPointer}/>)}
        </div>
    );
}