import { WordleContext } from "../context/WordleContext";
import { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './key.scss';

interface props{
    keyValue:string;
    key:string;
}
export default function Key(props:props){

    const {addLetterToBoard, moveCurrLetterPointer, currLetterPointer} = useContext(WordleContext);

    const useLetterEnter = (event: React.MouseEvent<HTMLElement>) =>{
        addLetterToBoard(props.keyValue);
        moveCurrLetterPointer();
        currLetterPointer.pRef.current.focus();
    }
    
    return (
        <button type="button" className="key btn btn-outline-dark" id={'k-'+props.keyValue}
        onClick={useLetterEnter}>{props.keyValue}</button>
    );

}