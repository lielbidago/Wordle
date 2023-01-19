import { WordleContext } from "../context/WordleContext";
import { useContext, useRef } from "react";
import './LetterTile.scss';
import { wordleLetter } from "../hooks/wordleHooks";

interface letterTileProps{
      letterObj: wordleLetter,
      
}

export function LetterTile(props:letterTileProps) {
      
      const { currLetterPointer } = useContext(WordleContext);
      const {letterObj} = props;

      const Tilekey = letterObj.x.toString() + ':' + letterObj.y.toString();
      const isCurrentPointer = letterObj.x === currLetterPointer.x && letterObj.y === currLetterPointer.y;

      const Ref = useRef(null);
      // let focusRef = null;

      // if (isCurrentPointer) {
      //       focusRef = currLetterPointer.pRef;
      // } else {
      //       focusRef = Ref;
      // }

      if (isCurrentPointer && letterObj.x === 0 && letterObj.y === 0) {
            return <input className="tile"readOnly
                  value={letterObj.char}
                  id={'t-' + Tilekey}
                  ref={Ref}
                  autoFocus
            ></input>;
      }

      return <input className="tile" readOnly
            value={letterObj.char}
            id={'t-' + Tilekey}
            ref={Ref}

      ></input>;


};
