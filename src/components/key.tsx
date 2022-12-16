import { WordleContext } from "../context/WordleContext";
import { useContext } from "react";

export function Key(props){

    const {addLetterToBoard, moveCurrLetterPointer} = useContext(WordleContext);

    const useLetterEnter = (event: React.MouseEvent<HTMLElement>) =>{
        addLetterToBoard(props.keyValue);
        moveCurrLetterPointer();
    }
    
    return (
        <button className="key" 
        key={'k'+ props.keyValue}
        onClick={useLetterEnter}>{props.keyValue}</button>
    );
}