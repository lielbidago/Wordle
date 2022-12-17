import { WordleContext } from "../context/WordleContext";
import { useContext } from "react";

export function LetterTile({letter, letterPointer}){
    
    const { currLetterPointer,addLetterToBoard,moveCurrLetterPointer} = useContext(WordleContext);
    
    // const useKeyboardEnter = (event: React.KeyboardEvent) => {
    //     if ("qwertyuioplkjhgfdsazxcvbnm".includes(event.key)){
    //         addLetterToBoard(event.key);
    //         moveCurrLetterPointer();
    //     }

    // }
    
    const Tilekey = letterPointer.x.toString() + letterPointer.y.toString();
    
    if (letterPointer.y === currLetterPointer.y && letterPointer.x === currLetterPointer.x){
         return (<input readOnly
             className="tile"
              value={letter}
               key={Tilekey}
               autoFocus
                style={{border:"solid 2px black"}}
                ></input>);
                // onKeyDown={useKeyboardEnter}
    }
    else{
        return(<input readOnly className="tile" value={letter} key={Tilekey}></input>);
    }
};
