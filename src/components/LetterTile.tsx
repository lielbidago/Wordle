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

    const isCurrentPointer:boolean = letterPointer.y === currLetterPointer.y && letterPointer.x === currLetterPointer.x;

    if(isCurrentPointer)
    {return(<input className="tile text-bg-light" readOnly 
         value={letter}
          key={Tilekey}
          autoFocus={isCurrentPointer}
          style={{border:"solid #0dcaf0 2px"}}
          ></input>);
    }else{
        return(<input readOnly className="tile"
        autoFocus={isCurrentPointer}
         value={letter}
          key={Tilekey}
          ></input>);

    }
        
    

          //style={isCurrentPointer ? {border:"solid pink 2px;"}: {border:"solid black 1px;"}}
    
};
