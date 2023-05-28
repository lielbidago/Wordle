
import {  useRef } from "react";
import './LetterTile.scss';
import { wordleLetter } from "../hooks/wordleHooks";

export interface letterTileProps{
      letterObj: wordleLetter,
      currLetterPointer: {x:number, y:number, pRef:React.MutableRefObject<any>}
}

export default function LetterTile(props:letterTileProps) {
      
      const { currLetterPointer,letterObj } = props;

      const Tilekey = letterObj.x.toString() + ':' + letterObj.y.toString();
      const isCurrentPointer = letterObj.x === currLetterPointer.x && letterObj.y === currLetterPointer.y;

      const Ref = useRef(null);

      
      let focusRef = null;

      if (isCurrentPointer) {
            focusRef = currLetterPointer.pRef;
      } else {
            focusRef = Ref;
      }


      return <input className={"tile "+letterObj.color}
            value={letterObj.char}
            id={'t-' + Tilekey}
            ref={focusRef}

      ></input>;


};
