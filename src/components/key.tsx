import { WordleContext } from "../context/WordleContext";
import { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.css';

export default function Key(props){

    const {addLetterToBoard, moveCurrLetterPointer} = useContext(WordleContext);

    const useLetterEnter = (event: React.MouseEvent<HTMLElement>) =>{
        addLetterToBoard(props.keyValue);
        moveCurrLetterPointer();
    }
    
    return (
        <button type="button" className="key btn btn-outline-dark" 
        key={'k'+ props.keyValue}
        onClick={useLetterEnter}>{props.keyValue}</button>
    );
}