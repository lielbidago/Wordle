import { WordleContext } from "../context/WordleContext";
import { useContext } from "react";

export function LetterTile({letter, letterPointer}){
    
    const {currentBoard, setCurrentBoard, currLetterPointer, setCurrLetterPointer} = useContext(WordleContext);
    const Tilekey = letterPointer.x.toString() + letterPointer.y.toString();
    
    if (letterPointer.y === currLetterPointer.y && letterPointer.x === currLetterPointer.x){
        return(<input readOnly className="tile" value={letter} key={Tilekey} style={{border:"solid 2px black"}}></input>);
    }
    else{
        return(<input readOnly className="tile" value={letter} key={Tilekey}></input>);
    }
};
