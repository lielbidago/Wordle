import { WordleContext } from "../context/WordleContext";
import { useContext, useRef } from "react";


// interface Tile{
//       letter: string | null;
//       tileColor:string | null;
//       ref:React.RefObject<HTMLElement> | null;
// }

// export function LetterTile({ letter, letterPointe }:Tile) {
export function LetterTile({ letter, letterPointer }) {
      const { currLetterPointer } = useContext(WordleContext);

      const Tilekey = letterPointer.x.toString() + ':' + letterPointer.y.toString();
      const isCurrentPointer = letterPointer.x === currLetterPointer.x && letterPointer.y === currLetterPointer.y;

      const Ref = useRef(null);
      let focusRef = null;

      if (isCurrentPointer) {
            focusRef = currLetterPointer.pRef;
      } else {
            focusRef = Ref;
      }

      if (isCurrentPointer && letterPointer.x === 0 && letterPointer.y === 0) {
            return <input className="tile"readOnly
                  value={letter}
                  id={'t-' + Tilekey}
                  ref={focusRef}
                  autoFocus
            ></input>;
      }

      return <input className="tile" readOnly
            value={letter}
            id={'t-' + Tilekey}
            ref={focusRef}

      ></input>;


};
