import { WordleContext } from "../context/WordleContext";
import { useContext, useRef } from "react";



export function LetterTile({letter, letterPointer}){
    
    const { currLetterPointer,addLetterToBoard,moveCurrLetterPointer} = useContext(WordleContext);
    
    const Tilekey = letterPointer.x.toString() + letterPointer.y.toString();
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
            key={Tilekey}
            ref = {focusRef}
            autoFocus
            ></input>;
      
      }
      
      return  <input className="tile text-bg-light" readOnly 
      value={letter}
      key={Tilekey}
      ref = {focusRef}
      ></input>;

      // if(isCurrentPointer){
      //       return focusRef.current.focus();
      // }else{
      //       return focusRef.current;
      // }
      // }else{
      //       return <input className="tile text-bg-light" readOnly 
      // value={letter}
      // key={Tilekey}
      // ></input>;
      // }
    
    
};
