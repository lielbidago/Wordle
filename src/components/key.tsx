import { WordleContext } from "../context/WordleContext";
import { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './key.scss';
import { keyboardLetter } from "../hooks/wordleHooks";

interface props{
    letter:keyboardLetter;
    key:string;

}
export default function Key(props:props){

    const {LetterEnter} = useContext(WordleContext);
    const {letter} = props;

    // const useLetterEnter = (event: React.MouseEvent<HTMLElement>) =>{
    //     addLetterToBoard(props.keyValue);
    //     moveCurrLetterPointer();
    //     currLetterPointer.pRef.current.focus();
    // }

    const handleClick = (event: React.MouseEvent<HTMLElement>) =>{
        LetterEnter(letter.value);
    }
    
    return (
        <button type="button" className={"key btn btn-outline-dark "+letter.color} id={'k-'+letter.value}
        onClick={handleClick}>{letter.value}</button>
    );

}