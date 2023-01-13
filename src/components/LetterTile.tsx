import { WordleContext } from "../context/WordleContext";
import { useContext, useRef } from "react";


export function LetterTile({letter, letterPointer}){
    
    const { currLetterPointer,addLetterToBoard,moveCurrLetterPointer} = useContext(WordleContext);
    
    const Tilekey = letterPointer.x.toString() +':'+ letterPointer.y.toString();
    const isCurrentPointer = letterPointer.x===currLetterPointer.x && letterPointer.y===currLetterPointer.y;

    const Ref = useRef(null);
    let focusRef = null;

      if(isCurrentPointer){
            focusRef = currLetterPointer.pRef;
      }else{
            focusRef = Ref;
      }

      if(isCurrentPointer && letterPointer.x === 0 && letterPointer.y===0){
            return <input className="tile text-bg-light" readOnly 
            value={letter}
            id={Tilekey}
            ref = {focusRef}
            autoFocus
            ></input>;
      
      }
      
      return  <input className="tile text-bg-light" readOnly 
      value={letter}
      id={Tilekey}
      ref = {focusRef}
      ></input>;
    
    
};
